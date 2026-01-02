# Video Brush Experiment Guide

The Video Brush experiment allows you to draw on top of video content using a canvas overlay.

---

## Features

- **Canvas Layering**: Video at z-index 1, canvas at z-index 2
- **Brush Controls**: Adjustable size and color
- **Touch Support**: Works on both desktop and mobile
- **Clear Function**: Clear canvas while keeping video visible
- **Responsive**: Canvas resizes to match container

---

## Static File Structure

```
public/
  videos/
    your-video.mp4        # Video files go here
  images/
    your-image.png         # Image files go here
```

**Access URLs**: Files in `public/` are served from root:
- Video: `/videos/your-video.mp4`
- Image: `/images/your-image.png`

---

## How to Use with Your Own Video

### Step 1: Prepare Your Video

Place your video file in `public/videos/`:

```bash
# Example structure
public/
  videos/
    my-video.mp4
```

### Step 2: Update the Component

Edit `experiments/video-brush/index.tsx` and update the video source:

**Current placeholder source:**
```tsx
<source src="/videos/your-video.mp4" type="video/mp4" />
```

**Replace with your video file:**
```tsx
<source src="/videos/my-video.mp4" type="video/mp4" />
```

### Step 3: Optional - Add Video Controls

If you want the video to be interactive, add the `controls` attribute:

```tsx
<video
  ref={videoRef}
  className="absolute top-0 left-0 w-full h-full"
  style={{ zIndex: 1 }}
  playsInline
  muted
  loop
  controls    // Add this for native video controls
>
  <source src="/videos/my-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

---

## Video Options

### Basic Video (Autoplay, Muted)
```tsx
<video
  ref={videoRef}
  className="absolute top-0 left-0 w-full h-full"
  style={{ zIndex: 1 }}
  autoPlay
  muted
  loop
>
  <source src="/videos/my-video.mp4" type="video/mp4" />
</video>
```

### Video with Controls
```tsx
<video
  ref={videoRef}
  className="absolute top-0 left-0 w-full h-full"
  style={{ zIndex: 1 }}
  controls
>
  <source src="/videos/my-video.mp4" type="video/mp4" />
</video>
```

### Video with Custom Controls
If you want custom controls, keep the video `autoPlay` and `muted`, and add your own button controls using the video ref:

```tsx
const togglePlay = () => {
  if (videoRef.current) {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
};
```

---

## Canvas Settings

The canvas automatically resizes to match the container. If you need a different size:

**Change the container height:**
```tsx
<div
  ref={containerRef}
  className="relative bg-gray-100 rounded border border-gray-300 mb-6"
  style={{ width: '100%', height: '600px' }}  {/* Changed from 400px */}
>
```

**Change the canvas z-index:**
```tsx
<canvas
  ref={canvasRef}
  className="absolute top-0 left-0 w-full h-full cursor-crosshair"
  style={{ zIndex: 10 }}  {/* Changed from 2 */}
  /* ... */
/>
```

---

## Brush Customization

### Add More Colors
```tsx
const colors = [
  '#3b82f6', // blue
  '#ef4444', // red
  '#22c55e', // green
  '#eab308', // yellow
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#ffffff', // white
  '#000000', // black
  '#f97316', // orange
  '#06b6d4', // cyan
];
```

### Change the Default Brush Size
```tsx
const [brushSize, setBrushSize] = useState(10);  // Changed from 5
```

### Change the Brush Shape
```tsx
ctx.lineCap = 'round';     // Options: 'butt', 'round', 'square'
ctx.lineJoin = 'round';    // Options: 'bevel', 'round', 'miter'
```

---

## Advanced Features

### Save Drawing to Image
Add a save button that exports the canvas as PNG:

```tsx
const saveDrawing = () => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'drawing.png';
  link.click();
};

// Add to JSX
<button onClick={saveDrawing} className="btn btn-primary">
  Save Drawing
</button>
```

### Undo Functionality
Track drawing history and implement undo:

```tsx
const [history, setHistory] = useState<ImageData[]>([]);

const saveState = () => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  setHistory([...history, imageData]);
};

const undo = () => {
  if (history.length === 0) return;
  const previousState = history[history.length - 1];
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  if (canvas && ctx) {
    ctx.putImageData(previousState, 0, 0);
    setHistory(history.slice(0, -1));
  }
};
```

---

## Troubleshooting

### Canvas Not Responding to Drawing

1. Check if the canvas has the correct z-index (should be higher than the video)
2. Verify that canvas events are attached (onMouseDown, onMouseMove, etc.)
3. Check the browser console for JavaScript errors

### Video Not Playing

1. Verify that the video file path is correct (`/videos/your-file.mp4`)
2. Check the browser console for 404 errors on the video source
3. Ensure the video format is supported by the browser

### Canvas Size Wrong

1. Check that the container dimensions match the expected size
2. Verify that the handleResize function is called
3. Check for CSS overrides that might affect sizing

### Drawing Position Offset

If drawing appears offset from the cursor, check:
- `canvas.getBoundingClientRect()` is called correctly
- Touch events calculate position relative to the canvas rect
- No CSS transforms are affecting canvas positioning

---

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|----------|--------|----------|--------|-------|
| Canvas 2D | ✅ | ✅ | ✅ | ✅ |
| Video playback | ✅ | ✅ | ✅ | ✅ |
| Touch events | ✅ | ✅ | ✅ | ✅ |
| Z-index layering | ✅ | ✅ | ✅ | ✅ |

---

## Performance Tips

1. **Optimize video**: Compress video before use to reduce file size
2. **Limit canvas size**: Larger canvases = more memory usage
3. **Batch operations**: Don't clear/redraw on every frame unless necessary
4. **Request animation frame**: For complex drawing, use `requestAnimationFrame`

---

## Example Video Sources

- **Sample videos**: [Pexels Videos](https://www.pexels.com/videos/) (free)
- **Background footage**: [Coverr](https://coverr.co/) (free)
- **Animated backgrounds**: [Mixkit](https://mixkit.co/free-stock-video/) (free)

---

## Notes

- The canvas clears when resized. If you want to preserve drawings, implement save/restore logic in handleResize.
- Z-index values can be adjusted as needed. Just ensure canvas z-index > video z-index.
- Touch support uses the `touches` array. Only the first touch is tracked for single-finger drawing.
- The brush uses `lineCap: 'round'` for smooth line endings.
- Static files (videos, images) should be placed in `public/` subdirectories for Next.js to serve them correctly.
