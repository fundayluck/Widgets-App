/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "Apa itu React?",
    content: "React adalah Front End Javascript frameWork",
  },
  {
    title: "kenapa menggunakan React?",
    content: "karena saya senang menggunakan framework ini.",
  },
  {
    title: "bagaimana cara menggunakan react?",
    content: "menggunakan react dengan membuat component",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
