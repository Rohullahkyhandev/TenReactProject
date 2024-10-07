import { CiSettings, CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ input, setInput }) => {
  return (
    <div className="searchbox--nav">
      <div className="searchbox">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit" className="search--icon">
          <FaSearch size="20px" />
        </button>
      </div>
      <div className="tools">
        <a href="#">
          <CiSettings size="20px" />
        </a>
        <a href="#">
          <CiUser size="20px" />
        </a>
      </div>
    </div>
  );
};

export default SearchBox;
