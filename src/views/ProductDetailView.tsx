import React from "react";
import { Product, AppView } from "../types";

type Props = {
  product: Product;
  setCurrentView: (view: AppView) => void;
};

const ProductDetailView: React.FC<Props> = ({ product, setCurrentView }) => {
  return (
    <div className="animate-in fade-in duration-500 bg-[#f6f6f6] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-24">

        {/* BACK */}
        <button
          type="button"
          onClick={() => setCurrentView(AppView.HOME)}
          className="mb-8 text-[10px] uppercase tracking-[0.35em] text-black/40 hover:text-black transition"
        >
          ← Back
        </button>

        {/* GRID EDITORIAL */}
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

          {/* IMAGE */}
          <div className="bg-white border border-black/5 rounded-lg overflow-hidden md:sticky md:top-24">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center bg-white border border-black/5 rounded-lg p-10">

            <div className="text-[9px] uppercase tracking-[0.4em] text-black/40 mb-4">
              REF: {product.ref}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6 text-black">
              {product.name}
            </h1>

            <p className="text-[11px] uppercase tracking-[0.25em] text-black/40 mb-6">
              {product.series} — {product.category}
            </p>

            <p className="text-sm text-black/70 leading-relaxed mb-12">
              {product.description}
            </p>

            {product.hotprintiUrl && (
              <a
                href={product.hotprintiUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-10 py-4 border border-black text-[10px] uppercase tracking-[0.35em] text-black rounded hover:bg-black hover:text-white transition">
                  Comprar
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
