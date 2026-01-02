"use client";

import { useState, useRef, useEffect } from "react";

export function VideoBrush() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("#3b82f6");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.beginPath();
    }
  };

  const canvas = canvasRef.current;
  const brush = canvas?.getContext("2d");

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x =
      "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y =
      "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = brushColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  };

  const handleResize = () => {
    if (canvasRef.current && containerRef.current) {
      canvasRef.current.width = containerRef.current.offsetWidth;
      canvasRef.current.height = containerRef.current.offsetHeight;
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = [
    "#3b82f6",
    "#ef4444",
    "#22c55e",
    "#eab308",
    "#8b5cf6",
    "#ec4899",
    "#ffffff",
    "#000000",
  ];

  return (
    <div className="p-8 bg-white max-w-4xl mx-auto">
      <h2>Video Brush</h2>
      <p className="text-gray-600 mb-6">
        Draw on top of video content. Use controls below to adjust brush
        settings.
      </p>

      {/* Canvas container with layered elements */}
      <div
        ref={containerRef}
        className="relative bg-gray-100 rounded border border-gray-300 mb-6"
        style={{ width: "100%", height: "100%", position: "fixed" }}
      >
        {/* Video at z-index 1 */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 1 }}
          playsInline
          muted
          loop
        >
          <source src="/videos/shelf.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Drawing canvas at z-index 2 */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full cursor-crosshair"
          style={{ zIndex: 2 }}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onMouseMove={draw}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={draw}
        />
      </div>

      {/* Brush controls */}
      <div className="grid grid-cols-1 grid-cols-3 gap-4 mb-4">
        <div>
          <label>Brush Size</label>
          <input
            type="range"
            min="1"
            max="50"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-sm text-gray-600 mt-1 mono">{brushSize}px</div>
        </div>

        <div>
          <label>Brush Color</label>
          <div className="flex gap-2 mt-1">
            <input
              type="color"
              value={brushColor}
              onChange={(e) => setBrushColor(e.target.value)}
              className="w-12 h-12 border border-gray-300 rounded cursor-pointer"
              style={{ minWidth: "48px", minHeight: "48px" }}
            />
            <input
              type="text"
              value={brushColor}
              onChange={(e) => setBrushColor(e.target.value)}
              className="input flex-1 mono"
              placeholder="#3b82f6"
            />
          </div>
        </div>

        <div className="flex items-end">
          <button onClick={clearCanvas} className="btn btn-danger w-full">
            Clear Canvas
          </button>
        </div>
      </div>

      {/* Predefined color palette */}
      <div className="flex flex-wrap gap-2 mb-6">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBrushColor(color)}
            className="w-10 h-10 rounded border border-gray-300 cursor-pointer transition-transform hover:scale-110"
            style={{
              backgroundColor: color,
              borderColor: color === brushColor ? "var(--color-blue-500)" : "",
              borderWidth: color === brushColor ? "2px" : "1px",
            }}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>

      <p className="text-sm text-gray-600 text-center">
        Tip: Add your video to{" "}
        <span className="code">public/videos/your-video.mp4</span> and update
        the source path above. The canvas will automatically overlay and resize
        to match the video container.
      </p>
    </div>
  );
}
