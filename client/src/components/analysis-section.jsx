import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function AnalysisSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const fileInputRef = useRef(null);
  const { toast } = useToast();

  const analysisMutation = useMutation({
    mutationFn: async (file) => {
      const formData = new FormData();
      formData.append('image', file);
      const response = await apiRequest('POST', '/api/analyze', formData);
      return response.json();
    },
    onSuccess: (result) => {
      setAnalysisResult(result);
      document.getElementById('analysis-results')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    },
    onError: () => {
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze the image. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleFileSelect = (file) => {
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Please select an image smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setAnalysisResult(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      analysisMutation.mutate(selectedFile);
    }
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setPreviewUrl("");
    setAnalysisResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getConfidenceBadgeClass = (confidence) => {
    const percentage = parseInt(confidence);
    if (percentage >= 85) return "bg-green-500 text-white";
    if (percentage >= 70) return "bg-yellow-500 text-white";
    return "bg-blue-500 text-white";
  };

  const getObservationClass = (status) => {
    switch (status) {
      case 'good': return "bg-green-50 border-green-200";
      case 'concern': return "bg-yellow-50 border-yellow-200";
      default: return "bg-blue-50 border-blue-200";
    }
  };

  const getObservationIconClass = (status) => {
    switch (status) {
      case 'good': return "fas fa-check-circle text-green-600";
      case 'concern': return "fas fa-exclamation-circle text-yellow-600";
      default: return "fas fa-info-circle text-blue-600";
    }
  };

  const getObservationTextClass = (status) => {
    switch (status) {
      case 'good': return "text-green-800";
      case 'concern': return "text-yellow-800";
      default: return "text-blue-800";
    }
  };

  return (
    <section 
      id="feature" 
      data-testid="analysis-section"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 
          data-testid="analysis-title"
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-8"
        >
          Skin Analysis Tool
        </h2>
        <p 
          data-testid="analysis-description"
          className="text-lg text-gray-600 mb-12"
        >
          Upload a clear photo of your skin for AI-powered analysis
        </p>
        
        {/* Upload Area */}
        <div 
          data-testid="upload-area"
          className={`bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-12 mb-8 hover:border-medical-blue transition-colors duration-300 ${
            selectedFile ? 'border-medical-blue bg-blue-50' : ''
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {!selectedFile ? (
            <div className="flex flex-col items-center">
              <i className="fas fa-cloud-upload-alt text-6xl text-gray-400 mb-4"></i>
              <p className="text-xl font-semibold text-gray-600 mb-2">Drop your image here or click to browse</p>
              <p className="text-gray-500">Supports JPG, PNG files up to 10MB</p>
              <input 
                ref={fileInputRef}
                type="file" 
                accept="image/*" 
                onChange={handleFileChange}
                data-testid="file-input"
                className="hidden"
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                data-testid="button-choose-image"
                className="mt-6 bg-gradient-to-r from-medical-blue to-light-blue text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                <i className="fas fa-camera mr-2"></i>Choose Image
              </button>
            </div>
          ) : (
            <div data-testid="image-preview">
              <img 
                src={previewUrl} 
                alt="Preview" 
                data-testid="preview-image"
                className="max-w-md mx-auto rounded-xl shadow-lg"
              />
              <div className="mt-6 flex gap-4 justify-center">
                <button 
                  onClick={handleAnalyze}
                  disabled={analysisMutation.isPending}
                  data-testid="button-analyze"
                  className="bg-gradient-to-r from-medical-blue to-light-blue text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  {analysisMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>Analyzing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-microscope mr-2"></i>Analyze Image
                    </>
                  )}
                </button>
                <button 
                  onClick={resetUpload}
                  data-testid="button-remove"
                  className="bg-gray-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors duration-300"
                >
                  <i className="fas fa-trash mr-2"></i>Remove
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {analysisMutation.isPending && (
          <div 
            data-testid="loading-state"
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-medical-blue mr-3"></div>
              <span className="text-lg font-semibold text-gray-800">Analyzing your image...</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-medical-blue to-light-blue h-3 rounded-full transition-all duration-1000 animate-pulse" style={{width: '75%'}}></div>
            </div>
          </div>
        )}

        {/* Analysis Results */}
        {analysisResult && (
          <div 
            id="analysis-results"
            data-testid="analysis-results"
            className="animate-fade-in"
          >
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
              <h3 
                data-testid="results-title"
                className="text-2xl font-bold text-gray-800 mb-6 flex items-center"
              >
                <i className="fas fa-chart-line text-medical-blue mr-3"></i>Analysis Results
              </h3>
              
              {/* Primary Detection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-800">Primary Detection</h4>
                  <span 
                    data-testid="confidence-badge"
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getConfidenceBadgeClass(analysisResult.confidence)}`}
                  >
                    {analysisResult.confidence}
                  </span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p 
                    data-testid="primary-detection"
                    className="text-xl font-semibold text-gray-800 mb-2"
                  >
                    {analysisResult.primaryDetection}
                  </p>
                  <p 
                    data-testid="detection-description"
                    className="text-gray-600"
                  >
                    {analysisResult.description}
                  </p>
                </div>
              </div>

              {/* Additional Observations */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Additional Observations</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {analysisResult.observations.map((obs, index) => (
                    <div 
                      key={index}
                      data-testid={`observation-${index}`}
                      className={`border rounded-lg p-4 ${getObservationClass(obs.status)}`}
                    >
                      <div className="flex items-center mb-2">
                        <i className={`${getObservationIconClass(obs.status)} mr-2`}></i>
                        <span className={`font-semibold ${getObservationTextClass(obs.status)}`}>
                          {obs.category}
                        </span>
                      </div>
                      <p className="text-sm" style={{color: 'inherit'}}>
                        {obs.observation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-gradient-to-r from-warm-peach to-coral/30 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <i className="fas fa-lightbulb text-yellow-600 mr-2"></i>Recommendations
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {analysisResult.recommendations.map((rec, index) => (
                    <li 
                      key={index}
                      data-testid={`recommendation-${index}`}
                      className="flex items-start"
                    >
                      <i className={`${rec.icon} mr-2 mt-1`}></i>
                      <span>{rec.recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div 
                data-testid="medical-disclaimer"
                className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
              >
                <div className="flex items-start">
                  <i className="fas fa-exclamation-triangle text-yellow-600 mr-2 mt-1"></i>
                  <div>
                    <p className="text-sm text-yellow-800 font-semibold mb-1">Important Disclaimer</p>
                    <p className="text-sm text-yellow-700">This analysis is for educational purposes only and should not replace professional medical advice. Please consult a dermatologist for proper diagnosis and treatment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}