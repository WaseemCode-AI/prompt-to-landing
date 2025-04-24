
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-green-100 p-4 mb-4">
            <Check className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. You now have full access to all the features included in your plan.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md w-full mb-6">
            <h3 className="font-medium mb-2">Payment Details</h3>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium text-right">$19.00</span>
              <span className="text-gray-600">Payment method:</span>
              <span className="font-medium text-right">Credit Card</span>
              <span className="text-gray-600">Date:</span>
              <span className="font-medium text-right">Apr 24, 2025</span>
            </div>
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-4"
            onClick={() => navigate('/')}
          >
            Go to Dashboard
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.open('mailto:support@promptpage.com')}
          >
            Need help? Contact support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
