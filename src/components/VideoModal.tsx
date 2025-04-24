
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
}

const VideoModal = ({ open, onClose }: VideoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[700px] p-1">
        <div className="absolute right-2 top-2 z-10">
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 bg-white/80 rounded-full">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="aspect-video w-full">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
            title="Product Demo" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
