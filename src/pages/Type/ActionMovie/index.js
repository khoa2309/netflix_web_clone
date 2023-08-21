import { useSelector } from "react-redux";
import Banner from "~/components/Banner";
import Row from "~/components/Row";
import { selectResult } from "~/features/searchResults";
import requests from "~/request/request";

function ActionMovie() {
  const result = useSelector(selectResult);
  return (
    <div>
      <Banner fetchUrl={requests.fetchActionMovies} />
      {result && result.length >= 1 ? (
        <Row isTypeList result={result} isLargeRow />
      ) : (
        <>
          <Row
            title="ACTION MOVIES"
            fetchUrl={requests.fetchActionMovies}
            isLargeRow
            isTypeList
          />
        </>
      )}
    </div>
  );
}

export default ActionMovie;
