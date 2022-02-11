<template>
  <v-app>
    <div class="app-container">
      <Header />
      <SideNav />
      <div class="app-content">
        <Nuxt />
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from '../components/Header';
import SideNav from '../components/SideNav';

export default {
  components: {
    Header,
    SideNav
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
}
.app-container {
  height: 100%;
  position: relative;
  display: grid;
  grid-template: auto 1fr auto / 1fr;
}
.app-content {
  min-height: 100vh;
  padding: 24px;
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>