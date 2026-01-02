# Images Directory

This directory stores image files for experiments.

## Usage

Place your image files here. They will be accessible at `/images/your-file.png`.

## Example

To use an image in an experiment:

```tsx
<img
  src="/images/my-image.png"
  alt="Description of image"
/>
```

## File Size Recommendations

- **Photographs**: 100-500 KB (compress for web)
- **Icons**: 5-50 KB (PNG for transparency)
- **Thumbnails**: 10-50 KB (smaller sizes)
- **Format**: WebP or PNG for best compression

## Supported Formats

Next.js static serving supports:
- `.png` - Best for images with transparency
- `.jpg` / `.jpeg` - Best for photographs
- `.webp` - Modern format with excellent compression
- `.svg` - Vector graphics, scale infinitely
- `.gif` - Simple animations

## Free Image Sources

- [Unsplash](https://unsplash.com/) - High-quality photos
- [Pexels](https://pexels.com/) - Free stock images
- [Picsum](https://picsum.photos/) - Placeholder images
- [Iconify](https://iconify.design/) - Icons in any format
