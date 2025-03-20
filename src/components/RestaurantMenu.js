import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restMenuInfo = useRestaurantMenu(id);
  console.log("restMenuInfo", restMenuInfo);

  if (restMenuInfo === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>{restMenuInfo.name}</h2>
      <img src={restMenuInfo.image} alt={restMenuInfo.name} />
      <p>
        <strong>Cuisine:</strong> {restMenuInfo.cuisine.join(", ")}
      </p>
      <p>
        <strong>Rating:</strong> ⭐ {restMenuInfo.rating}
      </p>
      <p>
        <strong>Delivery Time:</strong> {restMenuInfo.deliveryTime}
      </p>

      <h3>Menu</h3>
      <div>
        <ul>
          {restMenuInfo.menu.map((item) => {
            return (
              <li key={item.id}>
                {item.name} - Rs {item.price}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
