<template>
  <div class="profile-list">
      <div class="profile-list-item">
          <img src="~assets/images/compte/message.png" alt="">
          <span>Mon message</span>
      </div>
      <div class="profile-list-item">
          <img src="~assets/images/compte/gouwuche.png" alt="">
          <span>Mon panier</span>
      </div>
      <div class="profile-list-item">
          <img src="~assets/images/compte/vip.png" alt="">
          <span>Mon carte</span>
      </div>
      <div class="profile-list-item">
          <img src="~assets/images/compte/download.png" alt="">
          <span>Télécharger APP</span>
      </div>
  </div>
</template>
<script>
export default {
    name: 'ProfileList',
}
</script>
<style scoped>
    .profile-list {
        width: 100%;
    }

    .profile-list-item {
        display: flex;
        align-items: center;
        height: 45px;
        padding-left: 20px;
    }

    .profile-list-item img {
        margin-right: 10px;
        width: 24px;
        height: 24px;
    }

    .profile-list-item span {
        width: 100%;
        line-height: 45px;
        font-size: 15px;
        color: #333333;
        border-bottom: 1px solid #eeeeee;
    }
    
</style>