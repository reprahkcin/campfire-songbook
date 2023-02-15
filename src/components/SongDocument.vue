<template>
  <div>
    <h1>{{ song.title }}</h1>
    <vue-markdown :source="song.content" />
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown"

export default {
  name: "SongDocument",
  components: {
    VueMarkdown
  },
  props: {
    song: {
      type: Object,
      required: true
    }
  }
}
</script>
