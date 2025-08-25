import { randomUUID } from "crypto";

export class MemStorage {
  constructor() {
    this.users = new Map();
    this.analysisResults = new Map();
    this.chatMessages = new Map();
  }

  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAnalysisResult(analysis) {
    const id = randomUUID();
    const result = { 
      ...analysis, 
      id, 
      createdAt: new Date() 
    };
    this.analysisResults.set(id, result);
    return result;
  }

  async getAnalysisResult(id) {
    return this.analysisResults.get(id);
  }

  async createChatMessage(message) {
    const id = randomUUID();
    const chatMessage = { 
      ...message, 
      id, 
      createdAt: new Date() 
    };
    this.chatMessages.set(id, chatMessage);
    return chatMessage;
  }

  async getChatHistory(sessionId) {
    return Array.from(this.chatMessages.values())
      .filter(msg => msg.sessionId === sessionId)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }
}

export const storage = new MemStorage();