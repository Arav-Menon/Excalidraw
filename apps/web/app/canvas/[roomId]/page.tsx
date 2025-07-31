"use client";

import { useEffect, useRef } from "react";
import initDraw from "../../draw";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
        initDraw(canvasRef.current)
    }
  }, [canvasRef]);

  return (
    <>
      <canvas ref={canvasRef} width={1920} height={965}>
      </canvas>      
    </>
  );
}
