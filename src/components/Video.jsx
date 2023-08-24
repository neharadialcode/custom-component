import React, { useRef, useState } from "react";
import video from "../components/assest/video1.mp4";
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

const Video = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    const progressPercent = (currentTime / duration) * 100;
    setProgress(progressPercent);
    setCurrentTime(currentTime);
    setDuration(duration);
  };

  const playVideo = () => {
    videoRef.current.play();
  };
  return (
    <div>
      <div className="video-container">
        <div className="row mx-0">
          <div className="col-4">
            <video
              ref={videoRef}
              className="video"
              onTimeUpdate={handleTimeUpdate}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="btn btn-warning" onClick={playVideo}>
          Play
        </div>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div>
          <p>Current Time: {formatTime(currentTime)}</p>
          <p>Total Time: {formatTime(duration)}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
