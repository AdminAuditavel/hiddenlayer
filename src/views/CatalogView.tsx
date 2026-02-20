import React from "react";
import { Product } from "../types";

type Props = {
  products: Product[];
  navigateToDetail: (product: Product) => void;
};

const CatalogView: React.FC<Props> = ({ products, navigateToDetail }) => {
  // ✅ PASSO 1 — progresso conceitual (intencional por enquanto)
  const seriesProgress = {
    MATHEMATICS: 1, // 100%
    SYSTEM: 0.25, // 25%
    SIGNAL: 0.05, // 5%
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <main className="max-w-[960px] mx-auto px-6 pt-28 pb-32">
        {/* HEADER */}
        <section className="mb-16 text-center">
          <div className="text-[9px] tracking-[0.4em] uppercase text-black/40 mb-4">
            System Catalog
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            Release States
          </h1>

          <p className="mt-4 text-[12px] uppercase tracking-wider text-black/50">
            Garments as evolving structures.
          </p>
        </section>

        {/* SERIES PROGRESS (roadmap visible) */}
        <section className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SeriesCard
              title="MATHEMATICS"
              state="Active"
              progress={seriesProgress.MATHEMATICS}
            />
            <SeriesCard
              title="SYSTEM"
              state="Forming"
              progress={seriesProgress.SYSTEM}
            />
            <SeriesCard
              title="SIGNAL"
              state="Queued"
              progress={seriesProgress.SIGNAL}
            />
          </div>
        </section>

        {/* TIMELINE */}
        <div className="border-l border-black/10 pl-8 space-y-6">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => navigateToDetail(p)}
              className="group text-left w-full"
            >
              <div className="flex items-center gap-4">
                {/* INDEX */}
                <div className="text-black/30 text-sm font-mono w-8">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* STATE */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    {/* NAME */}
                    <div className="text-sm font-bold tracking-widest uppercase group-hover:text-primary transition-colors">
                      {p.name}
                    </div>

                    {/* STATUS BADGE */}
                    <span className="text-[8px] px-2 py-1 border border-black/20 rounded uppercase tracking-[0.25em] text-black/50">
                      Active
                    </span>
                  </div>

                  {/* CATEGORY */}
                  <div className="text-[9px] uppercase tracking-[0.25em] text-black/40 mt-1">
                    {p.category}
                  </div>
                </div>

                {/* BAR MOTIF */}
                <div className="h-6 w-[2px] bg-black/20 group-hover:h-8 group-hover:bg-black transition-all" />
              </div>
            </button>
          ))}
        </div>

        {/* ROADMAP */}
        <section className="mt-20 pt-10 border-t border-black/10">
          <div className="text-[9px] tracking-[0.4em] uppercase text-black/40 mb-6 text-center">
            Next States
          </div>

          <div className="flex justify-center gap-6 text-[10px] uppercase tracking-[0.3em] text-black/40">
            <div className="border border-black/20 px-3 py-2 rounded">
              Mapping
            </div>

            <div className="border border-black/20 px-3 py-2 rounded">
              Propagation
            </div>

            <div className="border border-black/20 px-3 py-2 rounded">Flow</div>
          </div>
        </section>
      </main>
    </div>
  );
};

// ✅ PASSO 2 — componente ProgressBar
const SeriesProgress = ({ value }: { value: number }) => (
  <div className="w-full h-[3px] bg-black/10 mt-3 overflow-hidden">
    <div
      className="h-full bg-black transition-all duration-700"
      style={{ width: `${value * 100}%` }}
    />
  </div>
);

// ✅ PASSO 3 — SeriesCard com progresso
const SeriesCard = ({
  title,
  state,
  progress,
}: {
  title: string;
  state: string;
  progress: number;
}) => (
  <div className="bg-white border border-black/5 rounded-lg p-6">
    <div className="text-xs font-bold tracking-widest uppercase mb-2">
      {title}
    </div>

    <div className="text-[10px] uppercase tracking-widest text-black/40">
      {state}
    </div>

    <SeriesProgress value={progress} />
  </div>
);

export default CatalogView;
