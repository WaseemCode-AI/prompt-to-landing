
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from 'react-router-dom';

interface SignInFormProps {
  open: boolean;
  onClose: () => void;
}

const SignInForm = ({ open, onClose }: SignInFormProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    toast("Signing in", {
      description: "Please wait while we sign you in...",
    });
    
    // Simulate sign in process
    setTimeout(() => {
      setLoading(false);
      toast.success("Signed in successfully", {
        description: "Welcome back!",
      });
      onClose();
      // Redirect to dashboard or other page in a real app
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Sign In to Your Account</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
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
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            <span>Don't have an account? </span>
            <button 
              type="button"
              className="text-purple-500 hover:underline"
              onClick={() => {
                toast("Registration", {
                  description: "Registration feature coming soon!",
                });
              }}
            >
              Register
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInForm;
