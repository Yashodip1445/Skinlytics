import { useState } from "react";

export default function NavigationHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        data-testid="navigation-header"
        className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg flex justify-between items-center px-6 md:px-10 py-3 shadow-lg z-50 transition-all duration-300"
      >
        <h1 className="text-xl md:text-2xl font-bold text-medical-blue">
          <i className="fas fa-microscope mr-2"></i>SkinAI Care
        </h1>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                data-testid="nav-home"
                className="text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('ai')}
                data-testid="nav-ai"
                className="text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
              >
                AI Technologies
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('work')}
                data-testid="nav-work"
                className="text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
              >
                How it Works
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('feature')}
                data-testid="nav-analysis"
                className="text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
              >
                Analysis
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('chatbot')}
                data-testid="nav-assistant"
                className="text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
              >
                Assistant
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                data-testid="nav-contact"
                className="text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-button"
          className="md:hidden text-gray-700 hover:text-medical-blue"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          data-testid="mobile-menu"
          className="fixed top-16 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-40 animate-fade-in"
        >
          <nav className="p-6">
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  data-testid="mobile-nav-home"
                  className="block text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ai')}
                  data-testid="mobile-nav-ai"
                  className="block text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
                >
                  AI Technologies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('work')}
                  data-testid="mobile-nav-work"
                  className="block text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
                >
                  How it Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('feature')}
                  data-testid="mobile-nav-analysis"
                  className="block text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
                >
                  Analysis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('chatbot')}
                  data-testid="mobile-nav-assistant"
                  className="block text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
                >
                  Assistant
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  data-testid="mobile-nav-contact"
                  className="block text-gray-700 hover:text-medical-blue font-medium transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
