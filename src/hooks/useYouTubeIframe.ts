"use client";

import { useEffect, useId, useRef } from "react";
import { siteConfig } from "@/data/siteConfig";

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement | string,
        options: {
          width?: string;
          height?: string;
          videoId: string;
          playerVars?: Record<string, number | string>;
        }
      ) => { destroy?: () => void };
    };
    onYouTubeIframeAPIReady?: () => void;
    _tmmYtCallbacks?: Array<() => void>;
  }
}

export function useYouTubeIframe(videoId: string = siteConfig.youtubeVideoId) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reactId = useId();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let playerInstance: { destroy?: () => void } | null = null;
    let isMounted = true;

    const initPlayer = () => {
      if (!isMounted || !containerRef.current || !window.YT?.Player) return;
      playerInstance = new window.YT.Player(containerRef.current, {
        width: "100%",
        height: "100%",
        videoId,
        playerVars: {
          playsinline: 1,
          rel: 0,
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window._tmmYtCallbacks = window._tmmYtCallbacks || [];
      window._tmmYtCallbacks.push(initPlayer);

      if (!window.onYouTubeIframeAPIReady) {
        window.onYouTubeIframeAPIReady = () => {
          const cbs = window._tmmYtCallbacks || [];
          window._tmmYtCallbacks = [];
          cbs.forEach((cb) => cb());
        };
      }

      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        if (firstScriptTag?.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
          document.head.appendChild(tag);
        }
      }
    }

    return () => {
      isMounted = false;
      if (playerInstance && typeof playerInstance.destroy === "function") {
        try {
          playerInstance.destroy();
        } catch {
          // Ignore cleanup errors
        }
      }
    };
  }, [videoId, reactId]);

  return { containerRef };
}
