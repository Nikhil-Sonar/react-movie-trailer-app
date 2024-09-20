import React from 'react';
import './App.scss'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieHeaderComp } from './Component/Header/HeaderComp'
import { DynamicBannerImgApiCall } from './CommonComponent/CommonApi'
import { MovieOneHeader } from './Component/movieHeaderComp/MovieHeader'
import { MovieTwoHeader } from './Component/movieHeaderComp/MovieHeader'
import { MovieThreeHeader } from './Component/movieHeaderComp/MovieHeader'
import OnlyMoviesData from './Component/MoviesPageComp/MoviesDataRender'
import OnlyTvShowsData from './Component/TvPageComp/TvShowsComp'
import { UniqueCommonComponent } from './CommonComponent/CommonApi'
import SearchResultDataRender from './Component/SearchResultComp/SearchResult'
import MovieBuzzzFooter from './Component/FooterComp/Footer'

function App() {
  return (
    <div>
      <Router>
        <MovieHeaderComp />
        <Routes>
          <Route exact path="/" element={[<DynamicBannerImgApiCall />, <MovieOneHeader />, <MovieTwoHeader />, <MovieThreeHeader />]}></Route>
          <Route exact path="/target-Movies" element={<OnlyMoviesData />}> </Route>
          <Route exact path="/target-Tv-Shows" element={<OnlyTvShowsData />}> </Route>
          <Route path="/:id/:type" element={[<UniqueCommonComponent/>]} />
          <Route path="/search/:type" element={<SearchResultDataRender />}></Route>
        </Routes>
        <MovieBuzzzFooter />
      </Router>
    </div>
  )
}

export default App
