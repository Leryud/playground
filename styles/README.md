# CSS Architecture

This project uses **pure CSS** with a modular architecture separating global styles from experiment-specific styles.

## Directory Structure

```
styles/
  global/
    base.css              - CSS reset, custom properties (variables)
    typography.css        - Font definitions, type scale
    layout.css            - Layout utilities, grids, containers
    components/
      cards.css           - Card styles
      buttons.css         - Button styles
      tags.css            - Tag/label styles
      forms.css           - Form input styles
    animations.css        - Minimal, purposeful animations
  experiments/
    (shared utilities for experiments only - add as needed)
```

## Design Principles

### Typography
- **Primary font**: Geist (sans) - for UI text, descriptions, headings
- **Secondary font**: Geist_Mono - for code, technical labels, data
- **Type scale**: 0.75rem to 2.25rem (12px to 36px)

### Visual Style
- **Sharp edges**: Default `0px` border-radius, only round when functionally needed
- **Sleek shadows**: Precise `box-shadow` values (e.g., `0 1px 3px rgba(0,0,0,0.1)`)
- **High contrast**: Sharp grays (`#171717`, `#404040`, `#737373`)
- **Borders**: `1px solid` with intentional border colors

### Animations
- **Purposeful only**: No decorative animations
- **Fast transitions**: `150ms` for hover/interactions (not 200ms)
- **Accessibility**: Focus rings for keyboard navigation

## Color Palette

### Grays
- `--color-gray-50` to `--color-gray-900` (lightest to darkest)

### Accents
- **Blue**: `--color-blue-50` to `--color-blue-900`
- **Red**: `--color-red-50` to `--color-red-900`
- **Green**: `--color-green-50` to `--color-green-900`

## Utility Classes

### Layout
- `.container` - Max-width container with responsive padding
- `.grid`, `.grid-cols-1/2/3` - Grid system
- `.flex`, `.flex-wrap`, `.items-center`, `.justify-center` - Flexbox

### Typography
- `.text-xs`, `.text-sm`, `.text-base`, `.text-lg`, `.text-xl`, `.text-2xl`, `.text-3xl`, `.text-4xl`
- `.font-medium`, `.font-semibold`, `.font-bold`
- `.mono` - Monospace text

### Components
- `.card` / `.experiment-card` - Card containers
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger` - Buttons
- `.tag`, `.tag-rounded` - Tags/labels
- `.input`, `.textarea` - Form inputs

### Spacing
- `.p-4`, `.p-6`, `.p-8` - Padding
- `.px-2`, `.px-3`, `.px-4`, `.px-6` - Horizontal padding
- `.py-2`, `.py-3`, `.py-4`, `.py-8` - Vertical padding
- `.mb-2`, `.mb-3`, `.mb-4`, `.mb-6` - Bottom margin
- `.mt-2`, `.mt-3`, `.mt-4`, `.mt-6` - Top margin
- `.gap-2`, `.gap-3`, `.gap-4` - Gap for flex/grid

### Display
- `.block`, `.flex`, `.grid`, `.hidden`

## Experiment-Specific CSS

Experiments should use one of these approaches:

### Option 1: Experiment-Level CSS (Recommended)
```
experiments/
  experiment-id/
    index.tsx
    styles.css    /* Isolated styles for this experiment */
```

Then import in the component:
```tsx
import './styles.css';
```

### Option 2: Namespace Scoping
```css
/* In global CSS or dedicated file */
[data-experiment-id="counter"] .counter-display {
  /* styles */
}
```

### Option 3: Shared Utilities (Simple Experiments)
Use global utility classes from `styles/global/` directly.

## Adding New Global Styles

1. Determine which module fits (base, typography, layout, components, animations)
2. Add CSS to the appropriate file
3. If creating a new component style module:
   - Create `styles/global/components/[name].css`
   - Import in `app/globals.css`

## Key Design Decisions

- **No Tailwind**: Pure CSS only, no utility framework
- **CSS Custom Properties**: All colors, shadows, transitions use variables
- **Font Variables**: Uses `--font-sans` and `--font-mono` from layout.tsx
- **Fast Animations**: Standardized on 150ms for snappy feel
- **Minimal Rounding**: Default 0px radius, only use 2px for buttons when needed
- **Precise Shadows**: Multi-layer shadows for depth without overdoing it
