import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/restaurants");
      const restaurants = await response.json();
      console.log(restaurants);
      this.setState({ restaurants });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    console.log("render called");

    return (
      <div>
        <h1>{`${this.props.name} hello from User class`}</h1>
        <h2>Restaurant List</h2>
        <ul>
          {this.state.restaurants.map((res) => (
            <li key={res.id}>{res.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
