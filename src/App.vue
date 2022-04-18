<template>
  <div @click="clickA">{{ a }}</div>
  <div @click="clickB">{{ b.fuck }}</div>
</template>

<script setup>
import { ref, reactive } from "vue";

const clickA = () => {
  a.value++;
  console.log(a);
};

const clickB = () => {
  b.fuck++;
  console.log(b);
};
const a = ref(1);
const b = reactive({ fuck: 2 });
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
