import Video from "next-video";

import myVideo from "/videos/graduation-video.mp4";
function HomeVideo() {
  return (
    <div className="home__video">
      <div className="container">
        <Video src={myVideo} className="app__video" />
      </div>
    </div>
  );
}

export default HomeVideo;
