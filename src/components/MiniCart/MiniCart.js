import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function MiniCart() {
  const {
    cart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-20 border">
      <div className="p-4">
        <h3 className="text-lg font-medium flex justify-between">
          <span>Your Cart</span>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </h3>
        {cart.length === 0 ? (
          <p className="py-4 text-center">Your cart is empty</p>
        ) : (
          <>
            <div className="mt-4 space-y-4 max-h-60 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white p-1 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-medium line-clamp-1">{item.title}</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span>${item.price} × {item.quantity}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-medium">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="mt-4 space-y-2">
                <Link 
                  to="/cart" 
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-gray-800 text-white py-2 rounded text-center hover:bg-gray-700 transition"
                >
                  View Cart
                </Link>
                <button
                  className="w-full bg-gray-200 py-2 rounded text-gray-800 cursor-not-allowed"
                  disabled
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}