import { useSelector } from "react-redux";
import Banner from "~/components/Banner";
import Row from "~/components/Row";
import { selectResult } from "~/features/searchResults";
import requests from "~/request/request";

function HorrorMovie() {
  const result = useSelector(selectResult);
  return (
    <div>
      <Banner fetchUrl={requests.fetchHorrorMovies} />
      {result?.result?.length >= 1 ? (
        <Row isTypeList result={result.result} isLargeRow />
      ) : (
        <Row
          title="HORROR MOVIES"
          fetchUrl={requests.fetchHorrorMovies}
          isLargeRow
          isTypeList
        />
      )}
    </div>
  );
}

export default HorrorMovie;
