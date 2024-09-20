import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import MovieDynamicRenderData from '../Component/MovieComp/MovieData'
import WhatsPopularMovieRender from '../Component/MovieComp/MovieDataTwo'
import TopRatedDataRender from '../Component/MovieComp/MovieDataThree'
import BannerdynamicComp from '../Component/BannerComp/BannerComponent'
import WatchShowsRender from '../Component/WatchShowsData/WatchShows'
import TopCastDataRender from '../Component/TopCastComp/TopCast'
import OfficialVideosDataRender from '../Component/OfficialVideosComp/OfficialVideos'
import SimilarVideosRenderData from '../Component/SimilarVideosComp/SimilarVideos'
import RecommendationVideosRenderData from '../Component/RecommendationsVideosComp/RecommendationsVideos'
import SkeletonLoader from '../Component/Skelton/Skelton';
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
    } else {
        return (
            <BannerdynamicComp dataDynamicImage={bannerImage} />
        )
    }
}

export function TrendingApiCall() {
    const [CountArray, SetCountArray] = useState([])
    const [loading, setLoading] = useState(false);
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
                    setLoading(true);
                    const dataArrayObj = response.data;
                    SetCountArray(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, [])
    if (!loading) {
        return <SkeletonLoader value={ {id:5, scrollTop:"N"}}/>
    }

    if ((CountArray != "") && (CountArray != undefined)) {
        return (
            <MovieDynamicRenderData dataPut={CountArray} datatypeval={'movie'} />
        )
    }
}

export function WhatsPopularApiCall() {
    const [CountArrayPopular, SetCountArrayPopular] = useState([]);
    const [loading, setLoading] = useState(false);
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
                    setLoading(true);
                    const dataArrayObj = response.data;
                    SetCountArrayPopular(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, [])

    if (!loading) {
        return <SkeletonLoader value={ {id:5, scrollTop:"N"}}/>
    }

    if ((CountArrayPopular != "") && (CountArrayPopular != undefined)) {
        return (
            <WhatsPopularMovieRender dataPut={CountArrayPopular} datatypeval={'movie'} />
        )
    }
}

export function TopRatedApiCall() {
    const [CountArrayTopRated, SetCountArrayTopRated] = useState([]);
    const [loading, setLoading] = useState(false);
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
                    setLoading(true);
                    const dataArrayObj = response.data;
                    SetCountArrayTopRated(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if (!loading) {
        return <SkeletonLoader value={ {id:5, scrollTop:"N"}}/>
    }

    if ((CountArrayTopRated != "") && (CountArrayTopRated != undefined)) {
        return (
            <TopRatedDataRender dataTopRated={CountArrayTopRated} datatypeval={'tv'} />
        )
    }
}

export function TvShowApiCall() {
    const [CountArrayTvShows, SetCountArrayTvShows] = useState([])
    const [loading, setLoading] = useState(false);

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
                    setLoading(true);
                    const dataArrayObj = response.data;
                    SetCountArrayTvShows(dataArrayObj);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);

    if (!loading) {
        return <SkeletonLoader value={ {id:5, scrollTop:"N"}}/>
    }

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
        params: { language: 'en-US', page: '1' },
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
            <MovieDynamicRenderData dataPut={CountArrayTvShows} datatypeval={'movie'} />
        )
    }
}

export function WatchMovieTvDataVideos() {
    const [CountArrayTvShows, SetCountArrayTvShows] = useState([]);
    const params = useParams();
    const dataTypeFetch = params.id;
    const dataIdFetch = params.type;

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
    }, [params.id]);
}

export function UniqueCommonComponent() {
    const { id, type } = useParams(); // Destructure id and type from useParams
    const [data, setData] = useState({
        tvShows: null,
        topCast: null,
        officialVideos: null,
        similarVideos: null,
        recommendations: null,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch TV Shows Data
                const tvShowsResponse = await axios.get(`https://api.themoviedb.org/3/${type}/${id || 667538}`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s' // Replace with your actual API key
                    }
                });
                setData(prevData => ({ ...prevData, tvShows: tvShowsResponse.data }));

                // Fetch Top Cast Data
                const topCastResponse = await axios.get(`https://api.themoviedb.org/3/${type}/${id || 667538}/credits`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s' // Replace with your actual API key
                    }
                });
                setData(prevData => ({ ...prevData, topCast: topCastResponse.data }));

                // Fetch Official Videos Data
                const officialVideosResponse = await axios.get(`https://api.themoviedb.org/3/${type}/${id || 667538}/videos`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s' // Replace with your actual API key
                    }
                });
                setData(prevData => ({ ...prevData, officialVideos: officialVideosResponse.data }));

                // Fetch Similar Videos Data
                const similarVideosResponse = await axios.get(`https://api.themoviedb.org/3/${type}/${id || 667538}/similar`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s' // Replace with your actual API key
                    }
                });
                setData(prevData => ({ ...prevData, similarVideos: similarVideosResponse.data }));

                // Fetch Recommendations Data
                const recommendationsResponse = await axios.get(`https://api.themoviedb.org/3/${type}/${id || 667538}/recommendations`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s' // Replace with your actual API key
                    }
                });
                setData(prevData => ({ ...prevData, recommendations: recommendationsResponse.data }));

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, type]);

    if (loading) {
        return <SkeletonLoader value={ {id:20, scrollTop:"Y"}}/>
    }

    return (
        <>
            {data.tvShows && <WatchShowsRender dataPut={data.tvShows} />}
            {data.topCast && <TopCastDataRender dataPut={data.topCast} />}
            {data.officialVideos && <OfficialVideosDataRender dataPut={data.officialVideos} />}
            {data.similarVideos && <SimilarVideosRenderData dataPut={data.similarVideos} datatypeval={type} />}
            {data.recommendations && <RecommendationVideosRenderData dataPut={data.recommendations} datatypeval={type} />}
        </>
    );
}

export function SearchVideosApiCall() {
    const params = useParams();
    const dataTypeFetch = params.type;
    const dataIdFetch = params.id;
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
    }, [params.id]);

    if ((CountArraySearchVideos != "") && (CountArraySearchVideos != undefined)) {
        return (
            <RecommendationVideosRenderData dataPut={CountArraySearchVideos} datatypeval={dataTypeFetch} />
        )
    }
}