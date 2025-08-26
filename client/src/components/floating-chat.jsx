import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      message: 'Welcome!',
      response: "Hi! I'm your AI skin assistant. Ask me about skincare, ingredients, treatments, or upload concerns!",
      isUser: false
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const { toast } = useToast();

  // Generate a simple session ID
  const sessionId = 'session_' + Date.now();

  const mockChatResponse = async (message) => {
    await new Promise((r) => setTimeout(r, 700));

    const lower = message.toLowerCase();
    if (lower.includes("dry") || lower.includes("dehydr")) {
      return { response: "Consider a hydrating routine: gentle cleanser, hyaluronic acid, and a ceramide moisturizer. SPF daily." };
    }
    if (lower.includes("oily") || lower.includes("acne")) {
      return { response: "Try salicylic acid 0.5–2% and a non‑comedogenic moisturizer. Introduce niacinamide and use SPF." };
    }
    if (lower.includes("red") || lower.includes("irrit")) {
      return { response: "Look for soothing ingredients like panthenol and centella. Avoid fragrance and patch test." };
    }
    return { response: "Great question! Keep a simple routine: cleanse, treat, moisturize, and protect with SPF. Consistency is key." };
  };

  const chatMutation = useMutation({
    mutationFn: async (message) => mockChatResponse(message),
    onSuccess: (data, message) => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        message,
        response: data.response,
        isUser: false
      }]);
    },
    onError: () => {
      toast({
        title: "Chat Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      message: inputMessage,
      response: '',
      isUser: true
    };
    
    setMessages(prev => [...prev, userMessage]);
    chatMutation.mutate(inputMessage);
    setInputMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        data-testid="floating-chat-button"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-medical-blue to-light-blue text-white rounded-full w-14 h-14 text-xl shadow-lg hover:scale-110 transition-all duration-300 z-40"
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-comments"}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          data-testid="chat-window"
          className="fixed bottom-24 right-6 w-80 max-h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-fade-in"
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-medical-blue to-light-blue text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <i className="fas fa-robot mr-2"></i>
              <span className="font-semibold">SkinAI Assistant</span>
            </div>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></span>
          </div>

          {/* Chat Messages */}
          <div 
            data-testid="chat-messages"
            className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3 min-h-48 max-h-64"
          >
            {messages.map((msg) => (
              <div key={msg.id}>
                {msg.isUser ? (
                  <div 
                    data-testid={`user-message-${msg.id}`}
                    className="flex items-start space-x-2 flex-row-reverse"
                  >
                    <div className="bg-medical-blue rounded-full p-1 shadow-sm">
                      <i className="fas fa-user text-white text-xs"></i>
                    </div>
                    <div className="bg-medical-blue text-white rounded-lg p-3 shadow-sm max-w-xs">
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ) : (
                  <div 
                    data-testid={`bot-message-${msg.id}`}
                    className="flex items-start space-x-2"
                  >
                    <div className="bg-white rounded-full p-1 shadow-sm">
                      <i className="fas fa-robot text-medical-blue text-xs"></i>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                      <p className="text-sm text-gray-800">{msg.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {chatMutation.isPending && (
              <div 
                data-testid="chat-loading"
                className="flex items-start space-x-2"
              >
                <div className="bg-white rounded-full p-1 shadow-sm">
                  <i className="fas fa-robot text-medical-blue text-xs"></i>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skincare..." 
                data-testid="chat-input"
                className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue/50 focus:border-medical-blue"
                disabled={chatMutation.isPending}
              />
              <button 
                onClick={sendMessage}
                disabled={chatMutation.isPending || !inputMessage.trim()}
                data-testid="chat-send-button"
                className="bg-medical-blue text-white rounded-full px-3 py-2 hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50"
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}