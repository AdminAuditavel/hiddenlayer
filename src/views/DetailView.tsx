import React from "react";
import { Product, AppView } from "../types";

type Props = {
  product: Product;
  setCurrentView: (view: AppView) => void;
};

const DetailView: React.FC<Props> = ({ product }) => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p>{product.name}</p>
    </div>
  );
};

export default DetailView;
