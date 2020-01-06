<template>
    <div>
        <div class="sub-category" v-for="(item, index) in categoryList">
            <div class="sub-category-item" :class="item.children ? 'parent' : ''">
                <div @click="toggle(item, index)" 
                    :class="{'son-active': !item.children && currentIndex === index}">
                    <p>{{ item.categorie }}</p>       
                </div>
                <span v-if="item.children">{{ icones[index] }}</span>
            </div>
            <div v-if="item.children" v-show="isOpens[index]">
                <subcategory :category-list="item.children"></subcategory>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'subcategory',
    props: {
        categoryList: {
            type: Array,
            default() {
                return []
            }
        },
        len: {
            type: Number,
            default() {
                return 0
            }
        }
    },
    data() {
        return {
            // icones: ["﹀", "﹀", "﹀", "﹀", "﹀", "﹀", "﹀"],
            icones: ["﹀", "﹀", "﹀", "﹀", "﹀", "﹀", "﹀"],
            currentIndex: -1,
            isOpens: [false, false, false, false, false, false, false]
            // isOpens: [false, false, false, false, false, false, false]
        }
    },
    computed: {
    },
    methods: {
        init() {
            // let len = this.categoryList.length
            
        },
        toggle(item, index) {
            if(this.isOpens[index] === false) {
                this.isOpens.forEach((value, indey) => {
                    this.$set(this.isOpens, indey, false)
                })
                this.$set(this.isOpens, index, true)
                this.icones.forEach((value, indey) => {
                    this.$set(this.icones, indey, "﹀")
                })
                this.$set(this.icones, index, "︿")
            }else {
                //this.isOpens[index] = !this.isOpens[index]
                this.$set(this.isOpens, index, false)
                //this.icones[index] = this.icones[index] === "﹀" ? "︿" : "﹀"
                this.$set(this.icones, index, "﹀")
            }
            this.currentIndex = index
            if(!item.children) {
                this.$bus.$emit('getGoods', item.categorie)
            }
        }
    }
}
</script>
<style scoped>
    .sub-category {
        width: 100px;
    }

    .sub-category-item {
        width: 100px;
        height: 100px;
        font-size: 14px;
        color: #666666;
        background-color: #f6f6f6;
        text-align: center;
        line-height: 30px;
        padding-top: 20px;
    }

    .sub-category-item p {
        font-size: 14px;
    }

    .son-active {
        color: #ff5777;
        border-left: 3px solid #ff5777;
        background-color: #ffffff;
    }

    .parent {
        font-weight: 700;
    }
</style>
// ﹀︿