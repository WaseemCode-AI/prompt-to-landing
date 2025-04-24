
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const handleSubscribe = (plan) => {
    toast(`${plan} subscription`, {
      description: `Processing your ${plan} subscription...`,
    });
    
    // In a real application, this would redirect to a payment gateway
    setTimeout(() => {
      toast(`${plan} subscription activated`, {
        description: "Thank you for your subscription!",
      });
    }, 2000);
  };
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started with basic landing pages",
      price: { monthly: "Free", annual: "Free" },
      features: [
        "1 landing page",
        "Basic AI generation",
        "Export as HTML/CSS",
        "Standard templates",
        "Community support",
      ],
      cta: "Start for Free",
      popular: false
    },
    {
      name: "Pro",
      description: "For professionals who need more features and pages",
      price: { monthly: "$29", annual: "$19" },
      features: [
        "10 landing pages",
        "Advanced AI generation",
        "Custom domains",
        "Premium templates",
        "Analytics dashboard",
        "Priority support",
        "Remove branding",
      ],
      cta: "Get Pro",
      popular: true
    },
    {
      name: "Team",
      description: "For teams and businesses with advanced needs",
      price: { monthly: "$79", annual: "$59" },
      features: [
        "Unlimited landing pages",
        "Expert AI generation",
        "Team collaboration",
        "Custom branding",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "White-label option",
      ],
      cta: "Get Team",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for you
          </p>
          
          <div className="inline-flex items-center rounded-full border p-1 mt-6">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm ${
                isAnnual ? 'bg-primary text-white' : 'text-muted-foreground'
              } transition-colors`}
            >
              Annual <span className="text-xs opacity-75">(Save 20%)</span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm ${
                !isAnnual ? 'bg-primary text-white' : 'text-muted-foreground'
              } transition-colors`}
            >
              Monthly
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border ${
                plan.popular ? 'shadow-lg ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-2 rounded-t-2xl">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">
                    {isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.name !== "Starter" && (
                    <span className="text-muted-foreground">
                      /month{isAnnual ? ", billed annually" : ""}
                    </span>
                  )}
                </div>
                
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90" 
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleSubscribe(plan.name)}
                >
                  {plan.cta}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include secure hosting and 24/7 monitoring. Need a custom solution?
            <br />
            <a 
              href="#" 
              className="text-purple-500 hover:underline font-medium"
              onClick={(e) => {
                e.preventDefault();
                toast("Contact sales", {
                  description: "Our sales team will contact you shortly.",
                });
              }}
            >
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
