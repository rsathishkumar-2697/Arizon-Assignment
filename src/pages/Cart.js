import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const {
    cart,
    cartTotal,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const shippingCost = cart.length > 0 ? 5.99 : 0;
  const total = cartTotal + shippingCost;

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <Link 
              to="/products" 
              className="bg-black text-white px-6 py-2 rounded inline-block hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {cart.map(item => (
                <div key={item.id} className="flex border-b pb-6">
                  <div className="w-24 h-24 bg-white p-2 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    
                    <div className="flex items-center mt-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 border rounded-l hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 border rounded-r hover:bg-gray-100"
                      >
                        +
                      </button>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-6 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg h-fit sticky top-4">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button
                className="w-full bg-black text-white py-3 rounded mt-6 hover:bg-gray-800 transition"
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>
              
              <Link 
                to="/products" 
                className="block text-center mt-4 text-blue-600 hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}