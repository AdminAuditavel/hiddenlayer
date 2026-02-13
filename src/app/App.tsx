import React, { useState } from "react";
import { AppView, Product } from "../types";
import { PRODUCTS } from "../data/products";

import HomeView from "../views/HomeView";
import CatalogView from "../views/CatalogView";
import DetailView from "../views/DetailView";

import BottomNav from "../components/BottomNav";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateToDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView(AppView.DETAIL);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black relative text-white">

      {/* HEADER */}
      <header className="w-full border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-baseline">
          
          {/* Logo */}
          <img
            src="/Logo-Ofical-HL-Branco.svg"
            alt="Hidden Layer"
            className="h-[22px] w-auto"
          />

        </div>
      </header>

      {/* HOME */}
      {currentView === AppView.HOME && (
        <HomeView
          products={PRODUCTS}
          currentView={currentView}
          setCurrentView={setCurrentView}
          navigateToDetail={navigateToDetail}
        />
      )}

      {/* CATALOG */}
      {currentView === AppView.CATALOG && (
        <CatalogView
          products={PRODUCTS}
          navigateToDetail={navigateToDetail}
        />
      )}

      {/* DETAIL */}
      {currentView === AppView.DETAIL && selectedProduct && (
        <DetailView
          product={selectedProduct}
          setCurrentView={setCurrentView}
        />
      )}

      {/* Bottom Navigation */}
      <BottomNav
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
    </div>
  );
};

export default App;
