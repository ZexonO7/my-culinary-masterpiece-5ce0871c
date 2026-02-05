 import React, { useState, useEffect } from 'react';
 import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
 import { Button } from '@/components/ui/button';
 import { Camera } from 'lucide-react';
 import { useNavigate } from 'react-router-dom';
 
 const WelcomeModal: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
 
   useEffect(() => {
     const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
     if (!hasSeenWelcome) {
       const timer = setTimeout(() => {
         setIsOpen(true);
       }, 2500);
       return () => clearTimeout(timer);
     }
   }, []);
 
   const handleClose = () => {
     sessionStorage.setItem('hasSeenWelcome', 'true');
     setIsOpen(false);
   };
 
   const handleViewPhotos = () => {
     sessionStorage.setItem('hasSeenWelcome', 'true');
     setIsOpen(false);
     navigate('/photos');
   };
 
   return (
     <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <DialogContent className="max-w-md !bg-[#1A1F2C] border-border shadow-2xl">
        <DialogTitle className="font-playfair text-2xl text-center gold-gradient bg-transparent">
           Welcome! 👋
         </DialogTitle>
        <DialogDescription className="text-center text-muted-foreground bg-transparent">
           Explore my collection of culinary creations
         </DialogDescription>
        <div className="flex flex-col items-center gap-4 py-4 bg-transparent">
           <Camera className="w-16 h-16 text-primary animate-pulse" />
           <p className="text-center text-foreground">
             Check out my food photography gallery to see all the delicious dishes I've made!
           </p>
           <div className="flex gap-3 w-full">
             <Button
               variant="outline"
               onClick={handleClose}
               className="flex-1"
             >
               Maybe Later
             </Button>
             <Button
               onClick={handleViewPhotos}
               className="flex-1 bg-primary hover:bg-primary/90"
             >
               View Photos
             </Button>
           </div>
         </div>
       </DialogContent>
     </Dialog>
   );
 };
 
 export default WelcomeModal;