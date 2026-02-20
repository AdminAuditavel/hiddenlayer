import React from "react";

// ✅ assets em src/field precisam ser importados
import tecidoField from "../field/Tecido-FIELD.png";
import estudoGraficoField from "../field/Estudo-Grafico-FIELD.png";
import frame1Field from "../field/Frame1-FIELD.png";

const FieldView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <main className="max-w-[1100px] mx-auto px-6 pt-28 pb-32">
        {/* HEADER */}
        <section className="mb-20 text-center">
          <div className="text-[9px] tracking-[0.4em] uppercase text-black/40 mb-4">
            Field
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            System In Environment
          </h1>

          <p className="mt-4 text-[12px] uppercase tracking-wider text-black/50 max-w-xl mx-auto">
            Observations, structures and fragments surrounding the system.
          </p>
        </section>

        {/* RESEARCH CARDS */}
        <section className="grid md:grid-cols-3 gap-6 mb-24">

          <ResearchCard
            title="Material"
            subtitle="Surface behavior"
            image={tecidoField}
            label="Linked State"
          />
        
          <ResearchCard
            title="Study"
            subtitle="Structural signal"
            image={estudoGraficoField}
            label="Emerging Structure"
          />
        
          <ResearchCard
            title="Frame"
            subtitle="Relational form"
            image={frame1Field}
            label="Artifact Candidate"
          />
        
        </section>

        {/* CONCEPT NOTE */}
        <section className="text-center max-w-2xl mx-auto mb-24">
          <p className="text-[12px] uppercase tracking-wider text-black/50 leading-relaxed">
            Garments emerge from systems.
            <br />
            Field documents the conditions where structure becomes form.
          </p>
        </section>

        {/* LOG / FUTURE */}
        <section className="border-t border-black/10 pt-12 text-center">
          <div className="text-[9px] tracking-[0.4em] uppercase text-black/40 mb-6">
            Ongoing Observations
          </div>

          <div className="flex justify-center gap-6 text-[10px] uppercase tracking-[0.3em] text-black/40">
            <span>Iteration 02</span>
            <span>Iteration 03</span>
            <span>Iteration 04</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FieldView;

/* ---------- COMPONENT ---------- */

const ResearchCard = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) => (
  <div className="bg-white border border-black/5 rounded-lg overflow-hidden group">
    <div className="aspect-[3/4] bg-[#f2f2f2] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        loading="lazy"
      />
    </div>

    <div className="p-5 text-center">
      <div className="text-xs font-bold tracking-widest uppercase mb-2">
        {title}
      </div>

      <div className="text-[9px] uppercase tracking-[0.25em] text-black/40">
        {subtitle}
      </div>
    </div>
  </div>
);
