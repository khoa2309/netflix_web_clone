// eslint-disable-next-line no-unused-vars
export const API_KEY = "c6b14eecce19f8210b84a0f3905e4706";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=vi-VN`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=vi-VN`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=vi-VN`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28&language=vi-VN`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=vi-VN`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=vi-VN`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=vi-VN`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=vi-VN`,
};

export default requests;
