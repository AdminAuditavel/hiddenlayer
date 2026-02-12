//src/views/HomeView.tsx

import React from "react";
import { Product } from "../types";

type Props = {
  products: Product[];
  navigateToDetail: (product: Product) => void;
  setCurrentView: (view: any) => void;
};

const HomeView: React.FC<Props> = ({
  products,
  navigateToDetail,
  setCurrentView,
}) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* conteúdo será movido do App.tsx no próximo passo */}
    </div>
  );
};

export default HomeView;
