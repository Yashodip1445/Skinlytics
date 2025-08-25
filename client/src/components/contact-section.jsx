import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      data-testid="contact-section"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          data-testid="contact-title"
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-8"
        >
          Contact & Support
        </h2>
        <p 
          data-testid="contact-description"
          className="text-lg text-gray-600 mb-12"
        >
          Get in touch with our team for support or collaboration opportunities
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div 
            data-testid="contact-card-email"
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
          >
            <i className="fas fa-envelope text-3xl text-medical-blue mb-4"></i>
            <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">For technical support and inquiries</p>
            <a 
              href="mailto:contact@skinai.com" 
              data-testid="email-link"
              className="text-medical-blue hover:underline font-semibold"
            >
              contact@skinai.com
            </a>
          </div>
          <div 
            data-testid="contact-card-linkedin"
            className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl"
          >
            <i className="fab fa-linkedin text-3xl text-green-600 mb-4"></i>
            <h3 className="font-semibold text-gray-800 mb-2">Professional Network</h3>
            <p className="text-gray-600 mb-4">Connect with us professionally</p>
            <a 
              href="#" 
              data-testid="linkedin-link"
              className="text-green-600 hover:underline font-semibold"
            >
              LinkedIn Profile
            </a>
          </div>
          <div 
            data-testid="contact-card-github"
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl"
          >
            <i className="fab fa-github text-3xl text-purple-600 mb-4"></i>
            <h3 className="font-semibold text-gray-800 mb-2">Open Source</h3>
            <p className="text-gray-600 mb-4">Contribute to our research</p>
            <a 
              href="#" 
              data-testid="github-link"
              className="text-purple-600 hover:underline font-semibold"
            >
              GitHub Repository
            </a>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 
            data-testid="form-title"
            className="text-xl font-semibold text-gray-800 mb-6"
          >
            Send us a message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                data-testid="input-name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-blue/50 focus:border-medical-blue"
                required
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                data-testid="input-email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-blue/50 focus:border-medical-blue"
                required
              />
            </div>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject" 
              data-testid="input-subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-blue/50 focus:border-medical-blue"
              required
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message" 
              rows={4} 
              data-testid="textarea-message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-blue/50 focus:border-medical-blue"
              required
            ></textarea>
            <button 
              type="submit" 
              data-testid="button-send-message"
              className="w-full bg-gradient-to-r from-medical-blue to-light-blue text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <i className="fas fa-paper-plane mr-2"></i>Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}