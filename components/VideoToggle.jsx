"use client";

import useVideoPopup from "@/hooks/useVideoPopup";
import Image from "next/image";

function VideoToggle() {
  const videoPopup = useVideoPopup();

  return (
    <button
      className="video__btn"
      aria-label="watch video"
      onClick={() => videoPopup.onOpen()}
    >
      <span className="video__btn-icon relative">
        <Image src="/play-icon.svg" width={20} height={24} alt="play icon" />
      </span>
      Watch Video
    </button>
  );
}

export default VideoToggle;
