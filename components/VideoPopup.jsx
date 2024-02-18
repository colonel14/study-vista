"use client";

import { useState } from "react";
import Video from "next-video";

import myVideo from "/videos/graduation-video.mp4";
import useVideoPopup from "@/hooks/useVideoPopup";
import { X } from "lucide-react";

function VideoPopup() {
  const videoPopup = useVideoPopup();
  //   const [isOpen, setIsOpen] = useState(videoPopup.isOpen);

  if (!videoPopup.isOpen) return null;

  return (
    <div className="video__popup">
      <div className="container">
        <div className="video__popup-in">
          <X
            className="video__popup-close"
            onClick={() => videoPopup.onClose()}
          />
          <Video src={myVideo} className="app__video" />
        </div>
      </div>
    </div>
  );
}

export default VideoPopup;
