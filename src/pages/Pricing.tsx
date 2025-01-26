import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-navy mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Choose the plan that works best for you
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <p className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-600">/month</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal" />
                <span>1 Resume Template</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal" />
                <span>Basic AI Suggestions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal" />
                <span>PDF Export</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Get Started</Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-navy p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-6">$12<span className="text-lg opacity-80">/month</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal" />
                <span>All Templates</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal" />
                <span>Advanced AI Tailoring</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal" />
                <span>Multiple Resume Versions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal" />
                <span>Priority Support</span>
              </li>
            </ul>
            <Button className="w-full bg-teal hover:bg-teal-light text-navy">Get Premium</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;