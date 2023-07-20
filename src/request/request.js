// eslint-disable-next-line no-unused-vars
const API_KEY = "c6b14eecce19f8210b84a0f3905e4706";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&
    language=vi`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&
    with_networks=213&language=vi`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&
    language=vi`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&
    with_genres=28&language=vi`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&
    with_genres=35&language=vi`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&
    with_genres=27&language=vi`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&
    with_genres=10749&language=vi`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&
    with_genres=99&language=vi`,
};

export default requests;
