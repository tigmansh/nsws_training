import React,{ useState, useEffect } from "react";
import axios from "axios";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [groceries, setGroceries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/groceries`).then((response) => {
      setGroceries(response.data);
    });
  }, []);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredGroceries = groceries && groceries.filter(grocery => {
    return grocery.name && grocery.name.toLowerCase().includes(searchQuery.toLowerCase())
  });
  

  return (
    <div className={styles.container}>
      <h1>Groceries</h1>
      <input className="search_box" type="text" placeholder="Search" value={searchQuery} onChange={handleSearchQueryChange} data-cy="search-input" />
      <ul className='grocery_data'>
        {filteredGroceries.map((item) => (
          <li key={item.id} data-cy={`grocery-${item.id}`}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
