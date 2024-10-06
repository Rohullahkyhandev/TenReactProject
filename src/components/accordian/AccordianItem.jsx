import { useState } from "react";
import "./style.css";

const AccordianItem = ({ items }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="accordain--box">
      <div>
        <h3>{items.title}</h3>
        <h2
          onClick={() => setIsActive(!isActive)}
          className="accordain--tittle"
        >
          {isActive ? "-" : "+"}
        </h2>
      </div>
      {isActive && <p className="accordain--content">{items.content}</p>}
    </section>
  );
};

export default AccordianItem;
