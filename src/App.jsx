import React from 'react';
import './App.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { MovieHeaderComp } from './Component/Header/HeaderComp'
import { DynamicBannerImgApiCall } from './CommonComponent/CommonApi'
import { MovieOneHeader } from './Component/movieHeaderComp/MovieHeader'
import { MovieTwoHeader } from './Component/movieHeaderComp/MovieHeader'
import { MovieThreeHeader } from './Component/movieHeaderComp/MovieHeader'
import  OnlyMoviesData  from './Component/MoviesPageComp/MoviesDataRender'
import  OnlyTvShowsData  from './Component/TvPageComp/TvShowsComp'
import { TopCastApiCall } from './CommonComponent/CommonApi'
import { WatchMovieTvData } from './CommonComponent/CommonApi'
import { WatchMovieTvDataVideos } from './CommonComponent/CommonApi'
import { OfficialVideosApiCall } from './CommonComponent/CommonApi'
import { SimilarVideosApiCall } from './CommonComponent/CommonApi'
import { RecommendationVideosApiCall } from './CommonComponent/CommonApi'
import SearchResultDataRender from './Component/SearchResultComp/SearchResult'
import MovieBuzzzFooter from './Component/FooterComp/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <MovieHeaderComp />
        <Routes>
            <Route exact path="/" element={[<DynamicBannerImgApiCall />, <MovieOneHeader />, <MovieTwoHeader />, <MovieThreeHeader />]}></Route>
            <Route exact path="/target-Movies" element={<OnlyMoviesData/>}> </Route>
            <Route exact path="/target-Tv-Shows" element={<OnlyTvShowsData/>}> </Route>
            <Route path="/:id/:type" element={[<WatchMovieTvData/>, <TopCastApiCall/>, <OfficialVideosApiCall/>, <SimilarVideosApiCall/>, <RecommendationVideosApiCall/>]} />
            <Route path="/search/:type" element={<SearchResultDataRender/>}></Route>
        </Routes>
        <MovieBuzzzFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
