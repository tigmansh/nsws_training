import React from "react";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
  return await fetch(
    `https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`
  ).then((res) => res.json());
};

function FlightSearch() {
  // on page load fetch the data (useEffect)
  const [flight, setFlight] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    fetchData().then((data) => setFlight(data));
  }, []);

  const handleSearch = () => {
    // filter the data based on source and destination
    const filterdata = flight.filter((item) => {
      if (item.source === source && item.destination === destination){
        // setFilter([item]);
        return item;
      }
    });
    setFilter([...filterdata])
  };

  const handleSource = (e) => {
    setSource(e.target.value);
  };
  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input
            data-testid="source-input"
            placeholder="Source"
            onChange={handleSource}
          />
          <br /> <br />
          <input
            data-testid="destination-input"
            placeholder="Destination"
            onChange={handleDestination}
          />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch}>
            Search
          </button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      {flight.length === 0 ? (
        <div data-testid="no-flights" className="">
          No Flights Found
        </div>
      ) : (
        <div>
          {filter.length == 0 ? (
            <div data-testid="no-flights" className="">
              No Flights Found
            </div>
          ) : (
            <div>
              <SearchResults filter={filter} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FlightSearch;
