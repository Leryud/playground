# Creating a New Experiment

This guide walks you through creating a new experiment in the playground.

## Quick Start

The fastest way to create a new experiment is to copy an existing one:

```bash
cp -r experiments/counter experiments/my-experiment
```

Then modify `metadata.ts` and `index.tsx` for your experiment.

---

## Directory Structure

Each experiment lives in its own directory under `experiments/`:

```
experiments/
  my-experiment/
    index.tsx        # Main React component (required)
    metadata.ts      # Experiment metadata (required)
    styles.css       # Optional experiment-specific styles
    components/      # Optional sub-components
    hooks/          # Optional custom hooks
```

## Step-by-Step Guide

### 1. Create the Experiment Directory

```bash
mkdir -p experiments/my-experiment
```

### 2. Create `metadata.ts`

Define your experiment's metadata:

```typescript
// experiments/my-experiment/metadata.ts
export const metadata = {
  id: 'my-experiment',                          // Must match directory name
  title: 'My Experiment Title',                  // Displayed in UI
  description: 'A brief description of what this experiment does and why it exists.',
  tags: ['tag1', 'tag2', 'experimental'],       // For filtering/categorization
  category: 'Examples',                          // Optional category grouping
  createdAt: new Date(),                         // Creation date
  dependencies: [],                              // Optional: npm packages required
};
```

**Important**: The `id` must be unique across all experiments and match your directory name.

### 3. Create `index.tsx`

Create your main React component:

```typescript
'use client';

import { useState } from 'react';

export function MyExperiment() {
  // Your state and logic here
  const [value, setValue] = useState('Hello');

  return (
    <div className="p-8 bg-white max-w-2xl">
      <h2>My Experiment</h2>

      {/* Your experiment UI here */}
      <div className="mt-4">
        <p>{value}</p>
        <button
          className="btn btn-primary"
          onClick={() => setValue(value + '!')}
        >
          Add Exclamation
        </button>
      </div>
    </div>
  );
}
```

**Notes:**
- Use `'use client'` if you need React hooks or interactivity
- Component name should match your experiment name (e.g., `Counter`, `ColorPicker`)
- Use pure CSS utility classes from the global styles

### 4. Register the Experiment

Add your experiment to `experiments/index.ts`:

```typescript
// experiments/index.ts
import { registerExperiment } from '@/lib/experiments/registry';

import { MyExperiment } from './my-experiment/index';
import { metadata as myExperimentMetadata } from './my-experiment/metadata';

registerExperiment({
  metadata: myExperimentMetadata,
  component: MyExperiment,
});
```

### 5. (Optional) Add Experiment-Specific Styles

If your experiment needs custom styles, create `styles.css`:

```css
/* experiments/my-experiment/styles.css */
[data-experiment-id="my-experiment"] {
  /* Your experiment-specific styles */
}

[data-experiment-id="my-experiment"] .special-element {
  border: 2px solid var(--color-blue-500);
  padding: var(--spacing-md);
}
```

Then import it in your component:

```typescript
import './styles.css';
```

**Styling Guidelines:**
- Use CSS custom properties from `styles/global/base.css` (e.g., `--color-blue-500`)
- Scope styles with `[data-experiment-id="your-id"]` to prevent leakage
- Prefer global utility classes for common patterns
- Only add custom styles for experiment-specific needs

---

## Using Global Styles

The playground provides a set of global utility classes you can use in any experiment:

### Layout
```jsx
<div className="container">...</div>
<div className="grid grid-cols-2 gap-4">...</div>
<div className="flex items-center justify-between">...</div>
```

### Typography
```jsx
<h2>Title</h2>
<p className="text-sm text-gray-600">Description</p>
<code className="code">code snippet</code>
<span className="mono">monospace text</span>
```

### Components
```jsx
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-danger">Danger</button>

<span className="tag">Tag</span>
<span className="tag tag-rounded">Rounded Tag</span>

<div className="card">Card content</div>

<input className="input" />
<textarea className="textarea" />
```

### Spacing
```jsx
<div className="p-4">Padding</div>
<div className="mb-4">Margin bottom</div>
<div className="mt-6">Margin top</div>
<div className="gap-4">Gap</div>
```

