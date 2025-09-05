import React from 'react';

const PhotoGallery: React.FC = () => {
  const foodPhotos = [
    '/lovable-uploads/3d41ae60-1aec-466b-980d-16e5f2e55e45.png',
    '/lovable-uploads/464a71d5-7ff4-47cf-a059-752661623ae2.png',
    '/lovable-uploads/47f09b97-909a-4353-adb3-0df48d0e0ff2.png',
    '/lovable-uploads/5c5abd11-0cf0-49dd-80fa-7def2ffdecc3.jpg',
    '/lovable-uploads/64da4a80-6224-4733-bca4-5e8eda227df8.png',
    '/lovable-uploads/6a5c80a4-808b-4681-9f22-7daadd81a361.png',
    '/lovable-uploads/70929e7a-ca87-427d-b0a4-08f6fc9e55c0.jpg',
    '/lovable-uploads/95941a6c-9cde-482d-937f-245ec128763e.jpg',
    '/lovable-uploads/b20c8f7a-36ad-42f7-8762-e3d97c5d6591.jpg',
    '/lovable-uploads/be4586a8-548b-4204-973f-32613fb82e64.jpg',
    '/lovable-uploads/bea5f6f6-0e03-4e8c-9c74-b42f1d9c6dc0.png',
    '/lovable-uploads/d83c39ce-bfc7-4e91-9714-cbb2c2e8c22a.png'
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
            Food Photography
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A visual journey through my culinary creations and food styling adventures
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {foodPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square bg-muted animate-[fadeInUp_0.6s_ease-out] hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={photo}
                alt={`Food photography ${index + 1}`}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                loading="lazy"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;