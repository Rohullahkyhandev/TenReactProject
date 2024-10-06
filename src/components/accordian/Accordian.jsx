import AccordianItem from "./AccordianItem";

const Accordian = () => {
  const data = [
    {
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur maiores, eius voluptatem eligendi nostrum facilis aspernatur asperiores id quaerat culpa rerum temporibus ratione, quibusdam ullam voluptatibus at nisi quisquam?",
    },

    {
      title: "Title 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur maiores, eius voluptatem eligendi nostrum facilis aspernatur asperiores id quaerat culpa rerum temporibus ratione, quibusdam ullam voluptatibus at nisi quisquam?",
    },

    {
      title: "Title 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur maiores, eius voluptatem eligendi nostrum facilis aspernatur asperiores id quaerat culpa rerum temporibus ratione, quibusdam ullam voluptatibus at nisi quisquam?",
    },

    {
      title: "Title 5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur maiores, eius voluptatem eligendi nostrum facilis aspernatur asperiores id quaerat culpa rerum temporibus ratione, quibusdam ullam voluptatibus at nisi quisquam?",
    },
  ];

  return (
    <div className="accordian--container">
      {data &&
        data.map((items) => (
          <AccordianItem key={Math.random() * 10} items={items} />
        ))}
    </div>
  );
};

export default Accordian;
