const SortBySize = ({ selectd, setSelected, handleChange }) => {
  return (
    <div>
      <div className="sort--by-size--item">
        <input
          type="radio"
          value="small"
          onChange={handleChange}
          name="group"
        />
        <span>Small</span>
      </div>

      <div className="sort--by-size--item">
        <input
          type="radio"
          name="group"
          value="medium"
          onChange={handleChange}
        />
        <span>Medium</span>
      </div>

      <div className="sort--by-size--item">
        <input
          type="radio"
          name="group"
          value="large"
          onChange={handleChange}
        />
        <span>Large</span>
      </div>
    </div>
  );
};

export default SortBySize;
