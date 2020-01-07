<template>
  <div class="login">
      <nav-bar class="login-nav">
          <div slot="center">Login</div>
      </nav-bar>
      <!-- <div :class="{ error: !formData.username }" class="login-item">
          <label for="username">E-mail: </label>
          <input 
            type="text"
            id="username"
            placeholder="Entrer votre email">
      </div>
      <div :class="{ error: !formData.password }" class="login-item">
          <label for="password">Mot de passe: </label>
          <input 
            type="text"
            id="password"
            placeholder="Entrer votre mot de passe">
      </div> -->
      <van-cell-group>
          <van-row>
              <van-col offset="2" span="10">
                  <van-field 
                    v-model="email"
                    required
                    label="Email :"
                    label-width=150px
                    border=true
                    placeholder="Entrer votre email" 
                    />
              </van-col>
          </van-row>
          
          <van-row>
              <van-col offset="2" span="10">
                  <van-field 
                    v-model="password"
                    required
                    label="Mot de passe :"
                    label-width=150px
                    border=true
                    placeholder="Entrer votre mot de passe" 
                    />
              </van-col>
          </van-row>
      </van-cell-group>
      <van-row>
          <van-col offset="2" span="4" class="btn">
              <van-button class="login-btn-login" type="primary" plain @click="goLogin" size="small">
              Se connecter
              </van-button>
          </van-col>
          <van-col offset="6" span="4" class="btn">
              <van-button class="login-btn-register" type="info" plain @click="goRegister" size="small">
              S'inscrire
              </van-button>
          </van-col>
      </van-row>
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
            formData: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        goLogin() {
            if(!this.formData.email) {
                this.$notify({
                    type: "danger",
                    message: "E-mail ne peut pas être vide"
                })
            }else if(!this.formData.password) {
                this.$notify({
                    type: "danger",
                    message: "Mot de passe ne peut pas être vide"
                })
            }else {
                console.log('Traiter...');
            }
        },
        goRegister() {
            this.$router.push('/register')
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
    .login-btn-login {
        width: 150px;
    }

    .login-btn-register {
        width: 150px;
    }

    .btn {
        display: block;
    }
</style>