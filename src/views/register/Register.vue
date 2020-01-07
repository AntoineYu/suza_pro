<template>
  <div class="register">
    <nav-bar class="login-nav">
      <div slot="center">S'inscrire</div>
    </nav-bar>
    <div class="login-item">
      <label for="username">Email: </label>
      <input 
            type="text"
            id="username"
            placeholder="Entrer votre email">
    </div>
    <div class="login-item">
          <label for="password">Mot de passe: </label>
          <input 
            type="text"
            id="password"
            placeholder="Entrer votre mot de passe">
    </div>
    <div class="login-item">
          <label for="phone">Mot de passe: </label>
          <input 
            type="text"
            id="password"
            placeholder="Entrer votre téléphone">
    </div>
    <div class="login-btn">
      <van-button class="login-btn-register" type="info">
        S'inscrire
      </van-button>
      <van-button class="login-btn-login" plain type="info">
        Se connecter
      </van-button>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
export default {
    name: 'Register',
    components: {
      NavBar
    },
    data() {
      return {
        formData: {
          username: "",
          password: "",
          phone: ""
        }
      }
    },
    methods: {
      goRegister() {
        if(!this.formData.username) {
          this.$notify({
            type: "danger",
            message: "E-mail ne peut pas être vide"
          })
        }else if(!this.formData.password) {
          this.$notify({
            type: "danger",
            message: "Mot de passe ne peut pas être vide"
          })
        }else if(!this.formData.phone) {
          this.$notify({
            type: "danger",
            message: "Téléphone ne peut pas être vide"
          })
        }else {
          console.log('Traiter...');
        }
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

  .login-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 340px;
      margin: 30px auto;
  }

  .login-item label {
      display: block;
      font-size: 16px;
      width: 70px;
  }

  .login-item input {
      display: block;
      width: 270px;
      height: 36px;
      line-height: 36px;
      outline: none;
      background: none;
      border: 1px solid #cccccc;
      border-radius: 5px;
      padding-left: 10px;
      font-size: 14px;
  }

  .login-item input:focus {
      border: 1px solid #4098ef;
  }

  .login-item.error input:focus {
      border: 1px solid red;
  }

  .login-item input::placeholder {
      color: #999999;
  }

  .login-btn {
      display: flex;
      justify-content: space-between;
      width: 340px;
      margin: 0 auto;
  }
</style>