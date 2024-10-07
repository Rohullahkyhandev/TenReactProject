import { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./main.css";

const Index = () => {
  const [selected, setSelected] = useState("");
  const [input, setInput] = useState("");

  // filtring data based on the title

  const products = [
    {
      id: 1,
      name: "Apple Watch",
      price: "100",
      size: "large",
      color: "black",
    },
    {
      id: 2,
      name: "Labtop",
      price: "300",
      size: "medium",
      color: "gray",
    },

    {
      id: 3,
      name: "Tablet",
      price: "200",
      size: "small",
      color: "red",
    },

    {
      id: 4,
      name: "Tablet",
      price: "200",
      size: "small",
      color: "red",
    },
  ];

  var filterItems = products.filter(
    (product) =>
      product.name.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) !== -1
  );

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const filterData = (products, selected) => {
    filterItems = products;
    if (selected === "all" || selected === "") {
      return filterItems;
    }

    filterItems = filterItems.filter(
      (product) =>
        product.color === selected ||
        product.size === selected ||
        product.price === selected
    );

    return filterItems;
  };

  filterItems = filterData(products, selected);

  return (
    <>
      <section className="main--layout">
        {/* navbar */}
        <Sidebar selected={selected} handleChange={handleChange} />
        <div className="container">
          {/* sidebar */}
          <Navbar input={input} setInput={setInput} />

          {/* main part */}
          <main className="main--content">
            <article>
              <Card products={filterItems} />
            </article>
          </main>
        </div>
      </section>
    </>
  );
};

export default Index;
