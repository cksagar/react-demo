import React from "react";
import ReactDOM from "react-dom/client";

// via React.createElement
const heading2 = React.createElement(
  "h1", // tag
  { id: "heading" }, // attributes
  "Hello world from React" // data, children, content
);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(heading2);

// creating nested elements
const divEle = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    heading2,
  ])
);

// JSX syntax
const heading3 = <h1 className="heading">Hello world from JSX !!!!</h1>;

const Test = () => (
  <div>
    {[divEle, heading2, heading3]}
    <h1 id="heading" tabIndex="1">
      Test Title from JSX
    </h1>
  </div>
);

export default Test; // ✅ Correctly exporting
