import React from "react";
import ReactDOM from "react-dom";
// imports this from the react dom library

// const title = React.createElement("h1", {}, "My First React Code");
// // first argument is the element we're creating- in this case h1. can also be another react component
// // second is the an object containing properties (props) that get passed to the component. none in this example to see
// // last is the children of that component. in this case it will be interpreted as text. can also be a reference to another component.
//
// const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
//
// const container = React.createElement("div", {}, [title, paragraph]);
// // here we're adding an element as a child, so it's passed by refernece instead of using a string. Or add multiple childeren as an array.
//
// ReactDOM.render(container, document.getElementById("global"));
// this step renders it to the page.
// takes two arguments.
// first is the thing we want to render.
// second is a target dom node to render things into

const list = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "My favorite ice cream flavors"),
  React.createElement("ul", {}, [
    React.createElement("li", { className: "brown" }, "Chocolate"),
    React.createElement("li", { className: "white" }, "Vanilla"),
    React.createElement("li", { className: "yellow" }, "Banana")
  ])
);

ReactDOM.render(list, document.getElementById("global"));
