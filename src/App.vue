<template>
  <div id="app">
    <SongBook />
  </div>
</template>

<script>
import SongBook from "@/components/SongBook.vue"

export default {
  name: "App",
  components: {
    SongBook
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
