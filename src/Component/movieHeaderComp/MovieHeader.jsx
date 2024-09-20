import React, { useState } from "react";
import { TvShowApiCall } from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/CommonComponent/CommonApi"
import { TrendingApiCall } from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/CommonComponent/CommonApi"
import { WhatsPopularApiCall } from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/CommonComponent/CommonApi"
import { TvShowRatedApiCall } from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/CommonComponent/CommonApi"
import { TopRatedApiCall } from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/CommonComponent/CommonApi"



// import MovieDynamicRenderData from "../MovieComp/MovieData"
export function MovieOneHeader() {
    const [showCards, setShowCards] = useState({
        countOneColor: 'Common-trending-Btn',
        countTwoColor: 'background-Color-Change',
        isWeek: false,
    });

    const ShowseventCounter = () => {
        setShowCards(prevState => ({
            ...prevState,
            countOneColor: 'background-Color-Change',
            countTwoColor: 'Common-trending-Btn',
            isWeek: true,
        }))
    }
    const ShowsEventCounterDay = () => {
        setShowCards(prevState => ({
            ...prevState,
            countOneColor: 'Common-trending-Btn',
            countTwoColor: 'background-Color-Change',
            isWeek: false,
        }))
    }

    return (
        <>
            <div className="movie-body">
                <div className="movie-body-container-header">
                    <div className="movie-body-container-header-left">Trending</div>
                    <div className="movie-body-container-header-right">
                        <div className="movie-body-container-header-right-item">
                            <div className="movie-body-container-header-right-item-card">
                                <span className={`movie-body-container-header-right-item-day ${showCards.countOneColor}`}
                                    onClick={ShowsEventCounterDay}>Day</span>
                                <span className={`movie-body-container-header-right-item-week ${showCards.countTwoColor}`}
                                    onClick={ShowseventCounter}>Week</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showCards.isWeek ? <TvShowApiCall /> : <TrendingApiCall />}
        </>
    )
}

export function MovieTwoHeader() {
    const [showCardsTwo, setShowCardsTwo] = useState({
        countOneColor: 'Common-trending-Btn',
        countTwoColor: 'background-Color-Change',
        isWeek: false,
    });

    const ShowseventCounterTvShows = () => {
        setShowCardsTwo(prevState => ({
            ...prevState,
            countOneColor: 'background-Color-Change',
            countTwoColor: 'Common-trending-Btn',
            isWeek: true,
        }))
    }
    const ShowsEventCounterMovies = () => {
        setShowCardsTwo(prevState => ({
            ...prevState,
            countOneColor: 'Common-trending-Btn',
            countTwoColor: 'background-Color-Change',
            isWeek: false,
        }))
    }

    return (
        <>
            <div className="movie-body">
                <div className="movie-body-container-header-popular">
                    <div className="movie-body-container-header-popular-left">Whats Popular</div>
                    <div className="movie-body-container-header-popular-right">
                        <div className="movie-body-container-header-popular-right-item">
                            <div className="movie-body-container-header-popular-right-item-card">
                                <span className={`movie-body-container-header-popular-right-item-day ${showCardsTwo.countOneColor}`}
                                    onClick={ShowsEventCounterMovies}
                                >Movies</span>
                                <span className={`movie-body-container-header-popular-right-item-week ${showCardsTwo.countTwoColor}`}
                                    onClick={ShowseventCounterTvShows}
                                >TV Shows</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showCardsTwo.isWeek ? <TvShowApiCall /> : <WhatsPopularApiCall />}
        </>
    )
}

export function MovieThreeHeader() {
    const [showCardsTwo, setShowCardsThree] = useState({
        countOneColor: 'Common-trending-Btn',
        countTwoColor: 'background-Color-Change',
        isWeek: false,
    });

    const ShowseventCounterTvShows = () => {
        setShowCardsThree(prevState => ({
            ...prevState,
            countOneColor: 'background-Color-Change',
            countTwoColor: 'Common-trending-Btn',
            isWeek: true,
        }))
    }
    const ShowsEventCounterMovies = () => {
        setShowCardsThree(prevState => ({
            ...prevState,
            countOneColor: 'Common-trending-Btn',
            countTwoColor: 'background-Color-Change',
            isWeek: false,
        }))
    }

    return (
        <>
            <div className="movie-body">
                <div className="movie-body-container-header-Rated">
                    <div className="movie-body-container-header-Rated-left">Top Rated</div>
                    <div className="movie-body-container-header-Rated-right">
                        <div className="movie-body-container-header-Rated-right-item">
                            <div className="movie-body-container-header-Rated-right-item-card">
                                <span className={`movie-body-container-header-Rated-right-item-day ${showCardsTwo.countOneColor}`}
                                    onClick={ShowsEventCounterMovies}
                                >Movies</span>
                                <span className={`movie-body-container-header-Rated-right-item-week ${showCardsTwo.countTwoColor}`}
                                    onClick={ShowseventCounterTvShows}
                                >TV Shows</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showCardsTwo.isWeek ? <TvShowRatedApiCall /> : <TopRatedApiCall />}
        </>
    )
}