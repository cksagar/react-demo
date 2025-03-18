import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSerchText] = useState("");

  const filterByRating = () => {
    setFilteredRestaurants(restaurantList.filter((res) => res.rating >= 4));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function getData() {
    const data = await fetch("http://localhost:5000/restaurants");
    const restaurants = await data.json();
    setRestaurantsList(restaurants);
    setFilteredRestaurants(restaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(event) => {
              setSerchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = restaurantList.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={filterByRating}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((resData, index) => (
          <RestaurantCard key={index} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
