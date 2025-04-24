
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import SignInForm from './SignInForm';

const Navbar = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  const handleSignIn = () => {
    setSignInOpen(true);
  };

  const handleGetStarted = () => {
    toast("Getting started", {
      description: "Creating your account...",
    });
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl">PromptPage</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex" onClick={handleSignIn}>Sign In</Button>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity" onClick={handleGetStarted}>Get Started</Button>
        </div>
      </div>
      
      <SignInForm open={signInOpen} onClose={() => setSignInOpen(false)} />
    </header>
  );
};

export default Navbar;
