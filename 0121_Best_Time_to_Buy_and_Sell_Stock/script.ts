function maxProfit(prices: number[]): number {
  let minPrice: number = number.MAX_SAFE_INTEGER;
  let maxprofit: number = 0;

  for (let i = 0; i < prices.length; i++) {
    let interim = prices[i] - minPrice;

    if (prices[i] < minPrice) minPrice = prices[i];
    else if (interim > maxProfit) maxprofit = prices[i] - minPrice;
  }

  return maxprofit;
}
