//src/views/HomeView.tsx

import React, { useState } from "react";
import { Product, AppView } from "../types";

type Props = {
  products: Product[];
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  navigateToDetail: (product: Product) => void;
};

const HomeView: React.FC<Props> = ({
  products,
  currentView,
  setCurrentView,
  navigateToDetail,
}) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="animate-in fade-in duration-500">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center">
            {!logoError ? (
              <img
                src="/Logo-HL-Branco.svg"
                alt="Hidden Layer"
                className="h-6 w-auto"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-xl font-bold tracking-tighter">HL</div>
            )}
          </div>

          <div className="flex gap-4">
            <button className="material-icons text-white/70">search</button>
            <button className="material-icons text-white/70">
              shopping_bag
            </button>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 pb-4">
          <div className="overflow-x-auto hide-scrollbar">
            <ul className="flex space-x-8 text-[10px] font-medium tracking-widest-plus uppercase text-white/60 whitespace-nowrap">
              <li
                className={`pb-1 ${
                  currentView === AppView.HOME
                    ? "text-primary border-b border-primary"
                    : ""
                }`}
                onClick={() => setCurrentView(AppView.HOME)}
              >
                Mathematics
              </li>
              <li>System</li>
              <li>Signal</li>
              <li>Field</li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="pt-24 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* HERO */}
          <section className="mb-12 relative">
            <div className="absolute inset-0 technical-grid opacity-[0.07] pointer-events-none"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* LEFT */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-none tracking-tighter-minus uppercase whitespace-nowrap -translate-y-[2px]">
                  HIDDEN LAYER
                </h1>

                <p className="text-[11px] font-medium tracking-widest-plus text-white/50 uppercase leading-tight">
                  REPRESENTATION BETWEEN INPUT AND OUTPUT
                </p>

                <div className="pt-3 text-[10px] uppercase tracking-widest text-white/40">
                  <div>MATHEMATICS SERIES — VOL.01</div>
                  <div className="text-primary">AVAILABLE NOW</div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="hidden lg:flex flex-col items-end text-right gap-2 text-[10px] tracking-widest uppercase text-white/30 mt-6">
                <span>SYSTEM STATUS: OPERATIONAL</span>
                <span>ARCHIVE: HL-2024</span>
                <span>SERIES LOADED: MATHEMATICS</span>
                <span className="text-primary">LAYER STATE: ACTIVE</span>
              </div>
            </div>
          </section>

          {/* SERIES HEADER */}
          <section className="mb-10 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  [ VOL. 01 ]
                </span>

                <p className="mt-3 text-[12px] text-white/60 uppercase tracking-wider max-w-md">
                  Explorações vestíveis baseadas em lógica de compressão e sistemas modulares.
                  Onde a estrutura encontra a geometria.
                </p>
              </div>
            </div>
          </section>

          {/* PRODUCT GRID */}
          <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((p) => {
              const isCore = p.isCore;

              return (
                <div
                  key={p.id}
                  className={`bg-surface rounded-lg overflow-hidden border border-white/5 group transition-transform ${
                    isCore ? "scale-[1.03]" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      className={`w-full h-full object-cover grayscale transition-opacity ${
                        isCore
                          ? "opacity-95 contrast-125 brightness-105"
                          : "opacity-80 contrast-125 group-hover:opacity-100"
                      }`}
                      src={p.image}
                      alt={p.name}
                    />

                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                      <span className="text-[9px] font-bold text-white/80 tracking-widest uppercase">
                        REF: {p.ref}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">
                    <h3 className="text-xs font-bold tracking-widest uppercase mb-1">
                      {p.name}
                    </h3>

                    <p className="text-[9px] text-white/40 uppercase tracking-wider mb-2">
                      {p.category}
                    </p>

                    <div className="text-[8px] text-white/30 uppercase tracking-widest mb-3">
                      Disponível via HotPrinti
                    </div>

                    <a
                      href={p.hotprintiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <button className="w-full py-2 border border-primary/30 text-primary text-[9px] font-bold uppercase tracking-widest rounded hover:bg-primary/10 transition-colors">
                        Ver produto
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </section>

          {/* FOOTER */}
          <footer className="mt-24 py-12 border-t border-white/10">
            <div className="text-[10px] font-bold tracking-widest uppercase text-white/30">
              // SYSTEM STATE: OPERATIONAL
            </div>

            <div className="mt-12 text-[8px] text-white/20 uppercase tracking-[0.3em] font-medium leading-loose">
              Copyright © Hidden Layer System Solutions.
              <br />
              Developed under mathematical paradigms.
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default HomeView;
