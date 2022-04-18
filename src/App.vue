<template>
  <div @click="clickA">{{ a }}</div>
  <div class="tran" :style="{ fontSize: a + 'px' }">
    {{ isPrimeNum ? "偶数" : "奇数" }}
  </div>
  <div class="tran" @click="clickB">{{ b }}</div>
</template>


<script setup>
import { ref, computed } from "vue";

const clickA = () => {
  a.value++;
  console.log(a);
};
const clickB = () => {
  fontSize.value++;
};
const a = ref(1);
const b = ref(100);
const fontSize = ref(10);
const isPrimeNum = computed(() => (a.value % 2 == 0 ? 1 : 0));
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

.active {
  font-size: 20px;
  color: #127fed;
}

.tran {
  transition: all 0.15s linear;
  &:hover {
    color: #127fed;
  }
}
</style>
