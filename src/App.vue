<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </keep-alive>
  </router-view>
  <router-view v-slot="{ Component }" name="base">
    <keep-alive>
      <transition appear name="slide">
        <component :is="Component" />
      </transition>
    </keep-alive>
  </router-view>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html")
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + "px"
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixin.scss";
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
