import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import MovieDynamicRenderData from '../Component/MovieComp/MovieData'
import WhatsPopularMovieRender from '../Component/MovieComp/MovieDataTwo'
import TopRatedDataRender from '../Component/MovieComp/MovieDataThree'
import BannerdynamicComp from '../Component/BannerComp/BannerComponent'
import WatchShowsRender  from '../Component/WatchShowsData/WatchShows'
import TopCastDataRender  from '../Component/TopCastComp/TopCast'
import OfficialVideosDataRender  from '../Component/OfficialVideosComp/OfficialVideos'
import SimilarVideosRenderData  from '../Component/SimilarVideosComp/SimilarVideos'
import RecommendationVideosRenderData  from '../Component/RecommendationsVideosComp/RecommendationsVideos'
import bannerImage from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/assets/BannerImage2.jpg";

export function DynamicBannerImgApiCall() {
    const [CountArrayDynamicBanner, SetCountArrayDynamicBanner] = useState([]);
    const { type, id } = useParams();

    const reqObj = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/movie_id/images',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
      };

    useEffect(() => {
        try {
            axios.request(reqObj)
                .then(function (response) {
                    if (response.status == 200) {
                        const dataArrayObj = response.data;
                        SetCountArrayDynamicBanner(dataArrayObj);
                    }
                })
                .catch(function (error) {
                    console.log(error)
                });
        } catch (error) {
               console.log(error)
        }
    }, [])

    if ((CountArrayDynamicBanner != "") && (CountArrayDynamicBanner != undefined)) {
        return (
            <BannerdynamicComp dataDynamicImage={CountArrayDynamicBanner} />
        )
    }else{
        return (
            <BannerdynamicComp dataDynamicImage={bannerImage} />
        )
    }
}

export function TrendingApiCall() {
    const [CountArray, SetCountArray] = useState([])
    const reqObj = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day',
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
    };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArray(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, [])

    if ((CountArray != "") && (CountArray != undefined)) {
        return (
            <MovieDynamicRenderData dataPut={CountArray} datatypeval={'movie'} />
        )
    }
}

export function WhatsPopularApiCall() {
    const [CountArrayPopular, SetCountArrayPopular] = useState([])
    const reqObj = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing',
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
    };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArrayPopular(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, [])

    if ((CountArrayPopular != "") && (CountArrayPopular != undefined)) {
        return (
            <WhatsPopularMovieRender dataPut={CountArrayPopular} datatypeval={'movie'}/>
        )
    }
}

export function TopRatedApiCall() {
    const [CountArrayTopRated, SetCountArrayTopRated] = useState([])
    const reqObj = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/tv/top_rated',
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
    };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArrayTopRated(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if ((CountArrayTopRated != "") && (CountArrayTopRated != undefined)) {
        return (
            <TopRatedDataRender dataTopRated={CountArrayTopRated} datatypeval={'tv'}/>
        )
    }
}

export function TvShowApiCall() {
    const [CountArrayTvShows, SetCountArrayTvShows] = useState([])

    const reqObj = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/tv',
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s',
        }
    };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArrayTvShows(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if ((CountArrayTvShows != "") && (CountArrayTvShows != undefined)) {
        return (
            <MovieDynamicRenderData dataPut={CountArrayTvShows} datatypeval={'tv'} />
        )
    }
}

export function TvShowRatedApiCall() {
    const [CountArrayTvShows, SetCountArrayTvShows] = useState([])

    const reqObj = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
      };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArrayTvShows(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if ((CountArrayTvShows != "") && (CountArrayTvShows != undefined)) {
        return (
            <MovieDynamicRenderData dataPut={CountArrayTvShows} datatypeval={'movie'}/> 
        )
    }
}

