const SortByColor = ({ selected, setSelected, handleChange }) => {
  return (
    <div className="sort--container">
      <div className="sort--by-color--item">
        <input type="radio" value="all" onChange={handleChange} name="group" />
        <span>All</span>
      </div>

      <div className="sort--by-color--item">
        <input type="radio" value="blue" onChange={handleChange} name="group" />
        <span>Blue</span>
      </div>

      <div className="sort--by-color--item">
        <input
          type="radio"
          value="whtie"
          onChange={handleChange}
          name="group"
        />
        <span>White</span>
      </div>

      <div className="sort--by-color--item">
        <input type="radio" value="red" onChange={handleChange} name="group" />
        <span>Red</span>
      </div>

      <div className="sort--by-color--item">
        <input
          type="radio"
          value="black"
          onChange={handleChange}
          name="group"
        />
        <span>Black</span>
      </div>

      <div className="sort--by-color--item">
        <input
          type="radio"
          value="green"
          onChange={handleChange}
          name="group"
        />
        <span>Green</span>
      </div>

      <div className="sort--by-color--item">
        <input type="radio" value="gray" onChange={handleChange} name="group" />
        <span>Gray</span>
      </div>
    </div>
  );
};

export default SortByColor;
