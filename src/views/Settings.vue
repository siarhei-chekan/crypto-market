<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useOrderBookStore } from "@/stores/orderBook";

import { orderBookService } from "../services/orderBook";
import { watch } from "vue";

const store = useOrderBookStore();
const { testConnect, getOrderBook } = orderBookService();

const selectedItem = ref("BTCUSDT");
const logList = ref([]);

watch(selectedItem, async (newValue, oldValue) => {
  const log = {
    newCurrency: newValue,
    prevCurrency: oldValue,
    selectingTime: new Date().toLocaleString("ru"),
  };

  logList.value.unshift(log);
  await store.getCurrencyPairData(newValue);
});

onMounted(async () => {
  await testConnect();
  await store.getCurrencyPairData(selectedItem.value);
});
</script>

<template>
  <div>
    <v-select v-model="selectedItem" label="Валютная пара" :items="['BTCUSDT', 'BNBBTC', 'ETHBTC']"></v-select>

    <v-card title="Logs">
      <v-card-text>
        <v-list lines="one">
          <v-list-item v-for="item in logList" :key="item.selectingTime">
            <span>{{ item.prevCurrency }}</span>
            <v-icon icon="mdi-arrow-right"></v-icon>
            <span>{{ item.newCurrency }}</span>
            <v-icon icon="mdi-timeline-clock"></v-icon>
            <span>{{ item.selectingTime }}</span>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.v-list-item__content {
  & span {
    margin: 0 5px;
    min-width: 70px;
  }
}
</style>
