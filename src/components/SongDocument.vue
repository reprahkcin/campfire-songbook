<template>
  <div class="song-document">
    <div v-html="song"></div>
  </div>
</template>

<script>
import axios from "axios"
import marked from "marked"

export default {
  name: "SongDocument",
  props: ["file"],
  data() {
    return {
      song: ""
    }
  },
  created() {
    this.loadSong()
  },
  methods: {
    async loadSong() {
      const response = await axios.get(this.file)
      const markdown = response.data
      const html = marked(markdown)
      this.song = html
    }
  }
}
</script>

<style scoped>
.song-document {
  padding: 1rem;
}
</style>
