const formatDisplayedPrice = (price: number): string => {
  return `$${parseFloat(price.toString()).toFixed(2)}`;
};

export default formatDisplayedPrice;
