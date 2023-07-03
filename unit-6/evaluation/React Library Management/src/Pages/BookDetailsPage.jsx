import Navbar from './Navbar';
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookDetailsPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [data]);

  return (
    <div>
            <Navbar />
            <div className="bookContainer" >
                <h5 className="title">Title: {data.title}</h5>
                <div className="price">Price: {data.price}</div>
                <div className="section">Section: {data.section}</div>
                <div className="author">Author: {data.author}</div>
                <div className="description">Desc: {data.description}</div>
                <div className="isbn">ISBN Number: {data.isbn}</div>
            </div>
        </div>
  )
}

export default BookDetailsPage;
