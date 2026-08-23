import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import LoginModal from './components/LoginModal';
import { MENU_ITEMS } from './data/menuData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [userPhone, setUserPhone] = useState(null);
  const [addedItemId, setAddedItemId] = useState(null);

  // Filter menu items by category
  const filteredMenuItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  // Add item to cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    // Feedback animation
    setAddedItemId(product.id);
    setTimeout(() => setAddedItemId(null), 1000);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Clear cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Calculate total count and price
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Scroll to menu section
  const handleExploreMenu = () => {
    const element = document.getElementById('menu-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#080d14] text-slate-100 flex flex-col justify-between selection:bg-[#0c6a7f] selection:text-white">
      
      {/* 1-Second Infinity Airplane Preloader */}
      <PageLoader />

      {/* Header Navigation */}
      <Navbar
        cartItemsCount={cartItemsCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center justify-start">
        
        {/* Interactive Swipable Hero Image Banner */}
        <Hero onExploreMenu={handleExploreMenu} />

        {/* Clean Menu Section */}
        <Menu
          menuItems={filteredMenuItems}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          addedItemId={addedItemId}
        />

      </main>

      {/* Minimal Footer with only Telegram & Instagram */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(phone) => setUserPhone(phone)}
      />

    </div>
  );
}

export default App;
