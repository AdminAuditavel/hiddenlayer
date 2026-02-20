import React from "react";
import { Product } from "../types";

type Props = {
  products: Product[];
  navigateToDetail: (product: Product) => void;
};

const CatalogView: React.FC<Props> = ({ products, navigateToDetail }) => {
  // separar por série
  const mathematics = products.filter((p) => p.series === "MATHEMATICS");
  const system = products.filter((p) => p.series === "SYSTEM");
  const signal = products.filter((p) => p.series === "SIGNAL");
  const field = products.filter((p) => p.series === "FIELD");

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black pt-28 pb-24">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <div className="text-[9px] uppercase tracking-[0.4em] text-black/40">
            Catalog
          </div>

          <h1 className="text-3xl font-bold tracking-tight mt-4">
            System Overview
          </h1>
        </div>

        {/* SERIES CARDS */}
        <section className="grid md:grid-cols-2 gap-6 mb-20">

          <SeriesCard title="MATHEMATICS" state="Active" count={mathematics.length} />
          <SeriesCard title="SYSTEM" state="Emerging" count={system.length} />
          <SeriesCard title="SIGNAL" state="Pending" count={signal.length} />
          <SeriesCard title="FIELD" state="Context" count={field.length} />

        </section>

        {/* STATES LIST */}
        <section className="space-y-14">

          <StateBlock
            title="MATHEMATICS"
            products={mathematics}
            navigate={navigateToDetail}
          />

          <StateBlock
            title="SYSTEM"
            products={system}
            navigate={navigateToDetail}
          />

        </section>

        {/* ROADMAP */}
        <section className="mt-24 text-center">
          <div className="text-[9px] uppercase tracking-[0.4em] text-black/40 mb-6">
            Next States
          </div>

          <div className="flex gap-6 justify-center text-[11px] uppercase tracking-widest text-black/50">
            <span>Mapping</span>
            <span>Propagation</span>
            <span>Flow</span>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CatalogView;


/* ---------------- COMPONENTES ---------------- */

const SeriesCard = ({
  title,
  state,
  count,
}: {
  title: string;
  state: string;
  count: number;
}) => (
  <div className="bg-white border border-black/5 rounded-lg p-6">
    <div className="text-xs font-bold tracking-widest uppercase mb-2">
      {title}
    </div>

    <div className="text-[10px] uppercase tracking-widest text-black/40 mb-4">
      {state}
    </div>

    <div className="text-[11px] text-black/50">
      {count} states
    </div>
  </div>
);

const StateBlock = ({
  title,
  products,
  navigate,
}: {
  title: string;
  products: Product[];
  navigate: (p: Product) => void;
}) => {
  if (!products.length) return null;

  return (
    <div>
      <div className="text-[9px] uppercase tracking-[0.35em] text-black/40 mb-4">
        {title}
      </div>

      <div className="flex flex-wrap gap-3">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => navigate(p)}
            className="px-4 py-2 border border-black/20 rounded text-[10px] uppercase tracking-widest text-black/60 hover:border-primary hover:text-primary transition-colors"
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
};
