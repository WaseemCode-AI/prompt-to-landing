
import React from 'react';
import { Check, FileText, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-12 w-12 text-purple-500" />,
      title: "Write Your Prompt",
      description: "Describe your ideal landing page in plain English. Add details about style, content, and purpose."
    },
    {
      icon: <Check className="h-12 w-12 text-purple-500" />,
      title: "Review & Customize",
      description: "Our AI generates your page instantly. Fine-tune any element with simple text commands."
    },
    {
      icon: <Rocket className="h-12 w-12 text-purple-500" />,
      title: "Publish & Convert",
      description: "Launch your professional landing page in seconds. Connect your domain or export the code."
    }
  ];
  
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How PromptPage Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into stunning landing pages in just three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
            >
              <div className="p-3 rounded-2xl bg-purple-50 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
