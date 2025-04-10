
import React from 'react';
import { Lock } from 'lucide-react';

const LockOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg z-10 p-6">
      <Lock size={48} className="text-gold mb-4" />
      <h3 className="text-2xl font-playfair text-white mb-2 text-center">Temporarily Locked</h3>
      <p className="text-gray-300 text-center">This recipe is currently unavailable. Check back later!</p>
    </div>
  );
};

export default LockOverlay;
