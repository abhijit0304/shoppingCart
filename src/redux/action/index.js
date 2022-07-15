//for add item to cart

export const addToCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

  