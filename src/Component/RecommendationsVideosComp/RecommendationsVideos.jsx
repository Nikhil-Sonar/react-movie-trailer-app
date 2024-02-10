import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../MovieComp/MovieData.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import NoPosterImage from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/assets/no-poster.png"
// import WatchMovieTvData from '../MoviesPageComp/MoviesDataRender'

function RecommendationVideosRenderData(props) {
    const [Recommendationcards, SimilarSetCards] = useState([...props.dataPut.results]);

    const RecommendationSliderSettings = {
        infinite: false,
        dots: false,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                },
            },
        ],
    };

    if(Recommendationcards != 0){
        return (
            <>
                <div className="movie-body">
                    <div className="movie-body-container-header-popular">
                        <div className="movie-body-container-header-popular-left">Recommendations</div>
                    </div>
                </div>
                <div className="movie-body">
                    <div className="movie-body-container">
                        <Slider {...RecommendationSliderSettings}>
                            {Recommendationcards.length > 0 && Recommendationcards.map(elem => {
                                return (
                                    <NavLink to={`/${elem.id}/${props.datatypeval}`}>
                                        <div onClick={<moviedataApiCall />} className="movie-body-container-trending-parent">
                                            <div className="movie-body-container-trending-parent-card">
                                                <div className="movie-body-container-trending-parent-card-banner">
                                                    <img className="movie-body-container-trending-parent-card-banner-img" src={elem.poster_path == null ? NoPosterImage : `https://image.tmdb.org/t/p/original${elem.poster_path}`}></img>
                                                </div>
                                                <div className={`movie-body-container-trending-parent-card-rating`}>
                                                    <CircularProgressbar
                                                        value={parseFloat(elem.vote_average).toFixed(1)}
                                                        maxValue={10}
                                                        text={parseFloat(elem.vote_average).toFixed(1)}
                                                        styles={buildStyles({
                                                            pathColor:
                                                                elem.vote_average < 5 ? "red" : elem.vote_average < 7 ? "orange" : "green",
                                                        })}
                                                    />
                                                </div>
                                                <div className="movie-body-container-trending-parent-card-type">
                                                </div>
                                                <div className="movie-body-container-trending-parent-card-dicrip-parent">
                                                    <span className="movie-body-container-trending-parent-card-type-movie-Name">{elem.title || elem.name}</span>
                                                    <span className="movie-body-container-trending-parent-card-dicrip">{elem.release_date || elem.first_air_date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </>
        )
    }else{
      return(
        <div></div>
      )
    }
    
}

export default RecommendationVideosRenderData;