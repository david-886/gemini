<template>
  <div>
    <h1>Users</h1>
    <table class="users-table">
      <thead>
        <tr><th>ID</th><th>Name</th><th>Email</th></tr>
      </thead>
      <tbody>
        <tr v-for="u in users" :key="u.id">
          <td>{{ u.id }}</td>
          <td>{{ u.name }}</td>
          <td>{{ u.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useUserStore } from '../store/user'

export default {
  name: 'Users',
  setup() {
    const store = useUserStore()
    const users = computed(() => store.users)
    return { users }
  }
}
</script>

<style scoped>
.users-table { width:100%; border-collapse: collapse }
.users-table th, .users-table td { text-align:left; padding:8px; border-bottom:1px solid #eee }
</style>
