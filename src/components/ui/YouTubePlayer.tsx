"use client";

import { useYouTubeIframe } from "@/hooks/useYouTubeIframe";
import { siteConfig } from "@/data/siteConfig";

interface YouTubePlayerProps {
  videoId?: string;
  className?: string;
}

export function YouTubePlayer({
  videoId = siteConfig.youtubeVideoId,
  className = "",
}: YouTubePlayerProps) {
  const { containerRef } = useYouTubeIframe(videoId);

  return (
    <div
      className={`relative aspect-video rounded-[10px] overflow-hidden bg-[#0B0C0E] border border-ink-line [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0 [&_iframe]:block ${className}`.trim()}
    >
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
