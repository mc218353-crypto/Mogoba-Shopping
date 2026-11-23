import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Account from './pages/Account';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import Tracking from './pages/Tracking';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/collection/:slug" element={<Shop />} />
          <Route path="/accessoires" element={<Shop />} />
          <Route path="/nouveautes" element={<Shop />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/commande" element={<Checkout />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/compte/*" element={<Account />} />
          <Route path="/favoris" element={<Favorites />} />
          <Route path="/recherche" element={<Search />} />
          <Route path="/suivi" element={<Tracking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}