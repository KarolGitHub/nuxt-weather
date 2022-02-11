<template>
  <header class="app-header">
    <div class="drawer-toggle" role="button" @click="toggleSidebar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="app-links">
      <app-links />
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

import AppLinks from '../components/appLinks';
export default {
  components: { AppLinks },
  methods: {
    ...mapActions({
      toggleSidebar: 'nav/toggleSidebar'
    })
  }
};
</script>

<style lang="scss" scoped>
@import './assets/variables';
.app-header {
  display: grid;
  grid-template: 60px / auto 1fr;
  align-items: center;
  background-color: $background;
  -webkit-box-shadow: 0 6px 3px #888888;
  -moz-box-shadow: 0 6px 3px #888888;
  box-shadow: 0 6px 3px #888888;
}
.app-links {
  justify-self: end;
}
.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: white;
}
.drawer-toggle {
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  padding-right: 16px;
  cursor: pointer;
}
@media (max-width: 767px) {
  header {
    padding: 0 16px;
  }
  header:nth-child {
    justify-self: end !important;
  }
  .app-links {
    display: none;
  }
}
@media (min-width: 768px) {
  header {
    padding: 0 64px;
  }
  .app-links {
    display: block;
  }
  .drawer-toggle {
    display: none;
  }
}
</style>