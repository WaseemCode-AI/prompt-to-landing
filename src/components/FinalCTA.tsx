
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const FinalCTA = () => {
  const handleTryFree = () => {
    toast("Free trial started", {
      description: "Setting up your free trial account...",
    });
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookDemo = () => {
    toast("Demo booking", {
      description: "Opening demo booking calendar...",
    });
    // In a real app, we would open a booking modal here
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-500 to-blue-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">Start building in 30 seconds</h2>
          <p className="text-xl opacity-90 max-w-2xl">
            Join thousands of creators and marketers who are building stunning landing pages without knowing a line of code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-white text-purple-600 hover:bg-opacity-90 transition-opacity h-12 px-8 text-lg"
              onClick={handleTryFree}
            >
              Try it for Free
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 h-12 px-6 text-lg"
              onClick={handleBookDemo}
            >
              Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm opacity-75">No credit card required • Free tier available</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
