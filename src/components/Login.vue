<template>
  <div style="width: 50%;margin:0 auto">
<el-form :model="user" status-icon :rules="loginRules" ref="loginForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input type="text" v-model="user.username" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="password">
    <el-input type="password" v-model="user.password" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
    <el-button @click="resetForm('loginForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>
<script>
  import Cookie from 'js-cookie'
  export default {
    data() {
      return {
        user: {
          username: '',
          password: ''
        },
        loginRules: {
          //输入校验
          username: [{
            required: true,
            message: '请填写用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请填写密码',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        let that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.api.get('/sys/login',{
              params: {
                username: this.user.username,
                password: this.user.password
            }}).then((res) => {
              Cookie.set('token', res.data)
              Cookie.set('username', that.user.username)
              this.$router.push('/sys/permissions',{
                params: {
                  pageNum: 1,
                  pageSize: 8

                }
              });
            }).catch(function (error) {
                console.error(error);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


