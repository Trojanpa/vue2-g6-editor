<template>
  <div class="login-container">
    <h2>这是Login页面。</h2>
    <el-table :data="tableData" border>
      <el-table-column label="姓名">
        <template slot-scope="scope">
          <el-form :model="scope.row" :rules="rules">
            <el-form-item prop="username">
              <el-input v-show="true" v-model="scope.row.username" placeholder="请输入真实姓名" />
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="年龄">
        <template slot-scope="scope">
          <el-form :model="scope.row" :rules="rules">
            <el-form-item prop="age">
              <el-input v-show="true" v-model="scope.row.age" placeholder="请输入年龄" />
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="toHome">Go to Home</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      tableData: [
        {
          username: 'hoo1',
          age: 20,
        },
        {
          username: 'hoo2',
          age: 21,
        },
        {
          username: 'hoo3',
          age: 22,
        },
        {
          username: 'hoo4',
          age: 23,
        },
      ],
      rules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' },
        ],
        age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
      },
    };
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
