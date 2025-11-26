<template>
  <div class="admin-root">
    <aside class="sidebar">
      <div class="logo">Admin</div>
      <nav>
        <router-link to="/">Dashboard</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/settings">Settings</router-link>
      </nav>
    </aside>

    <div class="main-area">
      <header class="topbar">
        <div>Welcome, Admin</div>
        <div class="actions">
          <button @click="logout">Logout</button>
        </div>
      </header>

      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
  methods: {
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.admin-root { display: flex; height: 100vh; font-family: Arial, Helvetica, sans-serif; }
.sidebar { width: 220px; background: #0f1724; color: #fff; padding: 20px; box-sizing: border-box; }
.sidebar .logo { font-weight: bold; font-size: 1.2rem; margin-bottom: 1rem }
.sidebar nav { display:flex; flex-direction:column; gap: 10px }
.sidebar a { color: #cbd5e1; text-decoration: none }
.sidebar a.router-link-active { color: #fff; font-weight: 600 }
.main-area { flex: 1; display:flex; flex-direction:column }
.topbar { height: 60px; background: #fff; display:flex; align-items:center; justify-content:space-between; padding: 0 20px; box-shadow: 0 1px 0 rgba(0,0,0,0.06) }
.content { padding: 20px; overflow:auto }
</style>
