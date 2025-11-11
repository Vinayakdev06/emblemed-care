import React from 'react';
import Hero from '../sections/HeroSection';
import About from '../sections/AboutSection';
import ProductsPreview from './ProductsPage';

export default function Home(){
  return (
    <div>
      <Hero />
      <About />
      <ProductsPreview previewOnly />
    </div>
  );
}
