import InfoTooltip from "./InfoPopup";

const ProductCard = ({
  id,
  name,
  price,
  image,
  description,
  keyFeatures,
  onAddToCart,
}) => {
  const handleClick = () => {
    onAddToCart({ id, name, price, image });
  };

  return (
    <>
      <div className="product-card">
        <InfoTooltip
          product={{ image, name, description, keyFeatures }}
        ></InfoTooltip>
        <img src={image} alt={name} className="product-image" />
        <h3 className="product-name">{name}</h3>
        <p className="product-price">£{price}</p>
        <button className="add-to-cart-button" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
