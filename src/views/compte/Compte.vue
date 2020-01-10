<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">Votre compte</div>
    </nav-bar>
    <scroll class="content">
      <login 
        :cur-login="isLogin"
        :phone="phone"
        :username="username"
        @goLogin="goLogin"
      />
      <money></money>
      <div class="line"></div>
      <profile-list @logOut="logOut" :is-login="isLogin"></profile-list>
    </scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"

import Login from "./childComps/Login"
import Money from "./childComps/Money"
import ProfileList from "./childComps/ProfileList"
export default {
    name: 'Compte',
    components: {
      NavBar,
      Scroll,
      Login,
      Money,
      ProfileList
    },
    data() {
      return {
        isLogin: false,
        username: "",
        phone: ""
      }
    },
    methods: {
      goLogin() {
        this.$router.push("/login")
      },
      logOut() {
        this.isLogin = false
        localStorage.removeItem("login_info")
        localStorage.removeItem("user_pic")
        setTimeout(() => {
          this.$router.replace('/compte')
        }, 1000)
      }
    },
    activated() {
      let login_info = localStorage.getItem("login_info")
      let user_pic = localStorage.getItem("user_pic")
      if(login_info) {
        let login = JSON.parse(login_info)
        this.username = login.username
        this.phone = login.phone
        this.isLogin = true
      }
      if(user_pic) {
        this.$refs.login.defaultPic = JSON.parse(user_pic)
      }
    }
}
</script>
<style scoped>
  .profile {
    width: 100%;
  }

  .nav-bar {
    font-weight: 600;
    color: white;
    background-color: var(--color-tint)
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
  }

  .line {
        width: 100%;
        height: 10px;
        background-color: #eeeeee;
  }
</style>