import React from "react";

interface InfoListProps {
  items: string[];
  className?: string;
}

const InfoList: React.FC<InfoListProps> = ({ items, className }) => (
  <div className={`leading-10 font-normal ${className}`}>
    {items.map((item, index) => (
      <span key={index} className="block text-xs py-1">
        {item}
      </span>
    ))}
  </div>
);

export default InfoList;
