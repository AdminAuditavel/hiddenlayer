
import React, { useState } from "react";
import { AppView, Product } from "./types";
import { PRODUCTS } from "./constants";

import HomeView from "./views/HomeView";
import CatalogView from "./views/CatalogView";
import DetailView from "./views/DetailView";

import AssistantModal from "./components/AssistantModal";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAssistantOpen, setAssistantOpen] = useState(false);

  const navigateToDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView(AppView.DETAIL);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black relative">

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

      {/* Navigation Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-xl border-t border-white/5 flex items-center justify-around px-8 pb-4 z-50">
        <button
          onClick={() => {
            setCurrentView(AppView.HOME);
            window.scrollTo(0, 0);
          }}
          className={`material-icons ${
            currentView === AppView.HOME
              ? "text-primary"
              : "text-white/40"
          }`}
        >
          analytics
        </button>

        <button
          onClick={() => {
            setCurrentView(AppView.CATALOG);
            window.scrollTo(0, 0);
          }}
          className={`material-icons ${
            currentView === AppView.CATALOG
              ? "text-primary"
              : "text-white/40"
          }`}
        >
          layers
        </button>

        <div
          onClick={() => setAssistantOpen(true)}
          className="w-14 h-14 bg-primary rounded-full flex items-center justify-center -translate-y-4 shadow-lg shadow-primary/30 active:scale-90 transition-transform cursor-pointer"
        >
          <span className="material-icons text-black font-bold">radar</span>
        </div>

        <button className="material-icons text-white/40">
          radar
        </button>

        <button className="material-icons text-white/40">
          person_outline
        </button>
      </div>

      <AssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setAssistantOpen(false)}
      />
    </div>
  );
};

export default App;
