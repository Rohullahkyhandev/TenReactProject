import SearchBox from "./SearchBox";

const Navbar = ({ input, setInput }) => {
  return (
    <div className="navbar">
      <SearchBox input={input} setInput={setInput} />
    </div>
  );
};

export default Navbar;
