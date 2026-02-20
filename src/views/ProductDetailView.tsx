import React from "react";
import { Product } from "../types";

type Props = {
  product: Product;
};

const ProductDetailView: React.FC<Props> = ({ product }) => {
  return (
    <div className="animate-in fade-in duration-500 bg-[#f6f6f6] min-h-screen">
      <div className="max-w-[1100px] mx-auto px-6 py-24">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* IMAGE */}
          <div className="bg-white border border-black/5 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">

            <div className="text-[10px] uppercase tracking-[0.35em] text-black/40 mb-3">
              REF: {product.ref}
            </div>

            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">
              {product.name}
            </h1>

            <p className="text-[11px] uppercase tracking-[0.25em] text-black/40 mb-6">
              {product.series} — {product.category}
            </p>

            <p className="text-sm text-black/70 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* BUY BUTTON */}
            {product.hotprintiUrl && (
              <a
                href={product.hotprintiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-8 py-3 border border-black/20 text-[10px] uppercase tracking-[0.3em] text-black/60 rounded hover:border-primary/60 hover:text-primary transition-colors">
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
