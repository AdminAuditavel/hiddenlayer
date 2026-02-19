import React from "react";

const HLLoading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[999]">
      <div className="flex gap-[4px]">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="w-[3px] h-[28px] bg-primary hl-loading-bar"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default HLLoading;
