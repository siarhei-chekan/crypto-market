import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { orderBookService } from "../services/orderBook";

export const useOrderBookStore = defineStore("orderBook", () => {
  const { getOrderBook } = orderBookService();
  const currencyPairData = ref(null);

  async function getCurrencyPairData(currencyPair) {
    try {
      const response = await getOrderBook(currencyPair);
      currencyPairData.value = response;
    } catch (error) {
      console.log(error);
    }    
  }

  return { currencyPairData, getCurrencyPairData };
});
