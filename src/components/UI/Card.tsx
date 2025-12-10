import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <div
      className={`
      bg-gray-900/50 backdrop-blur-sm 
      border border-gray-800 
      rounded-2xl shadow-xl
      ${
        hover
          ? "hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all duration-300"
          : ""
      }
      ${className}
    `}
    >
      {children}
    </div>
  );
};