### Colors
```jsx
<p className="text-gray-600">Gray text</p>
<p className="text-blue-500">Blue text</p>
<p className="text-white">White text</p>
<div className="bg-white">White background</div>
<div className="bg-gray-50">Light gray background</div>
```

See `styles/README.md` for the full list of available classes and color palette.

---

## Experiment Best Practices

### 1. Keep It Isolated
Experiments should be self-contained. Avoid dependencies on other experiments.

### 2. Use Descriptive Metadata
```typescript
export const metadata = {
  id: 'particle-system',
  title: 'Particle System',
  description: 'Interactive particle animation with gravity and collision detection.',
  tags: ['animation', 'canvas', 'physics'],
  category: 'Graphics',
  createdAt: new Date(),
};
```

### 3. State Management
Keep state local to the experiment component. If you need complex state, use `useState`, `useReducer`, or create custom hooks:

```typescript
// experiments/my-experiment/hooks/useParticlePhysics.ts
export function useParticlePhysics() {
  // Custom hook logic
}
```

### 4. External Dependencies
If your experiment needs npm packages, list them in metadata and install them:

```typescript
export const metadata = {
  // ...
  dependencies: ['framer-motion', 'three'],
};
```

```bash
npm install framer-motion three
```

### 5. Responsive Design
Use global layout utilities for responsive behavior:

```jsx
<div className="grid grid-cols-1 grid-cols-2 grid-cols-3 gap-4">
  {/* This creates a responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

### 6. Accessibility
- Use semantic HTML (`button`, `input`, `label`)
- Ensure keyboard navigation works
- Add focus states (global utilities handle this automatically)
- Provide clear labels

---

## Testing Your Experiment

### 1. Start Dev Server
```bash
npm run dev
```

### 2. View on Home Page
Navigate to `http://localhost:3000` and verify:
- Your experiment appears in the grid
- Title, description, and tags display correctly
- Card hover effects work

### 3. View Experiment Detail
Click your experiment to view it:
- Header displays experiment metadata
- Experiment component renders correctly
- Back button returns to home

### 4. Test Interactivity
- Try all buttons, inputs, and interactive elements
- Verify state changes work correctly
- Check for console errors

### 5. Build Verification
```bash
npm run build
```

Ensure the build succeeds without errors.

---

## Common Patterns

### Pattern 1: Counter
```typescript
'use client';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 bg-white max-w-2xl">
      <h2>Counter</h2>
      <div className="text-4xl font-bold text-center mb-6 mono">
        {count}
      </div>
      <div className="flex gap-4 justify-center">
        <button
          className="btn btn-secondary"
          onClick={() => setCount(c => c - 1)}
        >
          -
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setCount(c => c + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
```

### Pattern 2: Data Visualization
```typescript
'use client';
import { useState } from 'react';

export function DataViz() {
  const [data, setData] = useState([10, 20, 30, 40, 50]);

  return (
    <div className="p-8 bg-white">
      <h2>Data Visualization</h2>
      <div className="flex gap-4 items-end h-48 mt-4">
        {data.map((value, index) => (
          <div
            key={index}
            style={{ height: `${value * 2}px` }}
            className="flex-1 bg-blue-500"
          />
        ))}
      </div>
    </div>
  );
}
```

### Pattern 3: Form Input
```typescript
'use client';
import { useState } from 'react';

export function FormExperiment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-white max-w-2xl space-y-4">
      <h2>Form Experiment</h2>

      <div>
        <label>Name</label>
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
```

---

## Troubleshooting

### Experiment Not Showing Up
- Verify the experiment is registered in `experiments/index.ts`
- Check that the `id` in metadata is unique
- Run `npm run dev` to rebuild

### Styles Not Applying
- Verify CSS imports in `app/globals.css`
- Check for CSS syntax errors
- Use `data-experiment-id` scoping for isolation

### Build Errors
- Run `npm run lint` to check for code issues
- Verify TypeScript types are correct
- Check console for specific error messages

---

## Example Experiments

Look at the existing experiments for reference:

- **counter**: Simple state management
- **color-picker**: Visual feedback and state
- **text-transformer**: Form inputs and computed values

Each demonstrates different patterns you can use in your own experiments.
