
import React, { useState } from 'react';
import { 
  Wand, 
  Layout, 
  ArrowDown, 
  ArrowUp, 
  MousePointer, 
  Pencil 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";

const Features = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Wand className="h-6 w-6 text-purple-500" />,
      title: "AI-Powered Design",
      description: "Our AI understands design principles and creates visually stunning pages optimized for conversions.",
      details: "Transform your ideas into professional landing pages instantly. Our AI analyzes successful landing pages and applies proven design patterns to create high-converting layouts tailored to your brand.",
      action: "Learn about AI design"
    },
    {
      icon: <Layout className="h-6 w-6 text-purple-500" />,
      title: "100% Responsive",
      description: "Every landing page looks perfect on all devices, from desktop to mobile, automatically.",
      details: "Built with mobile-first approach, your pages automatically adjust to any screen size. Test your designs across different devices with our live preview feature.",
      action: "See responsive demos"
    },
    {
      icon: <ArrowDown className="h-6 w-6 text-purple-500" />,
      title: "Export HTML & CSS",
      description: "Download clean code or integrate with your favorite hosting platform in one click.",
      details: "Get production-ready code that's optimized for performance. Export to HTML/CSS or directly deploy to platforms like Vercel, Netlify, or your own server.",
      action: "View export options"
    },
    {
      icon: <ArrowUp className="h-6 w-6 text-purple-500" />,
      title: "SEO Optimized",
      description: "Built-in best practices ensure your page ranks well on search engines from day one.",
      details: "Automated meta tags, semantic HTML, and performance optimization help your pages rank higher. Get detailed SEO suggestions and improvements in real-time.",
      action: "SEO features"
    },
    {
      icon: <MousePointer className="h-6 w-6 text-purple-500" />,
      title: "No-Code Editor",
      description: "Fine-tune any element with our intuitive editor. No technical skills required.",
      details: "Drag-and-drop interface for easy customization. Edit text, images, colors, and layouts visually. Save your custom components for reuse across projects.",
      action: "Try the editor"
    },
    {
      icon: <Pencil className="h-6 w-6 text-purple-500" />,
      title: "Custom Branding",
      description: "Import your brand colors, logos, and fonts to maintain a consistent brand identity.",
      details: "Upload your brand assets or input your style guide. Auto-generate complete design systems that match your brand perfectly. Ensure consistency across all pages.",
      action: "Branding tools"
    },
  ];

  const handleFeatureClick = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
    toast(`${features[index].title} details`, {
      description: features[index].details,
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
              className={`hover:shadow-md transition-all cursor-pointer ${
                expandedFeature === index ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => handleFeatureClick(index)}
            >
              <CardHeader>
                <div className="mb-2 inline-flex items-center justify-center rounded-lg bg-purple-100 p-2 group-hover:bg-purple-200 transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {expandedFeature === index && (
                  <p className="text-sm text-muted-foreground mt-2 animate-fade-in">
                    {feature.details}
                  </p>
                )}
              </CardContent>
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