export function WatchMovieTvDataVideos() {
    const [CountArrayTvShows, SetCountArrayTvShows] = useState([]);
    const dataIdFetch = window.location.href.split("/")[4];
    const dataTypeFetch = window.location.href.split("/")[3];

    const reqObj = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${dataTypeFetch}/${dataIdFetch || 667538}/videos`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
      };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArrayTvShows(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);
}

export function WatchMovieTvData() {
    const dataTypeFetch = window.location.href.split("/")[4];
    const dataIdFetch = window.location.href.split("/")[3];
    const [CountArrayTvShows, SetCountArrayTvShows] = useState([])

    const reqObj = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${dataTypeFetch}/${dataIdFetch || 667538}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
      };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArrayTvShows(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if ((CountArrayTvShows != "") && (CountArrayTvShows != undefined)) {
        return (
            <WatchShowsRender dataPut={CountArrayTvShows} />
        )
    }
}

export function TopCastApiCall() {
    const dataTypeFetch = window.location.href.split("/")[4];
    const dataIdFetch = window.location.href.split("/")[3];
    const [CountArrayTvShows, SetCountArrayTvShows] = useState([])

    const reqObj = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${dataTypeFetch}/${dataIdFetch || 667538}/${"credits"}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
      };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArrayTvShows(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if ((CountArrayTvShows != "") && (CountArrayTvShows != undefined)) {
        return (
            <TopCastDataRender dataPut={CountArrayTvShows} />
        )
    }
}

export function OfficialVideosApiCall() {
    const dataTypeFetch = window.location.href.split("/")[4];
    const dataIdFetch = window.location.href.split("/")[3];
    const [CountArrayOfficialVideos, SetCountArrayOfficialVideos] = useState([])

    const reqObj = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${dataTypeFetch}/${dataIdFetch || 667538}/${"videos"}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
      };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArrayOfficialVideos(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if ((CountArrayOfficialVideos != "") && (CountArrayOfficialVideos != undefined)) {
        return (
            <OfficialVideosDataRender dataPut={CountArrayOfficialVideos} />
        )
    }
}

export function SimilarVideosApiCall() {
    const dataTypeFetch = window.location.href.split("/")[4];
    const dataIdFetch = window.location.href.split("/")[3];
    const [CountArrayOfficialVideos, SetCountArrayOfficialVideos] = useState([])

    const reqObj = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${dataTypeFetch}/${dataIdFetch || 667538}/${"similar"}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
      };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArrayOfficialVideos(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if ((CountArrayOfficialVideos != "") && (CountArrayOfficialVideos != undefined)) {
        return (
            <SimilarVideosRenderData dataPut={CountArrayOfficialVideos} datatypeval={dataTypeFetch}/>
        )
    }
}

export function RecommendationVideosApiCall() {
    const dataTypeFetch = window.location.href.split("/")[4];
    const dataIdFetch = window.location.href.split("/")[3];
    const [CountArrayRecommendation, SetCountArrayRecommendation] = useState([])

    const reqObj = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${dataTypeFetch}/${dataIdFetch || 667538}/${"recommendations"}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
      };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArrayRecommendation(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if ((CountArrayRecommendation != "") && (CountArrayRecommendation != undefined)) {
        return (
            <RecommendationVideosRenderData dataPut={CountArrayRecommendation} datatypeval={dataTypeFetch} />
        )
    }
}

export function SearchVideosApiCall() {
    const dataTypeFetch = window.location.href.split("/")[4];
    const dataIdFetch = window.location.href.split("/")[3];
    const [CountArraySearchVideos, SetCountArraySearchVideos] = useState([])

    const reqObj = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${dataTypeFetch}/${dataIdFetch || 667538}/${"recommendations"}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
        }
      };

    useEffect(() => {
        axios.request(reqObj)
            .then(function (response) {
                if (response.status == 200) {
                    const dataArrayObj = response.data;
                    SetCountArraySearchVideos(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if ((CountArraySearchVideos != "") && (CountArraySearchVideos != undefined)) {
        return (
            <RecommendationVideosRenderData dataPut={CountArraySearchVideos} datatypeval={dataTypeFetch} />
        )
    }
}