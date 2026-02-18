import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import ShoppingCart from './components/ShoppingCart';
import CartPage from './pages/CartPage';

function App() {

    const [currentPage, setCurrentPage] = useState('home');
    const [cartItems, setCartItems] = useState([]);

    const handleNavigate = (pageId) => {
        setCurrentPage(pageId);
    };

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (index) => {
        const updated = [...cartItems];
        updated.splice(index, 1);
        setCartItems(updated);
    };

    const renderPage = () => {
        switch (currentPage) {

            case 'products':
                return (
                    <ProductsPage
                        onAddToCart={addToCart}
                        cartItems={cartItems}
                    />
                );

            case 'profile':
                return <ProfilePage />;

            case 'cart':
                return (
                    <CartPage
                        cartItems={cartItems}
                        onRemoveItem={removeFromCart}
                    />
                );

            case 'home':
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>

            <Header
                currentPage={currentPage}
                onNavigate={handleNavigate}
                cartCount={cartItems.length}
            />

            <main>
                {renderPage()}
            </main>

            {cartItems.length > 0 && (
                <ShoppingCart
                    cartItems={cartItems}
                    onRemoveItem={removeFromCart}
                />
            )}

            <footer style={{
                marginTop: '50px',
                padding: '20px',
                borderTop: '1px solid #eee',
                textAlign: 'center',
                color: '#666'
            }}>
                <p>React Multi-Page Application</p>
            </footer>
        </div>
    );
}

export default App;