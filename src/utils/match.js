export const sumProductTotal = (updateProducts) => {
  const total =
    updateProducts.reduce((prev, product) => {
      const strValue = (product.quantity * product.amount)
        .toFixed(4)
        .toString()
        .slice(0, -2);

      return parseFloat(strValue) + prev;
    }, 0) || 0;
  return total;
};



export const sumTotalAmount = (subTotal) => {
  const total = parseFloat(subTotal);

  return Number.isInteger(total)
    ? total
    : total?.toFixed(4)?.toString()?.slice(0, -2);
};
