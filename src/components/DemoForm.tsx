
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface DemoFormProps {
  open: boolean;
  onClose: () => void;
}

const DemoForm = ({ open, onClose }: DemoFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    toast("Booking demo", {
      description: "Please wait while we schedule your demo...",
    });
    
    // Simulate booking process
    setTimeout(() => {
      setLoading(false);
      toast.success("Demo scheduled", {
        description: `Your demo is scheduled for ${date}. We've sent a confirmation to your email.`,
      });
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 justify-center">
            <Calendar className="h-5 w-5" />
            Book a Demo
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email"
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date</Label>
            <Input 
              id="date" 
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90"
            disabled={loading}
          >
            {loading ? "Scheduling..." : "Schedule Demo"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoForm;
