import React, { useState, useEffect } from "react";
import '../OfficialVideosComp/OfficialVideos.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoPopup from "../ShowVideoComp/ShowVideos"

function OfficialVideosDataRender(props) {
    const [OfficialCount, SetOfficialCount] = useState([...props.dataPut.results]);
    const [showVideo, setShowVideo] = useState(false);
    const [videoId, setVideoId] = useState(null);
    localStorage.setItem("playKey", OfficialCount[0] == undefined ? "" : JSON.stringify(OfficialCount[0].key));
    const OfficialVideossliderSettings = {
        infinite: false,
        dots: false,
        arrows: false,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    speed: 1200,
                    arrows: false,
                },
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 1200,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 1200,
                    arrows:false
                },
            },
        ],
    };

    if (OfficialCount.length > 0) {
        return (
            <React.Fragment>
                <div className="videosSection">
                    <div className="contentWrapper-OfficialVideos">
                        <div className="sectionHeading">Official Videos</div>
                        <div className="videos">
                            <Slider {...OfficialVideossliderSettings}>
                                {OfficialCount.length > 0 && OfficialCount.map(item => {
                                    return (
                                        <div keyData={item.id} className="videoItem" onClick={() => {
                                            setShowVideo(true), setVideoId(item.key)
                                          }}>
                                            <div className="videoThumbnail">
                                                <span className=" lazy-load-image-background blur lazy-load-image-loaded">
                                                    <img className="" alt="" src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`} />
                                                </span>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" space="preserve">
                                                    <polygon className="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 ">

                                                    </polygon>
                                                    <circle className="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                                                </svg>
                                            </div>
                                            <div className="videoTitle">{item.name}</div>
                                        </div>
                                    )
                                })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
                <VideoPopup
                    showVideo={showVideo}
                    setShowVideo={setShowVideo}
                    videoId={videoId}
                    setVideoId={setVideoId}
                />
            </React.Fragment>
        )
    }
}

export default OfficialVideosDataRender;