// add Product to cart
export const AddCart = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};
// del Product to cart
export const DelCart = (product) => {
  return {
    type: "DEL",
    payload: product,
  };
};
