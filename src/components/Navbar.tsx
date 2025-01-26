import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-navy">
            TailoredCVs<span className="text-teal">.com</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-gray-600 hover:text-navy transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-navy transition-colors">
              About
            </Link>
            <Button asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;