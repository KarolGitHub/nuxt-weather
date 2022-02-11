<template>
  <ul class="nav-list">
    <li class="nav-item" @click="toggleSidebar"><nuxt-link to="/">Home</nuxt-link></li>
    <li class="nav-item" @click="toggleSidebar"><nuxt-link to="/history">History</nuxt-link></li>
  </ul>
</template>
<script>
export default {
  methods: {
    toggleSidebar() {
      if (process.client && window.innerWidth < 768) {
        this.$store.dispatch('nav/toggleSidebar');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import './assets/variables';

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-item {
  margin: 0 10px;
  transition: 0.3s;
  opacity: 1;
  width: fit-content;
}
.nav-item:hover {
  opacity: 0.6;
}
.nav-item a {
  display: flex;
  padding: 10px;
  text-decoration: none;
  color: #fefefe;
  font-size: 20px;
  border-bottom: 3px solid transparent;
}
.nav-item a:hover {
  color: $text-light;
}
a.nuxt-link-exact-active {
  font-weight: bold;
  border-bottom: 3px solid red;
}

@media (max-width: 767px) {
  .nav-list {
    display: block;
  }
  .nav-item {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
@media (min-width: 768px) {
  .nav-list {
    display: flex;
  }
}
</style>