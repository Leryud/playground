'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Counter Demo</h2>
      <div className="text-6xl font-bold text-center mb-6 text-blue-600">
        {count}
      </div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-lg font-semibold transition-colors"
        >
          -
        </button>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-semibold transition-colors"
        >
          +
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-lg font-semibold transition-colors"
        >
          Reset
        </button>
      </div>
      <p className="mt-4 text-gray-600 text-sm text-center">
        This is an example experiment demonstrating the framework structure.
        Click the buttons to interact with this isolated component.
      </p>
    </div>
  );
}
