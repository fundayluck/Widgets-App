import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

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

const ShowAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const ShowList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const ShowColor = () => {
  if (window.location.pathname === "/color") {
    return <Dropdown options={options} />;
  }
};

const ShowTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
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
