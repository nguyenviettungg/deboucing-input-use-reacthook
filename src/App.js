import React from "react";
import "./App.css";
// import Accordion from "./components/Accordion";
import Search from "./components/Search";

// const items = [
//   {
//     title: "what is react ?",
//     content: "React is front end js framework",
//   },
//   {
//     title: "hwy use react ?",
//     content: "react is a favorite js library among engineers",
//   },
//   {
//     title: "how do you use react ?",
//     content: "you use react by creating components",
//   },
// ];

function App() {
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <Search />
    </div>
  );
}

export default App;
