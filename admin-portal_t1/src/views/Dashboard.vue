<template>
  <div>
    <h1>Dashboard</h1>
    <div class="cards">
      <div class="card">Users: <strong>{{ usersCount }}</strong></div>
      <div class="card">Active Sessions: <strong>3</strong></div>
      <div class="card">Errors: <strong>0</strong></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useUserStore } from '../store/user'

export default {
  name: 'Dashboard',
  setup() {
    const userStore = useUserStore()
    const usersCount = ref(userStore.users.length)
    return { usersCount }
  }
}
</script>

<style scoped>
.cards { display:flex; gap:12px }
.card { background: #fff; padding: 16px; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.06) }
</style>
