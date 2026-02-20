import React from "react";
import { Product, AppView } from "../types";

type Props = {
  product: Product;
  allProducts: Product[];
  navigateToDetail: (p: Product) => void;
  setCurrentView: (view: AppView) => void;
};

const DetailView: React.FC<Props> = ({
  product,
  allProducts,
  navigateToDetail,
  setCurrentView,
}) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* BACK */}
      <div className="p-6">
        <button
          onClick={() => setCurrentView(AppView.HOME)}
          className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition"
        >
          ← Back
        </button>
      </div>

      {/* HERO STATE */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <div className="text-[10px] tracking-[0.35em] text-white/40 uppercase mb-3">
          {product.ref}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
          {product.name}
        </h1>

        <p className="mt-6 text-[12px] text-white/40 max-w-md uppercase tracking-wider">
          {product.description}
        </p>

        <button
          onClick={() => window.open(product.hotprintiUrl, "_blank")}
          className="mt-8 px-8 py-3 border border-white/20 text-[10px] uppercase tracking-[0.3em] hover:border-primary transition"
        >
          Access Artifact
        </button>
      </section>

      {/* REVEAL PRODUCT */}
      <section className="py-24 flex justify-center px-6">
        <div className="max-w-md w-full">
          <div className="aspect-[3/4] bg-[#0b0b0b] rounded-lg overflow-hidden border border-white/5">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERIES PROGRESS */}
      <section className="px-6 pb-16 flex justify-center">
        <div className="max-w-md w-full text-center space-y-3">
      
          <div className="text-[9px] uppercase tracking-[0.35em] text-white/40">
            Series Completion
          </div>
      
          <div className="w-full h-[3px] bg-white/10">
            <div
              className="h-full bg-white transition-all"
              style={{
                width: `${
                  (allProducts.filter(p => p.series === product.series).length / 4) * 100
                }%`
              }}
            />
          </div>
      
          <div className="text-[8px] uppercase tracking-[0.3em] text-white/30">
            {product.series}
          </div>
      
        </div>
      </section>

      {/* RELATED STATES */}
      <section className="pb-32 px-6">
        <div className="text-center mb-12">
          <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">
            System States
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto hide-scrollbar">
          {allProducts
            .filter((p) => p.id !== product.id)
            .map((p) => (
              <div
                key={p.id}
                onClick={() => navigateToDetail(p)}
                className="min-w-[220px] cursor-pointer group"
              >
                <div className="aspect-[3/4] bg-[#0b0b0b] rounded-lg overflow-hidden border border-white/5">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                  />
                </div>

                <div className="mt-3 text-center">
                  <div className="text-[9px] uppercase tracking-widest text-white/50">
                    {p.name}
                  </div>

                  {p.isCore && (
                    <div className="mt-2 text-[8px] tracking-[0.3em] text-primary uppercase">
                      Core State
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* SPECS */}
      {product.specs && (
        <section className="pb-32 px-6 flex justify-center">
          <div className="max-w-md w-full text-center space-y-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              System Specs
            </div>

            {product.specs.composition && (
              <p className="text-[12px] text-white/60 uppercase tracking-wider">
                Composition — {product.specs.composition}
              </p>
            )}

            {product.specs.resistance && (
              <p className="text-[12px] text-white/60 uppercase tracking-wider">
                Resistance — {product.specs.resistance}
              </p>
            )}

            {product.specs.origin && (
              <p className="text-[12px] text-white/60 uppercase tracking-wider">
                Origin — {product.specs.origin}
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default DetailView;
