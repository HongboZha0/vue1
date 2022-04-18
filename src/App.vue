<template>
  <div @click="clickA">{{ a }}</div>
  <div>{{ isPrimeNum }}</div>
  <div @click="clickB">{{ b }}</div>
</template>

<script setup>
import { ref, computed } from "vue";

const clickA = () => {
  a.value++;
  console.log(a);
};
const clickB = () => {
  b.value = b.value + 10;
};
const a = ref(1);
const b = ref(100);
const isPrimeNum = computed(d);
const d = () => (a.value % 2 == 0 ? "偶数" : "奇数");
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
