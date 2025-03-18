import { PRODUCT_ITEM_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisine, image, rating, deliveryTime } = props.resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={image} />
      <h3 className="res-name">{name}</h3>
      <p className="res-rating">Rating: ⭐{rating}</p>
      <p className="res-time">Delivery Time: {deliveryTime}</p>
      <p className="res-cuisine">{cuisine}</p>
    </div>
  );
};

export default RestaurantCard;
