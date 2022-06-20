<template>
  <div class="addContainer">
    <n-button type="primary" @click="goBack()"> 返回 </n-button>
  </div>
</template>

<script setup>

import { useRouter } from "vue-router"
import { getMsg, createMsg } from "@/api/api"
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>
<style scoped lang="scss">
@import "../assets/styles/global.scss";

.addContainer {
  background: #F7F8FA;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}


</style>
