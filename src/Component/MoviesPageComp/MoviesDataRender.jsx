import React, { useState, useEffect } from "react";
import axios from "axios";
import '../MoviesPageComp/MoviesDataRender.scss'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavLink } from "react-router-dom";
import SkeletonLoader from "../Skelton/Skelton";
import NoPosterImage from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/assets/no-poster.png"

function OnlyMoviesData() {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Moviepage, setPage] = useState(1);

    const moviesscrollDataRender = (props) => {
        const reqObj = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/discover/movie?page=${props}`,
            params: { language: 'en-US' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
            }
        };


        setIsLoading(true)
        axios.request(reqObj)
            .then(function (response) {
                setIsLoading(false)
                if (response.status == 200) {
                    setPage(prevPage => prevPage + 1);
                    setCards(preVal => [...preVal, ...response.data.results]);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    const handleScroll = () => {
        if ((window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) && isLoading) {
            return;
        } else {
            return (
                moviesscrollDataRender(Moviepage)
            )
        }
    };

    useEffect(() => {
        return (
            moviesscrollDataRender(Moviepage)
        )
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    if(!isLoading && Moviepage == "1"){
        return (
            <>
              <SkeletonLoader value={ {id:20, scrollTop:"Y"}}/>
            </>
        )
    }

    return (
        <div className="movies-parent">
            <div className="movie-body-container only-movies-Render">
                {cards.length > 0 && cards.map(elem => {
                    return (
                        <NavLink to={`/${elem.id}/${"movie"}`} >
                            <div key={elem.id} className="movie-body-container-trending-parent movies-card-alignment">
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
                                    <div className="movie-body-container-trending-parent-card-dicrip-parent only-movies-discption">
                                        <span className="movie-body-container-trending-parent-card-type-movie-Name">{elem.title || elem.name}</span>
                                        <span className="movie-body-container-trending-parent-card-dicrip">{elem.release_date || elem.first_air_date}</span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default OnlyMoviesData;