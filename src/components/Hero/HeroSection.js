import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ShopEasy</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover amazing products at unbeatable prices
        </p>
        <Link 
          to="/products" 
          className="bg-black text-white px-6 py-3 rounded-lg inline-block hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}