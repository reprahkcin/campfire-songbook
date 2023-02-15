<template>
  <div>
    <SongDocument v-for="(song, index) in songs" :key="index" :song="song" />
  </div>
</template>

<script>
// In your App.vue component
import SongDocument from "./components/SongDocument.vue"

export default {
  name: "App",
  components: {
    SongDocument
  },
  data() {
    return {
      songs: []
    }
  },
  mounted() {
    const requireComponent = require.context("./assets/markdown/", false, /\.md$/)
    requireComponent.keys().forEach((fileName) => {
      const song = requireComponent(fileName)
      console.log("song:", song)
      this.songs.push({
        name: fileName,
        content: song
      })
    })
  }
}
</script>
