import { createServer } from "http";
import { storage } from "./storage";
import { insertAnalysisSchema, insertChatMessageSchema } from "../shared/schema.js";
import { analyzeImage, getChatResponse } from "./services/openai";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

export async function registerRoutes(app) {
  
  // Analyze uploaded skin image
  app.post("/api/analyze", upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No image file provided" });
      }

      const imageBuffer = req.file.buffer;
      const base64Image = imageBuffer.toString('base64');
      
      // Get AI analysis from OpenAI
      const analysis = await analyzeImage(base64Image);
      
      // Store the analysis result
      const analysisData = {
        userId: null,
        imageData: base64Image,
        primaryDetection: analysis.primaryDetection,
        confidence: analysis.confidence,
        description: analysis.description,
        observations: analysis.observations,
        recommendations: analysis.recommendations
      };

      const validatedData = insertAnalysisSchema.parse(analysisData);
      const result = await storage.createAnalysisResult(validatedData);
      
      res.json({
        id: result.id,
        primaryDetection: result.primaryDetection,
        confidence: result.confidence,
        description: result.description,
        observations: result.observations,
        recommendations: result.recommendations
      });
    } catch (error) {
      console.error("Analysis error:", error);
      res.status(500).json({ 
        error: "Failed to analyze image. Please try again." 
      });
    }
  });

  // Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      
      if (!message || !sessionId) {
        return res.status(400).json({ error: "Message and session ID required" });
      }

      // Get AI response
      const response = await getChatResponse(message);
      
      // Store chat message and response
      const chatData = {
        sessionId,
        message,
        response
      };

      const validatedData = insertChatMessageSchema.parse(chatData);
      await storage.createChatMessage(validatedData);
      
      res.json({ response });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ 
        error: "Failed to process chat message. Please try again." 
      });
    }
  });

  // Get chat history
  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const history = await storage.getChatHistory(sessionId);
      res.json(history);
    } catch (error) {
      console.error("Chat history error:", error);
      res.status(500).json({ 
        error: "Failed to retrieve chat history" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}