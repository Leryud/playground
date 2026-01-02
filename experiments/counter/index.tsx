'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 bg-white">
      <h2>Counter Demo</h2>
      <div className="text-4xl font-bold text-center mb-6 text-blue-500 mono">
        {count}
      </div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          className="btn btn-secondary btn-lg"
        >
          -
        </button>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="btn btn-primary btn-lg"
        >
          +
        </button>
        <button
          onClick={() => setCount(0)}
          className="btn btn-danger btn-lg"
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
