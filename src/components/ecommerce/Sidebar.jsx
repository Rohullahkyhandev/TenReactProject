import { useState } from "react";
import SortByCategory from "./SortByCategory";
import SortByColor from "./SortByColor";
import SortBySize from "./SortBySize";

const Sidebar = ({ selected, setSelected, handleChange }) => {
  return (
    <div className="sidebar">
      <div>
        <p className="sidebar--header">Sort Product By Color</p>
        <SortByColor
          selected={selected}
          setSelected={setSelected}
          handleChange={handleChange}
        />
      </div>
      <div>
        <p className="sidebar--header">Sort Product By Size</p>
        <SortBySize
          selected={selected}
          setSelected={setSelected}
          handleChange={handleChange}
        />
      </div>
      <div>
        <p className="sidebar--header">Sort Product By Price</p>
        <SortByCategory
          selected={selected}
          setSelected={setSelected}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Sidebar;
