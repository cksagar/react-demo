const RestaurantCard = (props) => {
  const { name, cuisine, image, rating, deliveryTime } = props.resData;

  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" alt="res-logo" src={image} />
      <h3 className="text-lg italic font-bold text-gray-900">{name}</h3>
      <p className="res-rating">Rating: ⭐{rating}</p>
      <p className="res-time">Delivery Time: {deliveryTime}</p>
      <p className="res-cuisine">{cuisine}</p>
    </div>
  );
};

export const promotedRestaurantcard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-400 m-1 p-1 rounded-lg text-white">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
