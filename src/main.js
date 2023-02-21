import { createApp } from "vue"
import App from "./App.vue"
import MarkdownIt from "markdown-it"
import frontMatter from "markdown-it-front-matter"
import jtab from "jtab"

import "bootstrap/dist/css/bootstrap.min.css"

const md = new MarkdownIt().use(frontMatter)

createApp(App).provide("md", md).provide("jtab", jtab).mount("#app")
