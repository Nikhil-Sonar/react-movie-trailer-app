// import axios from "axios";
// import MovieDynamicRenderData from "D:/Nodejsprac/MovieBuzzz/src/Component/MovieComp/MovieData"

// const reqObj = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/trending/movie/day',
//     params: {language: 'en-US'},
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5N2E2MzQzYzBjMjgyNDQ4YTdkYWExZDQwY2M1MyIsInN1YiI6IjY0OTg1NmIxNmY0M2VjMDBjNWM2YmE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3R336RwLQnC8JwPmui9juyhl260VJWmQpg36kXVCH4s'
//     }
//   };
// function TrendingApiCall() {
//   axios.request(reqObj)
//     .then(function (response) {
//         if(response.status == 200){
//           return MovieDynamicRenderData(response.data)
//         }
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

// export default TrendingApiCall;