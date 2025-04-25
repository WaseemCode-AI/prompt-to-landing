
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from 'lucide-react';
import { toast } from "@/components/ui/sonner";
import DemoForm from './DemoForm';

const FinalCTA = () => {
  const [demoFormOpen, setDemoFormOpen] = useState(false);
  const [showPromptInput, setShowPromptInput] = useState(false);
  const [promptValue, setPromptValue] = useState('');

  const handleTryFree = () => {
    setShowPromptInput(true);
    // Still scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promptValue.trim()) {
      toast.success("Generating landing page", {
        description: `Creating a landing page based on: "${promptValue}"`,
      });
      
      setTimeout(() => {
        toast("Free trial started", {
          description: "Your landing page is being created. We'll notify you when it's ready!",
        });
        setPromptValue('');
      }, 1500);
    } else {
      toast.error("Empty prompt", {
        description: "Please enter a description for your landing page",
      });
    }
  };

  const handleBookDemo = () => {
    setDemoFormOpen(true);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-500 to-blue-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">Start building in 30 seconds</h2>
          <p className="text-xl opacity-90 max-w-2xl">
            Join thousands of creators and marketers who are building stunning landing pages without knowing a line of code.
          </p>

          {showPromptInput ? (
            <form onSubmit={handlePromptSubmit} className="w-full max-w-xl">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="text" 
                  placeholder="Describe your ideal landing page..."
                  value={promptValue}
                  onChange={(e) => setPromptValue(e.target.value)}
                  className="bg-white/90 h-12 text-gray-800"
                />
                <Button 
                  type="submit"
                  className="bg-white text-purple-600 hover:bg-opacity-90 transition-opacity h-12 px-6"
                >
                  Generate
                </Button>
              </div>
              <p className="mt-2 text-sm opacity-75">Example: "A landing page for a fitness app with workout tracking features"</p>
            </form>
          ) : (
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
          )}

          <p className="text-sm opacity-75">No credit card required • Free tier available</p>
        </div>
      </div>

      <DemoForm open={demoFormOpen} onClose={() => setDemoFormOpen(false)} />
    </section>
  );
};

export default FinalCTA;
