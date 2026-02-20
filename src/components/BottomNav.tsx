import React from "react";
import { AppView } from "../types";

type Props = {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
};

const BottomNav: React.FC<Props> = ({
  currentView,
  setCurrentView,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-xl border-t border-white/5 z-50">

      <div className="max-w-[1280px] mx-auto px-6 h-full">
        <div className="flex items-center justify-evenly h-full pb-4">

          {/* HOME */}
          <button
            onClick={() => {
              setCurrentView(AppView.HOME);
              window.scrollTo(0, 0);
            }}
            className={`material-icons ${
              currentView === AppView.HOME
                ? "text-primary"
                : "text-white/40"
            }`}
          >
            analytics
          </button>

          {/* CATALOG */}
          <button
            onClick={() => {
              setCurrentView(AppView.CATALOG);
              window.scrollTo(0, 0);
            }}
            className={`material-icons ${
              currentView === AppView.CATALOG
                ? "text-primary"
                : "text-white/40"
            }`}
          >
            layers
          </button>

          {/* FIELD ⭐ */}
          <button
            onClick={() => {
              setCurrentView(AppView.FIELD);
              window.scrollTo(0, 0);
            }}
            className={`material-icons ${
              currentView === AppView.FIELD
                ? "text-primary"
                : "text-white/40"
            }`}
          >
            radar
          </button>

          {/* PROFILE / FUTURE */}
          <button className="material-icons text-white/40">
            person_outline
          </button>

        </div>
      </div>

    </div>
  );
};

export default BottomNav;
