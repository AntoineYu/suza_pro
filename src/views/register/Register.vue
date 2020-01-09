<template>
  <div class="register">
      <nav-bar class="register-nav">
          <div slot="center">Register</div>
      </nav-bar>
      <div class="content">
        <van-field 
            v-model="email"
            required
            label="Email"
            clearable
            :error-message="usermail"
            placeholder="Entrer votre email" 
        />
        <van-field 
            v-model="password"
            required
            type="text"
            label="Mot de passe"
            clearable
            :error-message="userpass"
            placeholder="Entrer votre mot de passe" 
        />
        <van-field 
            v-model="code"
            required
            center
            clearable
            placeholder="Entrer votre code de vérification" 
        >
        <van-button 
            :disabled="flag" 
            slot="button" 
            size="small" 
            type="primary"
            @click="change">
            {{ buttonmsg }}
        </van-button>
        </van-field>
        <van-button 
            type="primary" 
            :loading="loading" 
            size="large"
            loading-text="Register..."
            :disabled="isDisabled"
            @click="register">
              S'inscrire
        </van-button>
        <van-divider @click="toLogin">Se connecter</van-divider>
      </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"

import {sendCode, check_register} from "network/login"
export default {
    name: 'Register',
    components: {
      NavBar
    },
    data() {
      return {
        email: '',
        password: '',
        isDisabled: false,
        loading: false,
        buttonmsg: 'Envoyer le code',
        code: '',
        flag: false,
        adminCode: '',
        formData: {}
      }
    },
    computed: {
        usermail() {
            if(this.email === "") {
                return '' 
            }else if(!/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(this.email)) {
                return "Erreur de format"
            }else {
                return ''
            }
        },
        userpass() {
            if(this.password === "") {
                return ""
            }else if(this.password.length < 6) {
                return "Au moins 6 caractères"
            }else {
                return ""
            }
        }
    },
    methods: {
      sendCode(email) {
        sendCode(email).then(res => {
          if(res === 0) {
            this.$toast.show("Échec de l'envoi")
          }else {
            this.adminCode = res
          }
        })
      },
      check_register(form) {
        check_register(form).then(res => {
          if(res === 1) {
            this.$toast.show("Déjà existe, veuillez connecter")
          }else if(res === 0) {
            this.$toast.show("échoué")
          }else {
            this.$toast.show("Enregistré avec succès")
            this.$router.push('/login')
          }
        })
      },
      register() {
        if(this.usermail === 'Erreur de format' || this.email === '') {
            this.$toast.show("Erreur de email")
            return
        }
        if(this.password === '' || this.userpass === "Au moins 6 caractères") {
            this.$toast.show("Erreur de mot de passe")
            return
        }
        if(this.code === '' || this.code !== this.adminCode) {
            this.$toast.show("Erreur de code de vérification")
            return
        }
        this.realR()
      },
      realR() {
        this.isDisabled = true
        this.loading = true
        this.formData = {
          "userEmail": this.email,
          "password": this.password
        }
        this.check_register(this.formData)
      },
      toLogin() {
        this.$router.replace('/login')
      },
      change() {
        let time = 4
        let timer 
        timer = setInterval(() => {
          time --
          if(time == 0) {
            clearInterval(timer)
            this.flag = false
            this.buttonmsg = 'Envoyer le code'
            return
          }
          this.flag = true
          this.buttonmsg = 'Après ' + time + ' secondes'
        }, 1000)
        this.getCode()
      },
      getCode() {
        if(this.usermail === 'Erreur de format' || this.email === '') {
          this.$toast.show("Erreur de email", 2000)
        }else if(this.password === '' || this.userpass === "Au moins 6 caractères") {
          this.$toast.show("Erreur de mot de passe", 2000)
        }else {
          this.sendCode(this.email)
        }
      }
    }
}
</script>
<style scoped>
  .register {
      width: 100%;
      color: #333333;
      font-size: 14px;
  }

  .register-nav {
      color: white;
      background-color: var(--color-tint);
  }
</style>