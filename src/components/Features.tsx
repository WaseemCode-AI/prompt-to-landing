
import React, { useState } from 'react';
import { Zap, Layout, Star, ArrowDown, ArrowUp, MousePointer, Pencil } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-purple-500" />,
      title: "AI-Powered Design",
      description: "Our AI understands design principles and creates visually stunning pages optimized for conversions.",
      action: "Learn about AI design"
    },
    {
      icon: <Layout className="h-6 w-6 text-purple-500" />,
      title: "100% Responsive",
      description: "Every landing page looks perfect on all devices, from desktop to mobile, automatically.",
      action: "See responsive demos"
    },
    {
      icon: <ArrowDown className="h-6 w-6 text-purple-500" />,
      title: "Export HTML & CSS",
      description: "Download clean code or integrate with your favorite hosting platform in one click.",
      action: "View export options"
    },
    {
      icon: <ArrowUp className="h-6 w-6 text-purple-500" />,
      title: "SEO Optimized",
      description: "Built-in best practices ensure your page ranks well on search engines from day one.",
      action: "SEO features"
    },
    {
      icon: <MousePointer className="h-6 w-6 text-purple-500" />,
      title: "No-Code Editor",
      description: "Fine-tune any element with our intuitive editor. No technical skills required.",
      action: "Try the editor"
    },
    {
      icon: <Pencil className="h-6 w-6 text-purple-500" />,
      title: "Custom Branding",
      description: "Import your brand colors, logos, and fonts to maintain a consistent brand identity.",
      action: "Branding tools"
    },
  ];

  const handleFeatureClick = (feature) => {
    toast(`${feature.title} selected`, {
      description: `You clicked on the ${feature.title} feature. More details coming soon!`,
    });
  };
  
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create high-converting landing pages in minutes
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleFeatureClick(feature)}
            >
              <CardHeader>
                <div className="mb-2 inline-flex items-center justify-center rounded-lg bg-purple-100 p-2 group-hover:bg-purple-200 transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <span className="text-sm text-purple-600 hover:underline">
                  {feature.action} →
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
