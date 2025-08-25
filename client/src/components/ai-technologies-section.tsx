export default function AITechnologiesSection() {
  return (
    <section 
      id="ai" 
      data-testid="ai-technologies-section"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          data-testid="ai-title"
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-8"
        >
          AI Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            data-testid="ai-card-models"
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl text-medical-blue mb-4">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Advanced AI Models</h3>
            <p className="text-gray-600">Powered by state-of-the-art computer vision models for accurate skin condition detection and analysis.</p>
          </div>
          <div 
            data-testid="ai-card-security"
            className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl text-green-600 mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Secure & Private</h3>
            <p className="text-gray-600">Your images are processed securely with end-to-end encryption and are never stored permanently.</p>
          </div>
          <div 
            data-testid="ai-card-results"
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl text-purple-600 mb-4">
              <i className="fas fa-lightning-bolt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Instant Results</h3>
            <p className="text-gray-600">Get comprehensive analysis results in seconds with cloud-based processing power.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
