export default function Footer() {
  return (
    <footer 
      data-testid="footer"
      className="bg-gray-800 text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div data-testid="footer-brand">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fas fa-microscope mr-2 text-medical-blue"></i>SkinAI Care
            </h3>
            <p className="text-gray-400 text-sm">Advanced AI-powered skin analysis for better health awareness and care.</p>
          </div>
          <div data-testid="footer-features">
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Skin Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Assistant</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Progress Tracking</a></li>
            </ul>
          </div>
          <div data-testid="footer-resources">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div data-testid="footer-social">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                data-testid="social-twitter"
                className="text-gray-400 hover:text-white text-xl transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                data-testid="social-linkedin"
                className="text-gray-400 hover:text-white text-xl transition-colors"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="#" 
                data-testid="social-github"
                className="text-gray-400 hover:text-white text-xl transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p 
            data-testid="copyright"
            className="text-gray-400 text-sm mb-4"
          >
            © 2025 SkinAI Care. All rights reserved.
          </p>
          <div 
            data-testid="footer-disclaimer"
            className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 text-left max-w-4xl mx-auto"
          >
            <div className="flex items-start">
              <i className="fas fa-exclamation-triangle text-yellow-500 mr-3 mt-1"></i>
              <div>
                <p className="text-yellow-200 font-semibold text-sm mb-1">Medical Disclaimer</p>
                <p className="text-yellow-100/80 text-sm">This tool is for educational and informational purposes only. It is not intended to diagnose, treat, cure, or prevent any skin condition or disease. Always consult with a qualified dermatologist or healthcare provider for proper medical advice, diagnosis, and treatment. Do not rely solely on this AI analysis for medical decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
