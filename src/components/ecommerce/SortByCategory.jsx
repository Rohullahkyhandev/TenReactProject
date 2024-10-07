const SortByCategory = ({ selected, setSelected, handleChange }) => {
  return (
    <div>
      <div className="sort--by-price--item">
        <input type="radio" value="50" onChange={handleChange} name="group" />
        <span>50$ - 100$</span>
      </div>

      <div className="sort--by-price--item">
        <input type="radio" value="100" onChange={handleChange} name="group" />
        <span>100$ - 200$</span>
      </div>

      <div className="sort--by-price--item">
        <input type="radio" value="200" onChange={handleChange} name="group" />
        <span>200$ - 300$</span>
      </div>
    </div>
  );
};

export default SortByCategory;
