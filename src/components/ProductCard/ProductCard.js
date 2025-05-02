import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition">
      <Link to={`/products/${product.id}`} className="block">
        <div className="h-48 bg-white p-4 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium mb-2 line-clamp-2">{product.title}</h3>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">${product.price}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}