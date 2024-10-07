import { FaApple } from "react-icons/fa";

const Card = ({ products }) => {
  return (
    <div className="card">
      {products.length > 0 && <span>Loading...</span> ? (
        products.map((product) => (
          <div key={product.id}>
            <div>
              <FaApple size="50px" />
              <h5>{product.name}</h5>
              <p>Price: {product.price}</p>
              <span>Size: {product.size}</span>
              <br />
              <span>Color: {product.color}</span>
            </div>
          </div>
        ))
      ) : (
        <div>No Product Found</div>
      )}
    </div>
  );
};

export default Card;
