import { useSelector } from "react-redux";
import Banner from "~/components/Banner";
import Row from "~/components/Row";
import { selectResult } from "~/features/searchResults";
import requests from "~/request/request";

function RomanceMovie() {
  const result = useSelector(selectResult);
  return (
    <div>
      <Banner fetchUrl={requests.fetchRomanceMovies} />
      {result && result.length >= 1 ? (
        <Row isTypeList result={result} isLargeRow />
      ) : (
        <>
          <Row
            title="ROMANCE MOVIES"
            fetchUrl={requests.fetchRomanceMovies}
            isLargeRow
            isTypeList
          />
        </>
      )}
    </div>
  );
}

export default RomanceMovie;
