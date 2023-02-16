<template>
  <div class="songbook">
    <div class="toc">
      <h2>Table of Contents</h2>
      <ul>
        <li v-for="(song, index) in songs" :key="index">
          <a :href="`#${song.id}`">{{ song.title }}</a>
        </li>
      </ul>
    </div>
    <div class="song-documents">
      <SongDocument v-for="(song, index) in songs" :key="index" :file="song.file" :id="song.id" />
    </div>
  </div>
</template>

<script>
import SongDocument from "@/components/SongDocument.vue"

const files = require.context("@/assets/markdown/", false, /\.md$/)

export default {
  name: "SongBook",
  components: {
    SongDocument
  },
  data() {
    return {
      songs: []
    }
  },
  created() {
    this.loadSongs()
  },
  methods: {
    loadSongs() {
      this.songs = files.keys().map((key) => {
        const markdown = files(key)
        const frontmatter = require("front-matter")(markdown)
        const { title, artist, genre, lyrics } = frontmatter.attributes
        const file = `./${key.slice(2)}`
        const id = `song-${this.songs.length + 1}`
        return {
          title,
          artist,
          genre,
          lyrics,
          file,
          id
        }
      })
    }
  }
}
</script>

<style scoped>
.songbook {
  display: flex;
  flex-wrap: wrap;
}

.toc {
  width: 25%;
  padding: 1rem;
}

.song-documents {
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
