import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../redux/slicers/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, author, isLoading, error } = useSelector(
    (state) => state.quote
  );

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>"{quote}"</p>
      <p>- {author}</p>
      <button onClick={handleNewQuote}>New Quote</button>
    </div>
  );
};

export default Quote;
