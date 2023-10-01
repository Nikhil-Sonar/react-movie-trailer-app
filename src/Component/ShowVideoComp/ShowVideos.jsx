

import React from "react";
import YouTube from 'react-youtube';

import "../ShowVideoComp/ShowVideo.scss";


const VideoPopup = ({ showVideo, setShowVideo, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShowVideo(false);
        setVideoId(null);
    };

    return (
        <div className={`videoPopup ${showVideo ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <YouTube className="video-view-adjust"
                    videoId={videoId == null ? 'jwjdan' : videoId}
                    controls={true}
                    width={"100%"}
                    height={"100%"}
                    playing={true}
                />
            </div>
        </div>
    );
};

export default VideoPopup;