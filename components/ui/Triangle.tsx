import React from 'react';

type Props = {
  position: "top-ascending" | "top-descending" | "bottom-ascending" | "bottom-descending";
  color?: string
}
const Triangle = ({ position, color }: Props) => {
  return (
    // <img
    //   src="images/triangle.svg"
    //   className={`
    //     absolute left-0 w-full h-[10vw] 
    //     ${position === 'top-ascending' ? 'bottom-full' : ''}
    //     ${position === 'top-descending' ? 'bottom-full scale-x-[-1]' : ''}
    //     ${position === 'bottom-ascending' ? 'top-full scale-y-[-1]' : ''}
    //     ${position === 'bottom-descending' ? 'top-full scale-[-1]' : ''}
    //   `}
    //   alt="triangle"
    // />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`
        absolute left-0 w-full h-[10vw] 
        ${position === 'top-ascending' ? 'bottom-[calc(100%_-_1px)]' : ''}
        ${position === 'top-descending' ? 'bottom-[calc(100%_-_1px)] scale-x-[-1]' : ''}
        ${position === 'bottom-ascending' ? 'top-[calc(100%_-_1px)] scale-y-[-1]' : ''}
        ${position === 'bottom-descending' ? 'top-[calc(100%_-_1px)] scale-[-1]' : ''}
      `}
    >
      <polygon
        fill={color || "var(--color-background)"}
        points="0,100 100,0 100,100"
      />
    </svg>
  );
};

export default Triangle;