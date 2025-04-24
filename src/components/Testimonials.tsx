
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      content: "PromptPage saved us weeks of development time. We typed out a rough idea and got a professional landing page that outperformed our previous one by 230% in conversion rate.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechNova",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      content: "I'm not a designer but needed a high-quality landing page fast. PromptPage let me describe what I wanted in plain English and delivered a stunning page in seconds. Simply amazing.",
      author: "Michael Chen",
      position: "Founder, StartUp Labs",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who've transformed their landing page experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
                    <div className="flex items-center mb-6">
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full h-10 w-10"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full h-10 w-10"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
