
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import VideoModal from './VideoModal';
import { toast } from "@/components/ui/sonner";

const Hero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

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

  const handleWatchDemo = () => {
    setVideoModalOpen(true);
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-in">
              Build Stunning Landing Pages with Just a Prompt
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[85%] mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              No code. No design skills. Just type your idea, and let AI do the rest.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button 
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity h-12 px-8 text-lg"
              onClick={handleTryFree}
            >
              Try it for Free
            </Button>
            <Button 
              variant="outline" 
              className="h-12 px-6 text-lg"
              onClick={handleWatchDemo}
            >
              Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative w-full max-w-5xl mx-auto mt-8 animate-fade-in rounded-xl shadow-2xl overflow-hidden" style={{ animationDelay: '600ms' }}>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Landing Page Generator Dashboard" 
              className="w-full rounded-xl border object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute top-4 left-4 flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full filter blur-3xl opacity-30 animate-pulse-light"></div>
      <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse-light"></div>
      
      <VideoModal open={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </section>
  );
};

export default Hero;
