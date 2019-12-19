import Vue from 'vue'
import VueRouter from 'vue-router'

const Acceuil = () => import('views/acceuil/Acceuil')
const Categorie = () => import('views/categorie/Categorie')
const Panier = () => import('views/panier/Panier')
const Compte = () => import('views/compte/Compte')
const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/acceuil'
  },
  {
    path: '/acceuil',
    component: Acceuil
  },
  {
    path: '/categorie',
    component: Categorie
  },
  {
    path: '/panier',
    component: Panier
  },
  {
    path: '/compte',
    component: Compte
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
