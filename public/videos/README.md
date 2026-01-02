# Videos Directory

This directory stores video files for experiments.

## Usage

Place your video files here. They will be accessible at `/videos/your-file.mp4`.

## Example

To use a video in the video-brush experiment:

1. Save your video here: `public/videos/my-video.mp4`
2. Update the experiment component to reference it:

```tsx
<video>
  <source src="/videos/my-video.mp4" type="video/mp4" />
</video>
```

## File Size Recommendations

- **720p**: 5-10 MB (good for web)
- **1080p**: 10-20 MB (higher quality)
- **Format**: MP4 with H.264 codec for best browser support

## Supported Formats

Next.js static serving supports:
- `.mp4` - Most widely supported
- `.webm` - Open format, good compression
- `.mov` - Apple QuickTime format

## Free Video Sources

- [Pexels Videos](https://www.pexels.com/videos/) - Free stock videos
- [Coverr](https://coverr.co/) - Background footage
- [Mixkit](https://mixkit.co/free-stock-video/) - Animated backgrounds
