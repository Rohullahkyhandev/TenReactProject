import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./style.css";
const HideSearch = () => {
  const [bgColor, setBgColor] = useState("white");
  const [showSearch, setShowSearch] = useState(false);

  const handleToggle = (e) => {
    setBgColor("#333");
    if (e.target.className === "container") {
      setBgColor("white");
      setShowSearch(false);
    } else {
      setShowSearch(true);
      setBgColor("#333");
    }
  };

  return (
    <section
      className="container"
      style={{ background: bgColor }}
      onClick={handleToggle}
    >
      {showSearch ? (
        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      ) : (
        <div className="hide-search">
          <CiSearch
            style={{ cursor: "pointer" }}
            size={24}
            onClick={() => setShowSearch(true)}
          />
        </div>
      )}
    </section>
  );
};

export default HideSearch;
