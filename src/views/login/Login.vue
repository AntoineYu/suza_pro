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
        <!-- <van-checkbox @click="isRememeber" class="checkbox" v-model="checked" checked-color="#07c160" shape="square">
            Se souvenir de moi
        </van-checkbox> -->
        <van-button 
            class="button"
            type="primary" 
            :loading="loading" 
            size="large"
            loading-text="Se connecter..."
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

import { check_login } from "network/login"
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
            loading: false,
            formData: {},
            checked: false
        }
    },
    deactivated() {
        this.isDisabled = false
        this.loading = false
        this.email = ""
        this.password = ""
    },
    methods: {
        check_login(form) {
            check_login(form).then(res => {
                if(res === 1) {
                    this.$toast.show("Compte n\'éxiste pas, veuillez vous inscrire", 2000)
                    this.email = ""
                    this.password = ""
                }else if(res === 0) {
                    this.$toast.show("échoué", 2000)
                }else {
                    let obj = {
                        username: res.uname,
                        phone: res.uphone
                    }
                    localStorage.setItem("login_info", JSON.stringify(obj))
                    localStorage.setItem("isLogin", 'ok')
                    setTimeout(() => {
                        this.$router.push("/Compte")
                    }, 3000)
                }
            }).catch(err => {
                console.log(err)
            })
        },
        login() {
            this.isDisabled = true
            this.loading = true
            this.formData = {
                userEmail: this.email,
                password: this.password
            }
            this.check_login(this.formData)
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

  /* .checkbox {
      margin-top: 20px;
      margin-left: 10px;
  } */

  .button {
      margin-top: 20px;
  }
</style>