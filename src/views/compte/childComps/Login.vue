<template>
  <div class="login">
      <van-uploader :after-read="afterRead">
          <div class="user-pic">
              <van-image :src="pic" class="user-pic-img" fit="cover" round></van-image>
          </div>
      </van-uploader>
      <div class="user-info" @click="curLogin ? '' : goLogin()">
          <p v-if="curLogin">{{ username }}</p>
          <p v-else>Se connecter / S'inscrire</p>
          <div class="phone-num">
              <img 
                src="~assets/images/compte/phone.png" 
                alt=""
                class="icon-phone">
                <p v-if="curLogin">{{ phone | cache}}</p>
                <p v-else></p>
          </div>
      </div>
      <div class="profile-arrow-right">
          <img src="~assets/images/compte/arrow_right.png" alt="">
      </div>
  </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            pic: require("assets/images/compte/user.png")
        }
    },
    props: {
        curLogin: {
            type: Boolean,
            default() {
                return false
            }
        },
        username: {
            type: String,
            default() {
                return ""
            }
        },
        phone: {
            type: String,
            default() {
                return ""
            }
        }
    },
    filters: {
        cache(val) {
            val = "" + val
            return val.substr(0, 2) + "****" + val.substr(6)
        }
    },
    methods: {
        goLogin() {
            this.$emit("goLogin")
        },
        afterRead(file) {
            this.pic = file.content
            localStorage.setItem("user_pic", JSON.stringify(this.pic))
        }
    }
}
</script>
<style scoped>
    .login {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 90px;
        padding: 0 20px;
        background-color: #ff8198;
    }

    .user-pic {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .user-pic .user-pic-img {
        display: block;
        width: 60px;
        height: 60px;
    }

    .user-info {
        color: white;
        font-size: 16px;
        margin-left: 20px;
    }

    .user-info p:last-child {
        margin-left: 3px;
    }

    .user-info .phone-num {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin-top: 8px;
    }

    .icon-phone {
        display: inline-block;
        width: 16px;
        height: 16px;
    }

    .profile-arrow-right {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10px;
    }

    .profile-arrow-right img {
        display: inline-block;
        width: 20px;
        height: 20px;
    }
</style>