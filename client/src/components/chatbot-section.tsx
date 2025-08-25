export default function ChatbotSection() {
  return (
    <section 
      id="chatbot" 
      data-testid="chatbot-section"
      className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 
          data-testid="chatbot-title"
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-8"
        >
          AI Skin Assistant
        </h2>
        <p 
          data-testid="chatbot-description"
          className="text-lg text-gray-600 mb-12"
        >
          Get instant answers to your skin-related questions from our AI assistant
        </p>
        
        {/* Chat Interface Preview */}
        <div 
          data-testid="chat-preview"
          className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-medical-blue to-light-blue text-white p-4 flex items-center">
            <i className="fas fa-robot mr-3 text-xl"></i>
            <span className="font-semibold">SkinAI Assistant</span>
            <span className="ml-auto text-sm opacity-90">Always available</span>
          </div>
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            <div 
              data-testid="demo-bot-message"
              className="flex items-start space-x-3"
            >
              <div className="bg-gray-100 rounded-full p-2">
                <i className="fas fa-robot text-medical-blue"></i>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm text-gray-800">Hello! I'm here to help with your skin care questions. What would you like to know?</p>
              </div>
            </div>
            <div 
              data-testid="demo-user-message"
              className="flex items-start space-x-3 flex-row-reverse"
            >
              <div className="bg-medical-blue rounded-full p-2">
                <i className="fas fa-user text-white"></i>
              </div>
              <div className="bg-medical-blue text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">What's the best sunscreen for sensitive skin?</p>
              </div>
            </div>
            <div 
              data-testid="demo-bot-response"
              className="flex items-start space-x-3"
            >
              <div className="bg-gray-100 rounded-full p-2">
                <i className="fas fa-robot text-medical-blue"></i>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm text-gray-800">For sensitive skin, look for mineral sunscreens with zinc oxide or titanium dioxide. These are less likely to cause irritation compared to chemical sunscreens.</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Ask about skincare, treatments, ingredients..." 
                data-testid="demo-chat-input"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue/50 focus:border-medical-blue"
                disabled
              />
              <button 
                data-testid="demo-send-button"
                className="bg-medical-blue text-white rounded-full px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
                disabled
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        <p 
          data-testid="chat-instruction"
          className="text-gray-500 text-sm mt-6"
        >
          Click the floating chat button to start a conversation!
        </p>
      </div>
    </section>
  );
}
