import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Zap, Target } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            Create Your Perfect Resume<br />with AI Precision
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tailor your resume to any job description instantly with our AI-powered platform.
            Stand out from the crowd and land your dream job.
          </p>
          <Button size="lg" asChild className="animate-float">
            <Link to="/get-started" className="flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <FileText className="w-12 h-12 text-teal mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Templates</h3>
              <p className="text-gray-600">Professional resume templates designed for maximum impact and ATS optimization.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Zap className="w-12 h-12 text-teal mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
              <p className="text-gray-600">Our AI analyzes job descriptions to tailor your resume for perfect matching.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Target className="w-12 h-12 text-teal mb-4" />
              <h3 className="text-xl font-semibold mb-3">Perfect Match</h3>
              <p className="text-gray-600">Get real-time suggestions to match your experience with job requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;