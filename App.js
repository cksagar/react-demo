const heading2 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React !!!!"
);
const root2 = ReactDOM.createRoot(document.getElementById("hii"));
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
root2.render(divEle);
