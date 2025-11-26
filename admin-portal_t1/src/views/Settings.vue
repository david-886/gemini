<template>
  <div>
    <h1>Settings</h1>
    <form @submit.prevent="save">
      <label>
        Site Title
        <input v-model="title" />
      </label>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Settings',
  setup() {
    const title = ref('Admin Portal')
    function save() { alert('Settings saved: ' + title.value) }
    return { title, save }
  }
}
</script>

<style scoped>
form { display:flex; flex-direction:column; gap:10px; max-width:400px }
input { padding:8px; border:1px solid #ddd; border-radius:4px }
</style>
