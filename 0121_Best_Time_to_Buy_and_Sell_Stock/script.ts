function maxProfit(prices: number[]): number {
  let minPrice = 9007199254740991;
  let maxprofit = 0;

  for (let i = 0; i < prices.length; i++) {
    let interim = prices[i] - minPrice;

    if (prices[i] < minPrice) minPrice = prices[i];
    else if (prices[i] - minPrice > maxprofit) maxprofit = prices[i] - minPrice;
  }

  return maxprofit;
}
