import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const slides = [
    {
      image: 'https://img.freepik.com/free-photo/beautiful-shot-female-model-posing-stylish-winter-coat_181624-51237.jpg?t=st=1732993372~exp=1732996972~hmac=39a66d8a3fe1d4a1c06e46f67f51fc8c724d5ccd4d2048b07a2b659e1cc31bb4&w=1380',
      title: 'Welcome to Urban Elegance',
      subtitle: 'Discover Your Perfect Style'
    },
    {
      image: 'https://img.freepik.com/free-photo/portrait-young-beautiful-fashionable-woman-posing-street_155003-9335.jpg?t=st=1732993372~exp=1732996972~hmac=64e41cd8c9411b23c0844cd0d661b9c67c8d4ce4ca6c1b8f7c3b5678c1e06e34&w=1380',
      title: 'Latest Fashion Trends',
      subtitle: 'Elevate Your Wardrobe'
    },
    {
      image: 'https://img.freepik.com/free-photo/full-length-shot-attractive-fashionable-woman-posing-beige-coat-isolated-white-wall_171337-5542.jpg?t=st=1732993372~exp=1732996972~hmac=b14b9ccd2d9699ec3a5fab2ec273f33da16f5205b620f565913c7ac36ee3eb8b&w=1380',
      title: 'Style Meets Comfort',
      subtitle: 'Fashion That Feels Like Home'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${currentSlide === index ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                {slide.subtitle}
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
      >
        <ChevronRight className="text-white" size={32} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              w-3 h-3 rounded-full transition-colors
              ${currentSlide === index ? 'bg-white' : 'bg-white/50'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;