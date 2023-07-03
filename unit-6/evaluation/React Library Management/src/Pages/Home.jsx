import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const fetchData = async () => {
    return await fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`
    ).then((res) => res.json());
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((x) => setData(x));
  }, [data]);

  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        {data.map((book) => {
          return (
            <div className="bookCard">
              <h5 className="title"> Title: {book.title}</h5>
              <div className="price"> Price: {book.price}</div>
              <div className="author"> Author: {book.author}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
