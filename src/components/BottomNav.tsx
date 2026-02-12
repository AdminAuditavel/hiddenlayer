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
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-xl border-t border-white/5 flex items-center justify-around px-8 pb-4 z-50">
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

      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center -translate-y-4 shadow-lg shadow-primary/30">
        <span className="material-icons text-black font-bold">
          radar
        </span>
      </div>

      <button className="material-icons text-white/40">
        radar
      </button>

      <button className="material-icons text-white/40">
        person_outline
      </button>
    </div>
  );
};

export default BottomNav;
