export default function Product({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
}) {
  return (
    <article className="product">
      <img src={image} alt={title} style={{width: '337px', height: '260px'}}/>
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>Rs {price}</p>
          <p className="max">{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => onAddToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
