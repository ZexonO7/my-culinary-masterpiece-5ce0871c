import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const foodPhotos = [
    '/lovable-uploads/464a71d5-7ff4-47cf-a059-752661623ae2.png',
    'lovable-uploads/47f09b97-909a-4353-adb3-0df48d0e0ff2.png',
    'lovable-uploads/64da4a80-6224-4733-bca4-5e8eda227df8.png',
    'lovable-uploads/6a5c80a4-808b-4681-9f22-7daadd81a361.png',
    'lovable-uploads/bea5f6f6-0e03-4e8c-9c74-b42f1d9c6dc0.png',
    'lovable-uploads/d83c39ce-bfc7-4e91-9714-cbb2c2e8c22a.png',
    'lovable-uploads/IMG_1747918252848.JPEG',
    'lovable-uploads/IMG_1754996256376.JPEG',
    'lovable-uploads/IMG_1754997061843.JPG',
    'lovable-uploads/IMG_1755608779483.JPEG',
    'lovable-uploads/IMG_1755608803276.JPEG',
    'lovable-uploads/IMG_1757177123808.JPEG',
    'lovable-uploads/IMG_1757177885247.JPEG',
    'lovable-uploads/IMG_1757764665950.JPEG',
    'lovable-uploads/IMG_1757764669545.JPEG',
    'lovable-uploads/IMG_1893.PNG',
    'lovable-uploads/IMG_0779.jpg',
    'lovable-uploads/IMG_1854.jpg',
    'lovable-uploads/IMG_1869.jpg',
    'lovable-uploads/IMG_1892.jpg',
    'lovable-uploads/IMG_2368.jpg',
    'lovable-uploads/IMG_2371.jpg',
    'lovable-uploads/IMG_9593.jpg',
    'lovable-uploads/IMG_1764333646312.jpeg',
    'lovable-uploads/IMG_6031.jpeg',
    'lovable-uploads/IMG_6980.jpeg',
    'lovable-uploads/IMG_1761854984816.jpeg',
    'lovable-uploads/IMG_1762250269938.jpeg',
    'lovable-uploads/IMG_1764172219722.jpeg',
    'lovable-uploads/IMG_1764178230244.jpeg'
  ];

  const normalizedPhotos = foodPhotos.map(p => {
    const trimmed = p.trim();
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  });

  const getSrcVariants = (src: string) => {
    const dot = src.lastIndexOf('.');
    const base = dot >= 0 ? src.slice(0, dot) : src;
    const variants = [
      `${base}.jpg`,
      `${base}.JPG`,
      `${base}.jpeg`,
      `${base}.JPEG`,
      `${base}.png`,
      `${base}.PNG`,
    ];
    if (dot >= 0) variants.unshift(src);
    return Array.from(new Set(variants));
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {normalizedPhotos.map((photo, index) => (
            <div
              key={photo}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(photo);
                  setZoom(1);
                  setPan({ x: 0, y: 0 });
                  setIsDragging(false);
                }
              }}
              className="group relative overflow-hidden rounded-lg aspect-square bg-muted animate-[fadeInUp_0.6s_ease-out] hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setSelectedImage(photo);
                setZoom(1);
                setPan({ x: 0, y: 0 });
                setIsDragging(false);
              }}
            >
              <img
                src={photo}
                data-original={photo}
                data-variant-index="0"
                alt={`Food photography ${index + 1}`}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  const original = img.dataset.original || photo;
                  const idx = parseInt(img.dataset.variantIndex || '0');
                  const variants = getSrcVariants(original);
                  if (idx < variants.length - 1) {
                    img.dataset.variantIndex = String(idx + 1);
                    img.src = variants[idx + 1];
                  }
                }}
              />
            </div>
          ))}
        </div>
        <Dialog open={!!selectedImage} onOpenChange={(open) => { if (!open) setSelectedImage(null); }}>
           <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-none overflow-hidden">
             <DialogTitle className="sr-only">Image viewer</DialogTitle>
             <DialogDescription className="sr-only">Drag to pan, scroll to zoom</DialogDescription>
            {selectedImage && (
              <div 
                className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                onWheel={(e) => {
                  e.preventDefault();
                  const delta = e.deltaY > 0 ? 0.9 : 1.1;
                  setZoom(prev => Math.max(0.5, Math.min(5, prev * delta)));
                }}
                onMouseDown={(e) => {
                  setIsDragging(true);
                  setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
                }}
                onMouseMove={(e) => {
                  if (isDragging) {
                    setPan({
                      x: e.clientX - dragStart.x,
                      y: e.clientY - dragStart.y
                    });
                  }
                }}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              >
                <img
                  src={selectedImage}
                  data-original={selectedImage}
                  data-variant-index="0"
                  alt="Full size food photography"
                  className="max-w-full max-h-full object-contain rounded-lg select-none"
                  style={{
                    transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                    transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                  }}
                  draggable={false}
                  decoding="async"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    const original = img.dataset.original || selectedImage!;
                    const idx = parseInt(img.dataset.variantIndex || '0');
                    const variants = getSrcVariants(original);
                    if (idx < variants.length - 1) {
                      img.dataset.variantIndex = String(idx + 1);
                      img.src = variants[idx + 1];
                    }
                  }}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;