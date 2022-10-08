<template>
  <v-app class=" bg-grey-lighten-3">
    <v-main  class="ma-4 mb-4 ">
      <NavBar />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components:
  {
    NavBar,

  },
  data: () => ({
    //
  }),
}
</script>
<style scoped>

</style>
