import React from "react";

const HLPatternTeaser: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[220px]">
      <div className="hl-pattern">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="w-[3px] h-[90px] bg-primary opacity-80"
          />
        ))}
      </div>
    </div>
  );
};

export default HLPatternTeaser;
