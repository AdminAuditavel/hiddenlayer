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
  const [logoError, setLogoError] = useState(false);

  const navigateToDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView(AppView.DETAIL);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black relative text-white">
      {/* HEADER */}
      <header className="w-full border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center h-full">
            {!logoError ? (
              <img
                src="/Logo-Ofical-HL-Branco.svg"
                alt="Hidden Layer"
                className="h-[22px] w-auto block"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-white font-semibold tracking-wide">HL</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Buscar"
            >
              {/* Search icon */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.6-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button
              type="button"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Sacola"
            >
              {/* Bag icon */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 8V7a6 6 0 0112 0v1"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h14l-1 13H6L5 8z"
                />
              </svg>
            </button>
          </div>
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
        <CatalogView products={PRODUCTS} navigateToDetail={navigateToDetail} />
      )}

      {/* DETAIL */}
      {currentView === AppView.DETAIL && selectedProduct && (
        <DetailView product={selectedProduct} setCurrentView={setCurrentView} />
      )}

      {/* Bottom Navigation */}
      <BottomNav currentView={currentView} setCurrentView={setCurrentView} />
    </div>
  );
};

export default App;
