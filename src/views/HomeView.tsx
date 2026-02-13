//src/views/HomeView.tsx

import React from "react";
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
  return (
    <div className="animate-in fade-in duration-500">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 pt-12 pb-4 px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xl font-bold tracking-tighter">HL</div>

          <div className="flex gap-4">
            <button className="material-icons text-white/70">
              search
            </button>
            <button className="material-icons text-white/70">
              shopping_bag
            </button>
          </div>
        </div>

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
      </nav>

      <main className="pt-40 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* HERO */}
          <section className="mb-20 relative">

            {/* TECHNICAL GRID BACKGROUND */}
            <div className="absolute inset-0 technical-grid opacity-[0.08] pointer-events-none"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

              {/* LEFT */}
              <div className="space-y-6">
                <div className="text-[10px] font-medium text-primary tracking-widest uppercase">
                  [ ARCHIVE_VERSION_2.04 ]
                </div>

                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-none tracking-tighter-minus uppercase">
                  HIDDEN<br />LAYER
                </h1>

                <p className="text-[11px] font-medium tracking-widest-plus text-white/50 uppercase leading-relaxed max-w-[280px]">
                  REPRESENTATION BETWEEN<br />
                  INPUT AND OUTPUT
                </p>
              </div>

              {/* RIGHT */}
              <div className="hidden lg:flex flex-col items-end text-right gap-2 text-[10px] tracking-widest uppercase text-white/30">
                <span>SYSTEM STATUS: OPERATIONAL</span>
                <span>ARCHIVE: HL-2024</span>
                <span>SERIES LOADED: MATHEMATICS</span>
                <span className="text-primary">LAYER STATE: ACTIVE</span>
              </div>
            </div>
          </section>

          {/* SERIES + GRID (EDITORIAL LAYOUT) */}
          <section className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">

            {/* SERIES SIDEBAR */}
            <aside className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded font-bold uppercase tracking-widest">
                  MATHEMATICS SERIES
                </span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  [ VOL. 01 ]
                </span>
              </div>

              <p className="text-[12px] text-white/60 leading-relaxed uppercase tracking-wider">
                Wearable explorations based on compression logic and modular
                systems. Where structure meets absolute geometry.
              </p>
            </aside>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigateToDetail(p)}
                  className="bg-surface rounded-lg overflow-hidden border border-white/5 group active:scale-[0.98] transition-transform"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale contrast-125"
                      src={p.image}
                      alt={p.name}
                    />

                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                      <span className="text-[9px] font-bold text-white/80 tracking-widest uppercase">
                        REF: {p.ref}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xs font-bold tracking-widest uppercase mb-1">
                      {p.name}
                    </h3>

                    <p className="text-[9px] text-white/40 mb-4 uppercase tracking-wider">
                      {p.category}
                    </p>

                    <button className="w-full py-2 border border-primary/30 text-primary text-[9px] font-bold uppercase tracking-widest rounded hover:bg-primary/10 transition-colors">
                      OPEN DOCUMENTATION
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-24 py-12 border-t border-white/10">
            <div className="flex flex-col gap-6">
              <div className="text-[10px] font-bold tracking-widest uppercase text-white/30">
                // SYSTEM STATE: OPERATIONAL
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
                    MAP
                  </h4>
                  <ul className="text-[10px] text-white/50 uppercase tracking-widest space-y-2">
                    <li>Logistics</li>
                    <li>Terms</li>
                    <li>Calculus</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
                    CONNECTION
                  </h4>
                  <ul className="text-[10px] text-white/50 uppercase tracking-widest space-y-2">
                    <li>Instagram</li>
                    <li>Discord</li>
                    <li>Terminal</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-[8px] text-white/20 uppercase tracking-[0.3em] font-medium leading-loose">
                Copyright © Hidden Layer System Solutions.<br />
                Developed under mathematical paradigms.
              </div>
            </div>
          </footer>

        </div>
      </main>
    </div>
  );
};

export default HomeView;
