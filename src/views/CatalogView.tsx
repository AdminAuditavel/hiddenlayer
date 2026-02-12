import React from "react";
import { Product } from "../types";

type Props = {
  products: Product[];
  navigateToDetail: (product: Product) => void;
};

const CatalogView: React.FC<Props> = ({ products }) => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p>Catalog View</p>
    </div>
  );
};

export default CatalogView;
