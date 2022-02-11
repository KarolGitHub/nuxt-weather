<template>
  <div class="sidenav-container">
    <div v-if="getSidebar" class="backdrop" @click="toggleSidebar"></div>

    <transition name="slide-side">
      <div v-if="getSidebar" class="sidenav">
        <AppLinks />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import AppLinks from '~/components/AppLinks';

export default {
  components: { AppLinks },
  computed: {
    ...mapGetters({ getSidebar: 'nav/getSidebar' })
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'nav/toggleSidebar'
    })
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