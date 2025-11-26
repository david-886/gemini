<template>
  <div class="login-page">
    <form class="login-box" @submit.prevent="doLogin">
      <h2>Sign in</h2>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Login',
  setup(_, { router }) {
    const username = ref('')
    const password = ref('')
    function doLogin() {
      // demo: accept any credentials
      router.push('/')
    }
    return { username, password, doLogin }
  }
}
</script>

<style scoped>
.login-page { display:flex; align-items:center; justify-content:center; height:100vh; background:#f3f4f6 }
.login-box { background:#fff; padding:24px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.08); width:320px; display:flex; flex-direction:column; gap:10px }
.login-box input { padding:8px; border:1px solid #ddd; border-radius:4px }
.login-box button { padding:10px; border-radius:6px; border:none; background:#0b5fff; color:#fff }
</style>
