function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxprofit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else if (prices[i] - minPrice > maxprofit) maxprofit = prices[i] - minPrice;
  }

  return maxprofit;
}
