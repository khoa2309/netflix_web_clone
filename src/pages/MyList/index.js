import { useSelector } from "react-redux";
import Row from "~/components/Row";
import { selectMylist, selectMylistResult } from "~/features/mylistSlice";

function MyList() {
  const mylist = useSelector(selectMylist);
  const result = useSelector(selectMylistResult);

  return (
    <>
      {result ? (
        <Row isLargeRow isMyList mylist={result} />
      ) : (
        <Row isLargeRow isMyList mylist={mylist} />
      )}
    </>
  );
}

export default MyList;
