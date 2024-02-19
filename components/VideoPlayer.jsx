"use client";
import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

function VideoPlayer() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className={cn("app__video", playVideo && "play")}>
      <video
        width="320"
        height="240"
        controls={playVideo}
        loop="no"
        ref={vidRef}
        onPause={() => setPlayVideo(false)}
      >
        <source src="/videos/graduation-video.mp4" type="video/mp4" />
        <track
          src="/videos/graduation-video.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      <div className="app__video-controls">
        <div onClick={handleVideo}>
          {playVideo ? (
            <Pause className="app__video-icon" />
          ) : (
            <Play className="app__video-icon" />
          )}
        </div>
      </div>
      <div className="app__video-overlay"></div>
      <div className="app__video-thumbnail">
        <Image
          src="/video-thumbnail.jpg"
          fill
          alt="video thumbnail"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
