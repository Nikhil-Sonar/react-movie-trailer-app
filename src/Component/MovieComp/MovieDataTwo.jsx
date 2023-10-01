import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavLink } from "react-router-dom";
import NoPosterImage from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/assets/no-poster.png"

function WhatsPopularMovieRender(props) {
    const [cardsPopular, setCardsPopular] = useState([...props.dataPut.results]);

    const sliderSettingsPopular = {
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
                    arrows:false,
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
                    arrows:false,
                },
            },
        ],
    };

    return (
        <div className="movie-body">
            <div className="movie-body-container-two">
                <Slider {...sliderSettingsPopular}>
                    {cardsPopular.length > 0 && cardsPopular.map(elem => {
                        return (
                            <NavLink to={`/${elem.id}/${props.datatypeval}`} >
                                <div className="movie-body-container-popular-parent">
                                    <div className="movie-body-container-popular-parent-card">
                                        <div className="movie-body-container-popular-parent-card-banner">
                                            <img className="movie-body-container-popular-parent-card-banner-img" src={elem.poster_path == null ? NoPosterImage : `https://image.tmdb.org/t/p/original${elem.poster_path}`}></img>
                                        </div>
                                        <div className={`movie-body-container-popular-parent-card-rating`}>
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
                                        <div className="movie-body-container-popular-parent-card-type">
                                        </div>
                                        <div className="movie-body-container-popular-parent-card-dicrip-parent">
                                            <span className="movie-body-container-popular-parent-card-type-movie-Name">{elem.title || elem.name}</span>
                                            <span className="movie-body-container-popular-parent-card-dicrip">{elem.first_air_date || elem.release_date}</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default WhatsPopularMovieRender;