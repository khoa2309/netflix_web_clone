import { useSelector } from "react-redux";
import Banner from "~/components/Banner";
import Row from "~/components/Row";
import { selectResult } from "~/features/searchResults";
import requests from "~/request/request";

function DocumentariesMovie() {
  const result = useSelector(selectResult);
  return (
    <div>
      <Banner fetchUrl={requests.fetchDocumentaries} />
      {result && result.length >= 1 ? (
        <Row isTypeList result={result} isLargeRow />
      ) : (
        <>
          <Row
            title="DOCUMENTARIES MOVIES"
            fetchUrl={requests.fetchDocumentaries}
            isLargeRow
            isTypeList
          />
        </>
      )}
    </div>
  );
}

export default DocumentariesMovie;
