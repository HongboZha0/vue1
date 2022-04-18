<template>
  <div>
    <FoodItem
      v-for="item in foodList"
      :key="item"
      :name="item.attributes.name"
      :url="item.attributes.pic_url"
    ></FoodItem>
  </div>
</template>


<script setup>
import AV from "leancloud-storage";
import FoodItem from "@/views/FoodItem.vue";
import { ref } from "vue";
// const clickA = () => {
//   console.log(1);
// };
const query = new AV.Query("Food");
const foodList = ref([]);
query.find().then((foods) => {
  console.log(foods);
  foodList.value = foods;
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
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
