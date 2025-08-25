import skinAnalysisImage from '@assets/generated_images/AI_skin_analysis_interface_41cfdad2.png';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      id="home" 
      data-testid="hero-section"
      className="min-h-screen bg-gradient-to-br from-warm-peach to-coral flex flex-col justify-center items-center px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 
              data-testid="hero-title"
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              AI-Powered Skin Analysis
            </h2>
            <p 
              data-testid="hero-description"
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Upload your photo, let our advanced AI analyze your skin condition, and get instant insights with personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('feature')}
                data-testid="button-try-analysis"
                className="bg-gradient-to-r from-medical-blue to-light-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-camera mr-2"></i>Try Analysis
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                data-testid="button-learn-how"
                className="bg-white/90 backdrop-blur text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 shadow-lg"
              >
                <i className="fas fa-play-circle mr-2"></i>Learn How
              </button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={skinAnalysisImage}
                alt="AI Skin Analysis Interface"
                data-testid="hero-image"
                className="w-full max-w-lg rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-pulse-slow">
                <i className="fas fa-brain text-medical-blue text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce-gentle">
        <i className="fas fa-chevron-down text-gray-600 text-2xl"></i>
      </div>
    </section>
  );
}
