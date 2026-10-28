"use client";

import { useState } from "react";
import { useYouTubeIframe } from "@/hooks/useYouTubeIframe";
import { siteConfig } from "@/data/siteConfig";

interface YouTubePlayerProps {
  videoId?: string;
  className?: string;
  /** Show a poster and load the iframe only after the click. */
  facade?: boolean;
  /** Replace the YouTube thumbnail with your own 16:9 photo. */
  posterSrc?: string;
}

export function YouTubePlayer({
  videoId = siteConfig.youtubeVideoId,
  className = "",
  facade = false,
  posterSrc,
}: YouTubePlayerProps) {
  return facade ? (
    <FacadePlayer videoId={videoId} className={className} posterSrc={posterSrc} />
  ) : (
    <LivePlayer videoId={videoId} className={className} />
  );
}

function LivePlayer({
  videoId,
  className,
}: {
  videoId: string;
  className: string;
}) {
  const { containerRef } = useYouTubeIframe(videoId);

  return (
    <div
      className={`relative w-full h-full min-h-[250px] sm:min-h-[320px] md:min-h-[380px] aspect-video rounded-xl overflow-hidden bg-[#0B0C0E] border border-ink-line [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0 [&_iframe]:block ${className}`.trim()}
    >
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}

function FacadePlayer({
  videoId,
  className,
  posterSrc,
}: {
  videoId: string;
  className: string;
  posterSrc?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [src, setSrc] = useState(
    posterSrc ?? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
  );

  const fallback = () => {
    if (!posterSrc) setSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
  };

  return (
    <div
      className={`relative w-full aspect-video overflow-hidden bg-[#0B0C0E] ${className}`.trim()}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
          title="Texas Mobile Mechanics video"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          className="group absolute inset-0 block h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand-red"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            fetchPriority="high"
            onError={fallback}
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth <= 120) fallback();
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/70 via-[#0B0C0E]/10 to-transparent"
          />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-red shadow-[0_12px_32px_-8px_rgba(11,12,14,0.6)] transition-transform duration-200 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          >
            <span className="ml-1 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-white" />
          </span>
        </button>
      )}
    </div>
  );
}