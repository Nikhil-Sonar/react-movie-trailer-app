import React, { useState } from "react";
import "../WatchShowsData/WatchShows.scss"
import "react-circular-progressbar/dist/styles.css";
import VideoPopup from "../ShowVideoComp/ShowVideos"
import NoPosterImage from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/assets/no-poster.png"

function WatchShowsRender(props) {
    const [showVideo, setShowVideo] = useState(false);
    const [videoId, setVideoId] = useState(null);


    if (props.dataPut != "") {
        const Hours = Math.floor((props.dataPut.runtime || `${(props.dataPut.episode_run_time.length > 0 ? props.dataPut.episode_run_time[0] : props.dataPut.episode_run_time )}`) /60);
        const minutes = (props.dataPut.runtime || props.dataPut.episode_run_time) % 60;
        const calHrMin = `${Hours}h ${(minutes == NaN) ? "0" : minutes}m`
        return (
            <>
            <div className="detailsBanner">
                <div className="backdrop-img">
                    <span className=" lazy-load-image-background blur lazy-load-image-loaded">
                        <img className="" alt="" src={`https://image.tmdb.org/t/p/original/${props.dataPut.backdrop_path || ""}`} />
                    </span>
                </div>
                <div className="opacity-layer-none">
                </div>
                <div className="contentWrapper adjust-padding">
                    <div className="content">
                        <div className="left">
                            <span classNameName=" lazy-load-image-background blur lazy-load-image-loaded" >
                                <img className="posterImg" alt="" src={props.dataPut.poster_path == null ? NoPosterImage : `https://image.tmdb.org/t/p/original/${props.dataPut.poster_path || ""}`} />
                            </span>
                        </div>
                        <div className="right">
                            <div className="title">{props.dataPut.name || props.dataPut.original_title}</div>
                            <div className="subtitle">{props.dataPut.tagline || ""}</div>
                            <div className="genres">
                                {
                                    props.dataPut.genres.map(item => {
                                    return(
                                        <div className="genre">{item.name || ""}</div>
                                    )
                                   }) 
                                }
                            </div>
                            <div className="row">
                                <div className="circleRating">
                                    <svg className="CircularProgressbar " viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                                        <path className="CircularProgressbar-trail" d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" stroke-width="8" fill-opacity="0" ></path>
                                        <path className={`CircularProgressbar-path ${props.dataPut.vote_average < 5 ? "red" : props.dataPut.vote_average < 7 ? "orange" : "green"}`} d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" stroke-width="8" fill-opacity="0" ></path>
                                        <text className="CircularProgressbar-text" x="50" y="50">{parseFloat(props.dataPut.vote_average).toFixed(1) || ""}</text>
                                    </svg>
                                </div>
                                <div className="playbtn"onClick={() => {
                                  setShowVideo(true), setVideoId(JSON.parse(localStorage.getItem("playKey")))
                                }}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" space="preserve">
                                        <polygon className="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 ">
                                        </polygon>
                                        <circle className="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                                    </svg>
                                    <span className="text watch-trailer-text">Watch Trailer</span>
                                </div>
                            </div>
                            <div className="overview">
                                <div className="heading">Overview</div>
                                <div className="description">{props.dataPut.overview || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat voluptatem qui vel neque deserunt dolor quasi, beatae veritatis, necessitatibus, quas doloremque ipsa eum sapiente quia libero suscipit. Facere officia doloremque ad nulla veniam voluptatum vel quos qui explicabo saepe. necessitatibus, quas doloremque ipsa eum sapiente quia libero suscipit. Facere officia doloremque ad nulla veniam voluptatum vel quos qui explicabo saepe"}</div>
                            </div>
                            <div className="info">
                                <div className="infoItem">
                                    <span className="text bold">Status: </span>
                                    <span className="text">{props.dataPut.status}</span>
                                </div>
                                <div className="infoItem">
                                    <span className="text bold">Release Date: </span>
                                    <span className="text">{props.dataPut.release_date || props.dataPut.first_air_date}</span>
                                </div>
                                <div className="infoItem">
                                    <span className="text bold">Runtime: </span>
                                    <span className="text">{calHrMin || `${props.dataPut.episode_run_time[0]}m`}</span>
                                </div>
                            </div>
                            <div className="info">
                                <span className="text bold">Director: </span>
                                <span className="text">
                                    <span>Steven Caple Jr.</span>
                                </span>
                            </div>
                            <div className="info">
                                <span className="text bold">Writer: </span>
                                <span className="text">
                                    <span>Joby Harold, </span>
                                    <span>Joby Harold, </span>
                                    <span>Erich Hoeber, </span>
                                    <span>Jon Hoeber, </span>
                                    <span>Darnell Metayer, </span>
                                    <span>Josh Peters</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopup
                showVideo={showVideo}
                setShowVideo={setShowVideo}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </>
        )
    }
}

export default WatchShowsRender;