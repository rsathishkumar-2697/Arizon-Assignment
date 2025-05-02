import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import MiniCart from '../MiniCart/MiniCart';
export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="bg-red shadow-sm sticky top-0 z-10 header">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">ShopEasy</Link>
        <nav className="flex items-center gap-6 justify-between">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/products" className="hover:text-gray-600 ">Products</Link>
          <div className="relative">
            <button 
              onClick={() => setIsCartOpen(prev => !prev)}
              className="flex items-center gap-1 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <MiniCart />
          </div>
        </nav>
      </div>
    </header>
  );
}