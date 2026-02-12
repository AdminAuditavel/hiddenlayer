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

      {/* Bottom Navigation */}
      <BottomNav
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
    </div>
  );
};

export default App;
