import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', () => {
  const title = ref('')
  const content = ref('')

  return { title, content }
})
