'use client';

import { useState } from 'react';

const colors = [
  '#ef4444',
  '#f97316',
  '#eab308',
  '#22c55e',
  '#06b6d4',
  '#3b82f6',
  '#8b5cf6',
  '#ec4899',
];

export function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#3b82f6');

  return (
    <div className="p-8 bg-white">
      <h2>Color Picker Demo</h2>
      <div
        className="w-full h-48 mb-6 transition-transform shadow-inner"
        style={{ backgroundColor: selectedColor }}
      >
        <div className="h-full flex items-center justify-center">
          <span className="text-white text-lg font-semibold mono">
            {selectedColor}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className="w-12 h-12 rounded-full shadow-md hover:scale-110 transition-transform border-2 border-white cursor-pointer"
            style={{
              backgroundColor: color,
              boxShadow: selectedColor === color ? `0 0 0 4px ${color}` : undefined,
            }}
          />
        ))}
      </div>
      <p className="mt-6 text-gray-600 text-sm text-center">
        Click any color to change the background. This demonstrates how experiments
        can have isolated state and visual feedback.
      </p>
    </div>
  );
}
