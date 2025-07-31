"use client";

import { useEffect, useRef } from "react";
import initDraw from "../../draw";
import Toolbar from "../../../../components/canvasComponents/canvasTop";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      initDraw(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <div>
      <canvas ref={canvasRef} width={1920} height={965} className="absolute top-0 left-0 z-0" ></canvas>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 bg-[#1e1e1e] px-4 py-2 rounded-lg">
        {/* <button>🔒</button>
        <button>🖐️</button>
        <button>⬛</button>
        <button>⬜</button>
        <button>🔺</button>
        <button>🔵</button>
        <button>➡️</button>
        <button>✏️</button>
        <button>A</button>
        <button>🖼️</button> */}
        <Toolbar/>
      </div>
    </div>
  );
}
