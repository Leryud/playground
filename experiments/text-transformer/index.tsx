'use client';

import { useState } from 'react';

export function TextTransformer() {
  const [text, setText] = useState('Hello, World!');

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Text Transformer</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Input Text
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Uppercase
            </label>
            <div className="p-3 bg-gray-50 rounded-lg font-mono text-sm">
              {text.toUpperCase()}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lowercase
            </label>
            <div className="p-3 bg-gray-50 rounded-lg font-mono text-sm">
              {text.toLowerCase()}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reversed
            </label>
            <div className="p-3 bg-gray-50 rounded-lg font-mono text-sm">
              {text.split('').reverse().join('')}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Character Count
            </label>
            <div className="p-3 bg-gray-50 rounded-lg font-mono text-sm">
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
