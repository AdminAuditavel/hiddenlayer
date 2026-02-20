import React, { useState } from "react";

import { AppView, Product } from "../types";
import { PRODUCTS } from "../data/products";

import HomeView from "../views/HomeView";
import CatalogView from "../views/CatalogView";
import ProductDetailView from "../views/ProductDetailView"; // ⭐ nova view
import FieldView from "../views/FieldView";
import ProfileView from "../views/ProfileView";

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

      {/* FIELD */}
      {currentView === AppView.FIELD && <FieldView />}

      {/* PROFILE */}
      {currentView === AppView.ASSISTANT && <ProfileView />}

      {/* DETAIL — agora usa ProductDetailView */}
      {currentView === AppView.DETAIL && selectedProduct && (
        <ProductDetailView product={selectedProduct} />
      )}

      {/* BOTTOM NAV */}
      <BottomNav
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
    </div>
  );
};

export default App;
