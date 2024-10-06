import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./style.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const postLists = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: "Innovative Idea",
    },

    {
      id: 2,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      title: "Awesome Design",
    },

    {
      id: 3,
      name: "Mike Johnson",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      title: "Best Product",
    },

    {
      id: 3,
      name: "Mike Johnson",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      title: "Best Product",
    },

    {
      id: 3,
      name: "Mike Johnson",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      title: "Best Product",
    },

    {
      id: 3,
      name: "Mike Johnson",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      title: "Best Product",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex) => (currentIndex - 1) % postLists.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % postLists.length);
  };

  return (
    <section>
      <div className="testimonial-container">
        <div className="testimonial-slider">
          {postLists.map((post, index) => (
            <div
              key={post.id}
              className={`testimonial-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <div className="testimonial-text">
                <h2>{post.title}</h2>
                <p>{post.text}</p>
                <div className="testimonial-author">
                  <span>{post.name}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="testimonial-counter">
            {currentIndex + 1} / {postLists.length}
          </div>
        </div>
        <div className="testimonial-controls">
          <button
            className={`testimonial-control ${
              currentIndex === 0 ? "disabled" : ""
            }`}
            onClick={handlePrevClick}
          >
            <FaLongArrowAltLeft size="20px" />
          </button>

          <button
            className={`testimonial-control ${
              currentIndex === postLists.length - 1 ? "disabled" : ""
            }`}
            onClick={handleNextClick}
          >
            <FaLongArrowAltRight size="20px" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
