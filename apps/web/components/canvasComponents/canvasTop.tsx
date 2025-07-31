"use client";

import {
  Lock,
  Hand,
  MousePointer2,
  Square,
  Circle,
  Diamond,
  ArrowRight,
  Minus,
  Pencil,
  Type,
  Image,
  Eraser,
  PanelTop,
} from "lucide-react";

export default function Toolbar() {
  const icons = [
    Lock,
    Hand,
    MousePointer2,
    Square,
    Diamond,
    Circle,
    ArrowRight,
    Minus,
    Pencil,
    Type,
    Eraser,
  ];

  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-[#1e1e1e] text-white px-4 py-2 rounded-xl flex gap-4 items-center shadow-md">
      {icons.map((Icon, index) => (
        <Icon
          key={index}
          className="w-5 h-5 cursor-pointer hover:text-purple-400"
        />
      ))}
      <div className="w-[1px] h-5 bg-[#333]" />
      <PanelTop className="w-5 h-5 cursor-pointer text-purple-400" />
    </div>
  );
}
