import { useSelector } from "react-redux";
import Banner from "~/components/Banner";
import Row from "~/components/Row";
import { selectResult } from "~/features/searchResults";
import requests from "~/request/request";

export default function Home() {
  const result = useSelector(selectResult);
  return (
    <div>
      <Banner fetchUrl={requests.fetchTrending} isTrending />
      {result?.result?.length >= 1 ? (
        <Row isTypeList result={result.result} isLargeRow />
      ) : (
        <>
          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
          <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
          <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
          <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
          <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
        </>
      )}
    </div>
  );
}
