import React, { useEffect, useState } from "react";
import { getNodeId } from "../utils/node";

const ProfileView: React.FC = () => {
  const [nodeId, setNodeId] = useState<string>("");

  useEffect(() => {
    setNodeId(getNodeId());
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black">
      <main className="max-w-[900px] mx-auto px-6 pt-28 pb-32">
        {/* HEADER */}
        <section className="text-center mb-20">
          <div className="text-[9px] tracking-[0.4em] uppercase text-black/40 mb-4">
            System Access
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            Visitor Node
          </h1>

          <p className="mt-4 text-[12px] uppercase tracking-wider text-black/50">
            Identity is assigned through interaction.
          </p>
        </section>

        {/* IDENTITY CARD */}
        <section className="bg-white border border-black/5 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.3em] text-black/50">
            <div>
              <div className="text-black/30 mb-2">Access Level</div>
              <div className="font-bold tracking-widest text-black/70">
                Public
              </div>
            </div>

            <div>
              <div className="text-black/30 mb-2">System Version</div>
              <div className="font-bold tracking-widest text-black/70">
                HL-1.0
              </div>
            </div>

            <div>
              <div className="text-black/30 mb-2">Node State</div>
              <div className="font-bold tracking-widest text-black/70">
                Observing
              </div>
            </div>

            <div>
              <div className="text-black/30 mb-2">Layer Access</div>
              <div className="font-bold tracking-widest text-black/70">
                Mathematics
              </div>
            </div>

            <div>
              <div className="text-black/30 mb-2">Node ID</div>
              <div className="font-bold tracking-widest text-black/70">
                {nodeId || "Assigning…"}
              </div>
            </div>
          </div>
        </section>

        {/* REQUEST ACCESS */}
        <section className="text-center mb-20">
          <div className="text-[9px] tracking-[0.4em] uppercase text-black/40 mb-6">
            Extended Access
          </div>

          <button
            className="
              px-8 py-3
              border border-black/20
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-black/60
              rounded
              hover:border-primary/60
              hover:text-primary
              transition-colors
            "
            onClick={() => alert("Access request registered")}
          >
            Request Access
          </button>
        </section>

        {/* SYSTEM LOG */}
        <section className="border-t border-black/10 pt-12 text-center">
          <div className="text-[9px] tracking-[0.4em] uppercase text-black/40 mb-8">
            System Log
          </div>

          <div className="space-y-3 text-[10px] uppercase tracking-[0.3em] text-black/40">
            <div>Mathematics Series Released</div>
            <div>System Layer Emerging</div>
            <div>Signal Pending</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileView;
