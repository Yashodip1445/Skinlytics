import OpenAI from "openai";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY || "your-openai-api-key"
});

export async function analyzeImage(base64Image) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
      messages: [
        {
          role: "system",
          content: `You are a dermatology AI assistant. Analyze the provided skin image and provide a detailed assessment in JSON format. Be professional but reassuring. Always include a medical disclaimer. Focus on visible characteristics like texture, color, and any notable features.

          Respond with JSON in this exact format:
          {
            "primaryDetection": "Main finding (e.g., 'Normal Skin', 'Mild Acne', 'Dry Skin')",
            "confidence": "Confidence level as percentage (e.g., '85% Confidence')",
            "description": "Detailed description of findings",
            "observations": [
              {
                "category": "Skin Texture",
                "observation": "Description of texture",
                "status": "good|concern|info"
              }
            ],
            "recommendations": [
              {
                "icon": "fas fa-sun",
                "recommendation": "Specific care recommendation"
              }
            ]
          }`
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Please analyze this skin image and provide a comprehensive assessment. Focus on visible characteristics and provide helpful care recommendations."
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`
              }
            }
          ],
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 1000,
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    
    return {
      primaryDetection: result.primaryDetection || "Analysis Complete",
      confidence: result.confidence || "Processing Complete",
      description: result.description || "Image analysis has been completed.",
      observations: result.observations || [
        {
          category: "General Assessment",
          observation: "Analysis completed successfully",
          status: "info"
        }
      ],
      recommendations: result.recommendations || [
        {
          icon: "fas fa-user-md",
          recommendation: "Consult with a dermatologist for professional advice"
        }
      ]
    };
  } catch (error) {
    console.error("OpenAI analysis error:", error);
    throw new Error("Failed to analyze image with AI service");
  }
}

export async function getChatResponse(message) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
      messages: [
        {
          role: "system",
          content: `You are a helpful skin care AI assistant. Provide accurate, helpful information about skincare, common skin conditions, ingredients, and general care tips. Always remind users that your advice is educational and they should consult healthcare professionals for medical concerns. Keep responses concise but informative.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 300,
    });

    return response.choices[0].message.content || "I'm here to help with your skincare questions!";
  } catch (error) {
    console.error("OpenAI chat error:", error);
    return "I apologize, but I'm having trouble processing your question right now. Please try again.";
  }
}