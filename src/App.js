import React from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// const items = [
//   {
//     title: "Apa itu React?",
//     content: "React adalah Front End Javascript frameWork",
//   },
//   {
//     title: "kenapa menggunakan React?",
//     content: "karena saya senang menggunakan framework ini.",
//   },
//   {
//     title: "bagaimana cara menggunakan react?",
//     content: "menggunakan react dengan membuat component",
//   },
// ];

const options = [
  {
    label: "the color Red",
    value: "Red",
  },
  {
    label: "the color Green",
    value: "Green",
  },
  {
    label: "the color blue",
    value: "Blue",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="ui container">
      <Dropdown options={options} />
    </div>
  );
};
