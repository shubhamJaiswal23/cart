export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (let { price, amount } of cart.values()) {
    totalAmount = totalAmount + amount;
    totalCost = totalCost + amount * price;
  }

  return { totalAmount, totalCost };
};
