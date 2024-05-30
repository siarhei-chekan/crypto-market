<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();
const pages = router.getRoutes();
</script>

<template>
  <v-app>
    <v-toolbar :elevation="2">
      <template v-slot:prepend>
        <RouterLink :to="'/'">
          <v-img :width="100" aspect-ratio="16/9" cover src="../src/assets/crypto_coinmarketcap.svg"></v-img>
        </RouterLink>
      </template>

      <v-app-bar-title>Crypto Market</v-app-bar-title>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in pages" :key="item.name" :value="index">
            <v-list-item-title>
              <RouterLink :to="{ name: item.name }">{{ item.name }}</RouterLink>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style lang="scss"></style>
