import React, { useState } from "react";
import '../MovieComp/MovieData.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import NoPosterImage from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/assets/no-poster.png"

function MovieDynamicRenderData(props) {
    const [cards, setCards] = useState([...props.dataPut.results]);

    const sliderSettings = {
        infinite: false,
        dots: false,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
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
                    arrows: false
                },
            },
        ],
    };

    return (
        <div className="movie-body">
            <div className="movie-body-container">
                <Slider {...sliderSettings}>
                    {cards.length > 0 && cards.map(elem => {
                        return (
                            <Link to={`${elem.id}/${props.datatypeval}`} >
                                <div key={elem.id} className="movie-body-container-trending-parent">
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
                            </Link>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default MovieDynamicRenderData;