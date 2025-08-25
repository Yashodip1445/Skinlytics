export default function HowItWorksSection() {
  return (
    <section 
      id="work" 
      data-testid="how-it-works-section"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          data-testid="how-it-works-title"
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-12"
        >
          How it Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="relative">
            <div 
              data-testid="step-upload"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-6">📷</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Upload Photo</h3>
              <p className="text-gray-600">Take or upload a clear photo of the skin area you want analyzed</p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-medical-blue text-2xl">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="relative">
            <div 
              data-testid="step-analysis"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">AI Analysis</h3>
              <p className="text-gray-600">Our AI examines patterns, colors, textures, and other visual features</p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-medical-blue text-2xl">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="relative">
            <div 
              data-testid="step-results"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Results</h3>
              <p className="text-gray-600">Get detailed predictions with confidence levels and risk assessments</p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-medical-blue text-2xl">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div 
            data-testid="step-recommendations"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-5xl mb-6">💡</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Recommendations</h3>
            <p className="text-gray-600">Receive personalized care tips and professional consultation advice</p>
          </div>
        </div>
      </div>
    </section>
  );
}