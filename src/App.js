import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import WishlistPage from './components/WishlistPage';
import CheckoutPage from './components/CheckoutPage';
import OrderHistoryPage from './components/OrderHistoryPage';
import ProfilePage from './components/ProfilePage';
import HeroSlider from './components/HeroSlider';
import './index.css';

const initialProducts = [
  {
    id: 1,
    name: 'Classic Blazer',
    category: 'Jackets',
    price: 129.99,
    description: 'Classic Blazer ini adalah perpaduan sempurna antara formalitas dan gaya kasual. Potongannya yang modern dan detail lapisan premium menjadikannya pilihan ideal untuk tampilan profesional maupun acara santai.',
    image: 'https://img.freepik.com/free-photo/businessman-wearing-formal-black-suit_53876-102238.jpg?t=st=1732993044~exp=1732996644~hmac=74653ebaa3028cbbf7d7ba1e9dc005879a27aa795691745f38661b18795ca1ef&w=826',
    colors: ['Black', 'Navy', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Summer Linen Dress',
    category: 'Dresses',
    price: 89.50,
    description: 'Summer Linen Dress dirancang untuk memberikan kenyamanan dan gaya di musim panas.',
    image: 'https://img.freepik.com/premium-photo/portrait-young-beautiful-brunette-woman-white-dress_1024630-9809.jpg?w=740',
    colors: ['White', 'Beige', 'Light Blue'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 3,
    name: 'Slim Fit Jeans',
    category: 'Pants',
    price: 79.99,
    description: 'Slim Fit Jeans designed for comfort and style during the summer season.',
    image: 'https://img.freepik.com/free-photo/urban-outdoor-fashion-portrait-young-stylish-hipster-man-wearing-leather-biker-jacket-denim-pants-vintage-shoes-posing-countryside-parking-evening-sunlight_291049-1614.jpg?t=st=1732993372~exp=1732996972~hmac=b0ae18fd326c0767b450c0061123369a86872e0095b343de13ae14406df0493f&w=1380',
    colors: ['Dark Blue', 'Black', 'Gray'],
    sizes: ['28', '30', '32', '34', '36']
  }
];

const App = () => {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com'
  });

  const categories = ['All', 'Jackets', 'Dresses', 'Pants'];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter(item => item.id !== product.id));
  };

  const handleCheckout = (shippingAddress, paymentMethod) => {
    const newOrder = {
      id: orders.length + 1,
      items: cart,
      total: cart.reduce((total, item) => total + item.price, 0),
      status: 'Completed',
      shippingAddress,
      paymentMethod
    };
    setOrders([...orders, newOrder]);
    setCart([]); // Clear cart after checkout
  };

  const updateProfile = (updatedProfile) => {
    setUser({
      ...user,
      ...updatedProfile
    });
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const ProductDetailPageWrapper = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    return <ProductDetailPage product={product} addToCart={addToCart} addToWishlist={addToWishlist} />;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar wishlist={wishlist} cart={cart} />

        <Routes>
          <Route path="/" element={(
            <>
              <HeroSlider />
              <div className="container mx-auto py-6 flex justify-center space-x-4">
                {categories.map(category => (
                  <button 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full ${
                      selectedCategory === category 
                        ? 'bg-black text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                {filteredProducts.map(product => (
                  <Link to={`/product/${product.id}`} key={product.id}>
                    <ProductCard 
                      product={product} 
                      addToCart={addToCart} 
                      addToWishlist={addToWishlist} 
                    />
                  </Link>
                ))}
              </div>
            </>
          )} />
          
          <Route path="/product/:id" element={<ProductDetailPageWrapper />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} removeFromWishlist={removeFromWishlist} addToCart={addToCart} />} />
          <Route path="/checkout" element={<CheckoutPage cartTotal={cart.reduce((total, item) => total + item.price, 0)} handleCheckout={handleCheckout} />} />
          <Route path="/orders" element={<OrderHistoryPage orders={orders} />} />
          <Route path="/profile" element={<ProfilePage user={user} updateProfile={updateProfile} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;