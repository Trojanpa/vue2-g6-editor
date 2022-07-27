<template>
  <div class="login-container">
    <h2>这是Login页面。</h2>
    <el-button type="primary" @click="toHome">Go to Home</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {};
  },
  methods: {
    toHome() {
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
