<template>
  <div class="login">
      <nav-bar class="login-nav">
          <div slot="center">Login</div>
      </nav-bar>
      <div class="content">
        <van-field 
            v-model="email"
            required
            label="Email"
            clearable
            placeholder="Entrer votre email" 
        />
        <van-field 
            v-model="password"
            required
            type="password"
            label="Mot de passe"
            clearable
            placeholder="Entrer votre mot de passe" 
        />
        <van-button 
            type="primary" 
            :loading="loading" 
            size="large"
            loading-text="Login..."
            :disabled="isDisabled"
            @click="login">
              Se connecter
        </van-button>
        <van-divider @click="toRegister">S'inscrire</van-divider>
      </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"

export default {
    name: 'Login',
    components: {
        NavBar
    },
    data() {
        return {
            email: '',
            password: '',
            isDisabled: false,
            loading: false
        }
    },
    methods: {
        login() {
            console.log('发送网络请求验证用户');
        },
        toRegister() {
            this.$router.replace('/register')
        }
    }
}
</script>
<style scoped>
  .login {
      width: 100%;
      color: #333333;
      font-size: 14px;
  }

  .login-nav {
      color: white;
      background-color: var(--color-tint);
  }
</style>