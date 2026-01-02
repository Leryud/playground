'use client';

import { useState } from 'react';

export function TextTransformer() {
  const [text, setText] = useState('Hello, World!');

  return (
    <div className="p-8 bg-white max-w-2xl">
      <h2>Text Transformer</h2>

      <div className="space-y-4">
        <div>
          <label>Input Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="textarea"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Uppercase</label>
            <div className="p-3 bg-gray-50 mono text-sm">
              {text.toUpperCase()}
            </div>
          </div>
          <div>
            <label>Lowercase</label>
            <div className="p-3 bg-gray-50 mono text-sm">
              {text.toLowerCase()}
            </div>
          </div>
          <div>
            <label>Reversed</label>
            <div className="p-3 bg-gray-50 mono text-sm">
              {text.split('').reverse().join('')}
            </div>
          </div>
          <div>
            <label>Character Count</label>
            <div className="p-3 bg-gray-50 mono text-sm">
              {text.length}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-gray-600 text-sm text-center">
        Type in the input area to see real-time text transformations.
        This demonstrates how experiments can handle user input and display computed results.
      </p>
    </div>
  );
}
