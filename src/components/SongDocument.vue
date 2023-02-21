<template>
  <div class="song-document">
    <h2 :id="song.id">{{ song.title }}</h2>
    <h3>{{ song.artist }}</h3>
    <h4>{{ song.genre }}</h4>
    <div class="lyrics" v-html="renderLyrics()"></div>
  </div>
</template>

<script>
import { computed, inject } from "vue"

export default {
  name: "SongDocument",
  props: {
    song: Object
  },
  setup(props) {
    const md = inject("md")
    const jtab = inject("jtab")

    const renderLyrics = computed(() => {
      const { content } = md.parse(props.song.lyrics)
      const lyrics = jtab.parse(content).html
      return `<div>${lyrics}</div><div>${md.render(content)}</div>`
    })

    return {
      renderLyrics
    }
  }
}
</script>

<style scoped>
.lyrics .jtab {
  font-size: 18px;
  white-space: pre-wrap;
  font-family: "Courier New", Courier, monospace;
}
</style>
