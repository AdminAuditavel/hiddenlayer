import React, { useEffect, useMemo, useRef, useState } from "react";
import { Product, AppView } from "../types";

import HLLoading from "../components/HLLoading";

import systemBaseMockup from "../products/Camisa-Modelo-Descolado-Cinza-BASE.png";

// FIELD assets (src/field/*)
import tecidoField from "../field/Tecido-FIELD.png";
import estudoGraficoField from "../field/Estudo-Grafico-FIELD.png";
import frame1Field from "../field/Frame1-FIELD.png";

type Props = {
  products: Product[];
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  navigateToDetail: (product: Product) => void;
};

type SectionId = "MATHEMATICS" | "SYSTEM" | "SIGNAL" | "FIELD";

function UnderlineBars({
  bars = 5,
  gapClassName = "gap-[2px]",
}: {
  bars?: number;
  gapClassName?: string;
}) {
  return (
    <div className={`absolute left-0 bottom-0 flex ${gapClassName}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          // delay via inline style (melhor que criar 20 classes)
          key={i}
          className="w-[2px] h-[8px] bg-primary hl-breathe rounded-full"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

function NavItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <li className="relative pb-2 cursor-pointer select-none" onClick={onClick}>
      <span
        className={`uppercase tracking-widest text-[10px] ${
          active ? "text-primary" : "text-black/50"
        }`}
      >
        {label}
      </span>

      {/* underline respirando (barras) */}
      {active && <UnderlineBars />}
    </li>
  );
}

const HomeView: React.FC<Props> = ({
  products,
  currentView,
  setCurrentView,
  navigateToDetail,
}) => {
  const [logoError, setLogoError] = useState(false);

  // HL ritual loading (curto)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  // ⭐ refs
  const mathRef = useRef<HTMLDivElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);
  const signalRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  // ⭐ active section (menu reage ao scroll)
  const [activeSection, setActiveSection] = useState<SectionId>("MATHEMATICS");

  // ⭐ separar por série
  const mathematicsProducts = products.filter((p) => p.series === "MATHEMATICS");
  const systemProducts = products.filter((p) => p.series === "SYSTEM");

  const systemAnchor = systemProducts[0];
  const mathAnchor = mathematicsProducts.find((p) => p.isCore);
  const heroProduct = systemAnchor ?? mathAnchor;

  // Mapeamento de seções (para click e observer)
  const sections = useMemo(
    () => [
      { id: "MATHEMATICS" as const, ref: mathRef },
      { id: "SYSTEM" as const, ref: systemRef },
      { id: "SIGNAL" as const, ref: signalRef },
      { id: "FIELD" as const, ref: fieldRef },
    ],
    []
  );

  const scrollToSection = (id: SectionId) => {
    const target = sections.find((s) => s.id === id)?.ref.current;
    if (!target) return;

    // UX instantânea
    setActiveSection(id);

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ⭐ IntersectionObserver: atualiza activeSection conforme scroll
  useEffect(() => {
    const entries: Array<{ id: SectionId; el: Element }> = [];

    for (const s of sections) {
      const el = s.ref.current;
      if (el) entries.push({ id: s.id, el });
    }

    if (entries.length === 0) return;

    const observer = new IntersectionObserver(
      (obsEntries) => {
        const visible = obsEntries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (!visible) return;

        const match = entries.find((x) => x.el === visible.target);
        if (match) setActiveSection(match.id);
      },
      {
        // janela de ativação (ajustada para navbar fixa)
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.05, 0.1, 0.2, 0.35, 0.5, 0.75],
      }
    );

    for (const e of entries) observer.observe(e.el);
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="animate-in fade-in duration-500 bg-[#f6f6f6] text-black">
      {isLoading && <HLLoading />}

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
          <ul className="flex space-x-8 font-medium">
            <NavItem
              label="Mathematics"
              active={activeSection === "MATHEMATICS"}
              onClick={() => {
                // opcional: mantém sua arquitetura original
                // (se HOME é a view que contém a landing inteira)
                setCurrentView(AppView.HOME);
                scrollToSection("MATHEMATICS");
              }}
            />
            <NavItem
              label="System"
              active={activeSection === "SYSTEM"}
              onClick={() => scrollToSection("SYSTEM")}
            />
            <NavItem
              label="Signal"
              active={activeSection === "SIGNAL"}
              onClick={() => scrollToSection("SIGNAL")}
            />
            <NavItem
              label="Field"
              active={activeSection === "FIELD"}
              onClick={() => scrollToSection("FIELD")}
            />
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

          {/* HERO SECONDARY — ANCHOR */}
          {heroProduct && (
            <section className="mb-24">
              <div className="bg-white rounded-lg border border-black/5 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* IMAGE */}
                  <div className="aspect-[4/5] bg-[#f2f2f2]">
                    <img
                      src={heroProduct.image}
                      alt={heroProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex items-center justify-center p-10">
                    <div className="text-center md:text-left max-w-sm">
                      <div className="text-[9px] uppercase tracking-[0.35em] text-black/40 mb-3">
                        Anchor State
                      </div>

                      <div className="text-xl font-bold uppercase tracking-widest mb-3">
                        {heroProduct.name}
                      </div>

                      <div className="text-[10px] uppercase tracking-[0.25em] text-black/40 mb-6">
                        Mathematics Series
                      </div>

                      <button className="px-6 py-2 border border-black/20 text-[9px] uppercase tracking-[0.3em] text-black/60 rounded hover:border-primary/60 hover:text-primary transition-colors">
                        Explore Piece
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

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
          <div ref={mathRef}>
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
          </div>

          {/* CONCEPT NOTE */}
          <section className="mt-16 mb-10 pt-6 text-center">
            <div className="max-w-md mx-auto">
              <p className="text-[12px] uppercase tracking-wider text-black/50">
                Explorações vestíveis baseadas em lógica de compressão e sistemas
                modulares. Onde a estrutura encontra a geometria.
              </p>
            </div>
            <div className="mt-12 border-t border-black/10"></div>
          </section>

          {/* SYSTEM SERIES */}
          <section ref={systemRef} className="mt-24">
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

                        <div className="text-[8px] uppercase tracking-[0.3em] text-black/30 mb-4">
                          Series Activated
                        </div>

                        <button className="px-6 py-2 border border-black/20 text-[9px] uppercase tracking-[0.3em] text-black/60 rounded hover:border-primary/60 hover:text-primary transition-colors">
                          Observe State
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* SIGNAL */}
          <section ref={signalRef} className="mt-32">
            <div className="mb-8 text-center text-[9px] uppercase tracking-[0.35em] text-black/40">
              Signal — Propagation Layer
            </div>

            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
                Movement Identified
              </h2>

              <p className="text-[12px] uppercase tracking-wider text-black/50">
                States propagate. Structures respond.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="px-10 py-10 border border-black/10 rounded-lg text-center bg-white">
                <div className="text-[10px] uppercase tracking-[0.35em] text-black/40 mb-4">
                  First Signal Pending
                </div>

                <div className="text-[9px] uppercase tracking-[0.3em] text-black/30">
                  Signal Path
                </div>
              </div>
            </div>
          </section>

          {/* FIELD */}
          <section ref={fieldRef} className="mt-32">
            <div className="mb-8 text-center text-[9px] uppercase tracking-[0.35em] text-black/40">
              Field — Applied Context
            </div>

            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
                System in Environment
              </h2>

              <p className="text-[12px] uppercase tracking-wider text-black/50">
                Vestíveis como estruturas operando em campo real.
              </p>
            </div>

            {/* GRID EDITORIAL — micro-desequilíbrio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* MATERIAL (grande) */}
              <div className="md:col-span-2 rounded-lg overflow-hidden border border-black/5 bg-white">
                <div className="aspect-[16/9] md:aspect-[12/5] bg-[#f2f2f2] relative overflow-hidden">
                  <img
                    src={tecidoField}
                    alt="Field material / tecido"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute top-3 left-3 bg-white/70 backdrop-blur px-2 py-1 rounded border border-black/5">
                    <div className="text-[8px] uppercase tracking-[0.25em] text-black/60">
                      Field / Material
                    </div>
                  </div>
                </div>

                <div className="px-5 py-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-black/45">
                    Fabric close / texture
                  </div>
                </div>
              </div>

              {/* STUDY (neutro, menos contraste) */}
              <div className="rounded-lg overflow-hidden border border-black/5 bg-white">
                <div className="aspect-square bg-[#f2f2f2] relative overflow-hidden">
                  <img
                    src={estudoGraficoField}
                    alt="Field study / estudo"
                    className="w-full h-full object-cover opacity-70 contrast-75 saturate-75"
                    loading="lazy"
                  />

                  <div className="absolute top-3 left-3 bg-white/65 backdrop-blur px-2 py-1 rounded border border-black/5">
                    <div className="text-[8px] uppercase tracking-[0.25em] text-black/55">
                      Field / Study
                    </div>
                  </div>
                </div>

                <div className="px-5 py-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                    Structure / measurement
                  </div>
                </div>
              </div>

              {/* FRAME (mais respiro + mais misterioso) */}
              <div className="md:col-span-3 rounded-lg overflow-hidden border border-black/5 bg-white">
                <div className="aspect-[21/9] bg-[#f2f2f2] relative overflow-hidden">
                  <img
                    src={frame1Field}
                    alt="Field conceptual frame"
                    className="w-full h-full object-cover opacity-90 contrast-95"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_35%,rgba(0,0,0,0.18)_100%)] opacity-40" />

                  <div className="absolute top-3 left-3 bg-white/55 backdrop-blur px-2 py-1 rounded border border-black/5">
                    <div className="text-[8px] uppercase tracking-[0.25em] text-black/55">
                      Field / Frame
                    </div>
                  </div>
                </div>

                <div className="px-6 py-8 text-center">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-black/40">
                    Conceptual still
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/40">
                Context defines perception
              </p>
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
