import React, { useState } from "react";
import { Product, AppView } from "../types";

import systemBaseMockup from "../products/Camisa-Modelo-Descolado-Cinza-BASE.png";

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

  // ⭐ separar por série (prepara multi-série sem mudar UI)
  const mathematicsProducts = products.filter(
    (p) => p.series === "MATHEMATICS"
  );
  const systemProducts = products.filter(
    (p) => p.series === "SYSTEM"
  );

  return (
    <div className="animate-in fade-in duration-500 bg-[#f6f6f6] text-black">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f6f6f6]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center">
            {!logoError ? (
              <img
                src="/Logo-HL-Preto.svg"
                alt="Hidden Layer"
                className="h-6 w-auto"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-xl font-bold tracking-tighter">HL</div>
            )}
          </div>

          <div className="flex gap-4">
            <button className="material-icons text-black/60">search</button>
            <button className="material-icons text-black/60">
              shopping_bag
            </button>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 pb-4">
          <ul className="flex space-x-8 text-[10px] font-medium uppercase tracking-widest">
            <li
              className={`pb-1 ${
                currentView === AppView.HOME
                  ? "text-primary border-b border-primary"
                  : "text-black/50"
              }`}
              onClick={() => setCurrentView(AppView.HOME)}
            >
              Mathematics
            </li>
            <li className="text-black/30">System</li>
            <li className="text-black/30">Signal</li>
            <li className="text-black/30">Field</li>
          </ul>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="pt-24 pb-32">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* HERO */}
          <section className="relative flex items-center justify-center min-h-[80vh] mb-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold uppercase tracking-tight">
                HIDDEN LAYER
              </h1>
              <p className="mt-6 text-[11px] uppercase tracking-widest text-black/50">
                Between input and output.
              </p>
            </div>
          </section>

          {/* LAYER TRANSITION */}
          <section className="py-20 flex justify-center">
            <div className="text-center space-y-3">
              <div className="text-[9px] uppercase tracking-[0.4em] text-black/40">
                Entering Layer
              </div>
              <div className="text-[11px] uppercase tracking-widest text-black/50">
                Mathematics Series — Vol.01
              </div>
            </div>
          </section>

          {/* MATHEMATICS HEADER */}
          <div className="mb-6 text-[9px] uppercase tracking-[0.35em] text-black/40">
            Current State
          </div>

          {/* MATHEMATICS GRID */}
          <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mathematicsProducts.map((p) => {
              const isCore = p.isCore;

              return (
                <div
                  key={p.id}
                  className={`bg-white rounded-lg border border-black/5 overflow-hidden group transition-transform ${
                    isCore ? "scale-[1.02]" : "hover:scale-[1.015]"
                  }`}
                >
                  <div className="aspect-[3/4] bg-[#f2f2f2] relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-3 left-3 bg-white/70 backdrop-blur px-2 py-0.5 rounded border border-black/5">
                      <span className="text-[8px] uppercase tracking-[0.25em] text-black/70 font-bold">
                        REF: {p.ref}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-1">
                      {p.name}
                    </h3>

                    <p className="text-[9px] uppercase tracking-[0.25em] text-black/40 mb-3">
                      {p.category}
                    </p>

                    <a
                      href={p.hotprintiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-full py-2 border border-black/20 text-[9px] uppercase tracking-widest text-black/60 rounded hover:border-primary/60 hover:text-primary transition-colors">
                        Ver produto
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </section>

          {/* CONCEPT NOTE */}
          <section className="mt-16 mb-10 pt-6 text-center">
            <div className="max-w-md mx-auto">
              <p className="text-[12px] uppercase tracking-wider text-black/50">
                Explorações vestíveis baseadas em lógica de compressão e sistemas modulares.
                Onde a estrutura encontra a geometria.
              </p>
            </div>
            <div className="mt-12 border-t border-black/10"></div>
          </section>

          {/* SYSTEM SERIES */}
          <section className="mt-24">
          
            <div className="mb-6 text-[9px] tracking-[0.35em] uppercase text-black/40 text-center">
              System Series — Emerging State
            </div>
          
            <div className="flex flex-col md:flex-row gap-6 justify-center">
          
              {/* PREVIEW CARD — sempre existe */}
              <div className="max-w-xl w-full md:w-[420px]">
                <div className="bg-white rounded-lg overflow-hidden border border-black/5 group">
          
                  <div className="aspect-[3/4] overflow-hidden relative bg-[#e6e6e6]">
                    <img
                      src={systemBaseMockup}
                      alt="System Series"
                      className="w-full h-full object-cover opacity-95"
                    />
          
                    <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
                      <div className="text-[8px] uppercase tracking-[0.35em] text-black/40">
                        Layer Forming
                      </div>
                    </div>
                  </div>
          
                  <div className="p-6 text-center">
                    <div className="text-xs font-bold tracking-widest uppercase mb-2">
                      SYSTEM SERIES
                    </div>
          
                    <div className="text-[9px] text-black/40 uppercase tracking-[0.25em] mb-2">
                      Structural Layer Emerging
                    </div>
          
                    <div className="text-[8px] text-black/30 uppercase tracking-[0.3em]">
                      First State Identified
                    </div>
                  </div>
          
                </div>
              </div>
          
              {/* FIRST STATE — aparece quando existir produto */}
              {systemProducts.length > 0 && (
                <div className="max-w-xl w-full md:w-[420px]">
                  {systemProducts.slice(0, 1).map((p) => (
                    <div
                      key={p.id}
                      className="bg-white rounded-lg overflow-hidden border border-black/5 group transition-transform hover:scale-[1.01]"
                    >
                      <div className="aspect-[3/4] bg-[#f2f2f2] overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
          
                      <div className="p-6 text-center">
                        <div className="text-xs font-bold uppercase tracking-widest mb-2">
                          {p.name}
                        </div>
          
                        <div className="text-[9px] uppercase tracking-[0.25em] text-black/40 mb-4">
                          First Structural State
                        </div>
          
                        <button className="px-6 py-2 border border-black/20 text-[9px] uppercase tracking-[0.3em] text-black/60 rounded hover:border-primary/60 hover:text-primary transition-colors">
                          View State
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          
            </div>
          
          </section>

          {/* FUTURE STATES */}
          <section className="py-16 flex justify-center">
            <div className="text-center space-y-3">
              <div className="text-[9px] uppercase tracking-[0.4em] text-black/30">
                Additional States Pending
              </div>
              <div className="text-[10px] uppercase tracking-widest text-black/40">
                Next Layer Loading
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-20 py-16 border-t border-black/10 text-center">
            <div className="text-[10px] uppercase tracking-widest text-black/50 font-bold">
              // SYSTEM STATE: OPERATIONAL
            </div>

            <div className="mt-8 text-[8px] uppercase tracking-[0.3em] text-black/40 leading-loose">
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
