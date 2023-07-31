import React, { useState } from "react";
import img1 from "./assest/img1.png";
import img2 from "./assest/img2.png";
import img3 from "./assest/img3.png";
import img4 from "./assest/img4.png";
import video from "./assest/video1.mp4";

const ImagesTab = () => {
  const tabData = [
    {
      tabBtn: img1,
      tabContent: video,
    },
    {
      tabBtn: img2,
      tabContent: "",
    },
    {
      tabBtn: img3,
      tabContent: "",
    },
    {
      tabBtn: img4,
      tabContent: "",
    },
  ];
  const [activeVideo, setVideo] = useState(false);
  const [activeTab, setActiveTab] = useState(tabData[0]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          {tabData.map((obj, i) => (
            <div
              key={i}
              onClick={() => {
                setActiveTab(obj);
                setVideo(false);
              }}
            >
              <img className="w-100" src={obj.tabBtn} alt="img" />
            </div>
          ))}
        </div>
        <div className="col-5">
          {activeTab.tabContent ? (
            <div>
              {activeVideo ? (
                <video
                  autoPlay
                  muted
                  controls
                  className="w-100"
                  src={activeTab.tabContent}
                ></video>
              ) : (
                <img
                  onClick={() => setVideo(true)}
                  className="w-100"
                  src={activeTab.tabBtn}
                  alt="img"
                />
              )}
            </div>
          ) : (
            <img className="w-100" src={activeTab.tabBtn} alt="img" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagesTab;
