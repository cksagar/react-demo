import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`http://localhost:5000/restaurants/${id}`);
    const jsonData = await data.json(data);
    console.log(jsonData);
    setResInfo(jsonData);
  };
  return resInfo;
};

export default useRestaurantMenu;
