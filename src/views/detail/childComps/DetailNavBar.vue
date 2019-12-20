<template>
  <nav-bar class="nav-bar">
    <div slot="left"><img src="~assets/images/common/back.svg" alt=""
    @click="backClick">
    </div>
    <div slot="center" class="title">
        <div v-for="(item, index) in titles"
        class="title-item"
        :class="{active: currentIndex === index}"
        @click="titleClick(index)">{{ item }}
        </div>
    </div>
  </nav-bar>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name: 'DetailNavBar',
    components: {
        NavBar
    },
    data() {
        return {
            titles: ['Article', 'Paramètre', 'Commentaire'],
            currentIndex: 0
        }
    },
    methods: {
        titleClick(index) {
            this.currentIndex = index
        },
        backClick() {
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .nav-bar {
    }

    .nav-bar img {
        vertical-align: middle;
    }

    .title {
        display: flex;
    }
    
    .title-item {
        flex: 1;
        font-size: 12px;
        padding: 0 10px;
    }

    .active {
        color: var(--color-high-text);
    }
</style>