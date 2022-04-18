<template>
  <div
    style="height: 425px; width: 353px; display: flex; flex-direction: column"
  >
    <img
      :src="url"
      style="height: 358px; width: 100%; background-color: #000"
    />
    <div
      style="
        height: 67px;
        width: 100%;
        font-size: 30px;
        padding-left: 20px;
        background-color: #fff;
        color: #000;
      "
    >
      {{ name }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["name",'url']);
console.log(props.name);
</script>