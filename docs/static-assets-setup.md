# Static Assets Setup

Complete! Your playground is now configured to serve static video and image files.

---

## Directory Structure Created

```
public/
  videos/                  # ✅ Created
    README.md             # Video usage instructions
  images/                  # ✅ Created
    README.md             # Image usage instructions
```

---

## How to Add Your Video

### 1. Place Your Video File

```bash
# Copy your video to the videos directory
cp /path/to/your-video.mp4 public/videos/my-video.mp4
```

### 2. Update the Experiment

Edit `experiments/video-brush/index.tsx`:

**Find this line:**
```tsx
<source src="/videos/your-video.mp4" type="video/mp4" />
```

**Replace with your file:**
```tsx
<source src="/videos/my-video.mp4" type="video/mp4" />
```

### 3. Done!

Your video will now be accessible at:
```
http://localhost:3000/videos/my-video.mp4
```

---

## How to Add Your Images

### 1. Place Your Image File

```bash
# Copy your image to the images directory
cp /path/to/your-image.png public/images/my-image.png
```

### 2. Use in Any Experiment

```tsx
<img
  src="/images/my-image.png"
  alt="Description of your image"
/>
```

Your image will be accessible at:
```
http://localhost:3000/images/my-image.png
```

---

## File Recommendations

### Video Files

- **Format**: MP4 with H.264 codec (best browser support)
- **Resolution**:
  - 720p: 5-10 MB (good balance)
  - 1080p: 10-20 MB (higher quality)
- **Audio**: Consider removing audio if not needed

### Image Files

- **Format**: WebP or PNG (best compression)
- **Size**:
  - Photographs: 100-500 KB
  - Icons: 5-50 KB
  - Thumbnails: 10-50 KB

---

## Accessing Files in Code

### Videos
```tsx
// ✓ Correct
<video>
  <source src="/videos/your-video.mp4" type="video/mp4" />
</video>

// ✗ Wrong (would look for public/videos/your-video.mp4 in root)
<video>
  <source src="videos/your-video.mp4" type="video/mp4" />
</video>
```

### Images
```tsx
// ✓ Correct
<img src="/images/your-image.png" alt="Description" />

// ✗ Wrong
<img src="images/your-image.png" alt="Description" />
```

---

## Why This Structure?

Next.js automatically serves files from `public/` directory:

| File Location | Access URL |
|-------------|-------------|
| `public/videos/video.mp4` | `/videos/video.mp4` |
| `public/images/photo.png` | `/images/photo.png` |
| `public/file.txt` | `/file.txt` |

---

## Documentation

- **Video Brush Guide**: `docs/video-brush-guide.md` - Complete guide for video-brush experiment
- **Videos README**: `public/videos/README.md` - Video usage instructions
- **Images README**: `public/images/README.md` - Image usage instructions

---

## Next Steps

1. Add your video file to `public/videos/`
2. Update `experiments/video-brush/index.tsx` with your video path
3. Run `npm run dev` to test
4. Start drawing on top of your video!

---

## Support

For more detailed information about using the video-brush experiment, see:
- `docs/video-brush-guide.md` - Advanced features, troubleshooting, browser compatibility
- `docs/creating-experiments.md` - How to create new experiments
- `AGENTS.md` - UI/UX guidelines for the project
