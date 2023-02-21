<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="song in songs" :key="song">
          <a :href="'#' + song.id">{{ song.title }}</a>
        </li>
      </ul>
    </nav>
    <main>
      <song-document v-for="song in songs" :key="song.id" :song="song" />
    </main>
  </div>
</template>

<script>
import SongDocument from "./components/SongDocument.vue"
import { reactive, onMounted, inject } from "vue"
import { readdirSync, readFileSync } from "fs"

export default {
  name: "App",
  components: {
    SongDocument
  },
  setup() {
    const md = inject("md")
    const songs = reactive([])

    onMounted(() => {
      const songFiles = readdirSync("./src/assets/markdown/").filter((file) => file.endsWith(".md"))

      songs.push(
        ...songFiles.map((file) => {
          const content = readFileSync(`./src/assets/markdown/${file}`, "utf8")
          const { data } = md.parse(content)
          return { ...data, id: file.replace(".md", ""), lyrics: content }
        })
      )
    })

    return {
      songs
    }
  }
}
</script>
