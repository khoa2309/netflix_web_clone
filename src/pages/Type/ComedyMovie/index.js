import { useSelector } from "react-redux";
import Banner from "~/components/Banner";
import Row from "~/components/Row";
import { selectResult } from "~/features/searchResults";
import requests from "~/request/request";

function ComedyMovie() {
  const result = useSelector(selectResult);
  return (
    <div>
      <Banner fetchUrl={requests.fetchComedyMovies} />
      {result?.result?.length >= 1 ? (
        <Row isTypeList result={result.result} isLargeRow />
      ) : (
        <Row
          title="COMEDY MOVIES"
          fetchUrl={requests.fetchComedyMovies}
          isLargeRow
          isTypeList
        />
      )}
    </div>
  );
}

export default ComedyMovie;
