type Shapes =
  | {
      type: "rect";
      x: number;
      y: number;
      height: number;
      width: number;
    }
  | {
      type: "arc";
      x: number;
      y: number;
      centerX: number;
      centerY: number;
      radius: number;
    };

export default function initDraw(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");

  let existingShapes: Shapes[] = [];

  if (!ctx) {
    return;
  }
  ctx.fillStyle = "rgba(0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let clicked = false;
  let startx = 0;
  let starty = 0;

  canvas.addEventListener("mousedown", (e) => {
    clicked = true;
    startx = e.clientX;
    starty = e.clientY;
  });

  canvas.addEventListener("mouseup", (e) => {
    clicked = false;
    const width = e.clientX - startx;
    const height = e.clientY - starty;

    existingShapes.push({
      type: "rect",
      x: startx,
      y: starty,
      height,
      width,
    });
  });

  canvas.addEventListener("mousemove", (e) => {
    if (clicked) {
      const width = e.clientX - startx;
      const height = e.clientY - starty;
      clearCanvas(existingShapes, canvas, ctx)
      ctx.strokeStyle = "rgba(255, 255, 255)";
      ctx.strokeRect(startx, starty, width, height);
    }
  });
}

function clearCanvas(
  existingShapes: Shapes[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  existingShapes.map((shape) => {
    if (shape.type === "rect") {
      ctx.strokeStyle = "rgba(255, 255, 255)";
      ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
    }
  });
}
