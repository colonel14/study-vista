"use client";

import { useState } from "react";

import useVideoPopup from "@/hooks/useVideoPopup";
import { X } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

function VideoPopup() {
  const videoPopup = useVideoPopup();

  if (!videoPopup.isOpen) return null;

  return (
    <div className="video__popup">
      <div className="container">
        <div className="video__popup-in">
          <X
            className="video__popup-close"
            onClick={() => videoPopup.onClose()}
          />
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

export default VideoPopup;
