// import module.css here;
const Product = ({name,price,quantity,id,handleQty}) => {
  function increment(){
    handleQty(id, 1);
  }
  function decrement(){
    handleQty(id, -1);
  }

  return (
    <>
      <div data-testid="product-container">
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment" onClick={()=> increment()}>+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button data-testid="quantity-decrement" onClick={()=> decrement()} disabled={quantity < 1}>-</button>
      </div>
    </>
  );
};
export default Product;
