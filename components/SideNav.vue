<template>
  <div class="sidenav-container">
    <div v-if="toggleSidebar" class="backdrop" @click="$store.dispatch('nav/toggleSidebar')"></div>

    <transition name="slide-side">
      <div v-if="toggleSidebar" class="sidenav">
        <AppLinks />
      </div>
    </transition>
  </div>
</template>

<script>
import AppLinks from '~/components/appLinks';
export default {
  components: { AppLinks },
  computed: {
    toggleSidebar() {
      return this.$store.getters['nav/getSidebar'];
    }
  }
};
</script>


<style lang="scss" scoped>
@import './assets/variables';
.sidenav-container {
  height: 100%;
  width: 100%;
}
.sidenav {
  height: 100%;
  width: 300px;
  background-color: $background;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba($background-dark, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>