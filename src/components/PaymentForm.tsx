
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from 'react-router-dom';

interface PaymentFormProps {
  open: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
}

const PaymentForm = ({ open, onClose, planName, planPrice }: PaymentFormProps) => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    toast("Processing payment", {
      description: "Please wait while we process your payment...",
    });
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast.success("Payment successful", {
        description: "Your payment has been processed successfully.",
      });
      onClose();
      navigate('/payment-success');
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    // Add space every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.slice(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    // Format as MM/YY
    if (digits.length >= 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    }
    return digits;
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Complete your purchase
          </DialogTitle>
          <DialogDescription>
            You're subscribing to the {planName} plan at {planPrice}/month.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="card-name">Cardholder Name</Label>
            <Input 
              id="card-name" 
              placeholder="John Doe" 
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input 
              id="card-number" 
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              maxLength={19}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input 
                id="expiry" 
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                maxLength={5}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input 
                id="cvc" 
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 3))}
                maxLength={3}
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" type="button" onClick={onClose}>Cancel</Button>
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90"
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentForm;
