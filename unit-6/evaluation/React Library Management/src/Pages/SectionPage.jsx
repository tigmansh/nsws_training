import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function SectionPage(section, arr = []) {
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
      <div className="sectionContainer">
        {/* Map the below the div against your books data */}
        {
        data.forEach((book) => {
          if (book.section === section) {
            arr.push(book);
          }
          arr.map((ele) => {
            return (
              <div className="bookCard">
                <h5 className="title">Title: {ele.title}</h5>
                <div className="price">Price: {ele.price}</div>
                <div className="author">Author: {ele.author}</div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
