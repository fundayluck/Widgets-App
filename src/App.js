import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/color">
        <Dropdown
          label="select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
