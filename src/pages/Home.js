import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import FeaturedProducts from '../components/Products/FeaturedProducts';

export default function Home() {
  return (
    <div className="py-8">
      <HeroSection />
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <FeaturedProducts />
      </div>
    </div>
  );
}