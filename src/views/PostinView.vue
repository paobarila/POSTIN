<script setup>
import {ref , onMounted} from 'vue'
import NavApp from '../components/NavApp.vue';
import FeatureApp from '../components/FeatureApp.vue';
import NuevoPostitem from '../components/NuevoPostitem.vue';
import {posts} from '../store/postStore.js';
import NewPost from '../components/NewPost.vue';
import {getPosts} from '../firebase/posts.js';
import SocialApp from '../components/SocialApp.vue'

onMounted(() => {
  getPosts()
})

/*const name= ref("")
const title= ref("")
const body=ref("")*/

//const updataData =computed (()=>{
  //if(user.value){
    //name.value = user.value.displayName
  //}
//})

/*const posts = ref([
{
  id:1,
    name:"pao",
   photo: null,
     title:"Titulo 1",
     body: "texto aleatorio largo largo largo",
     date:Date.now()
  },
  {
    id:2,
    name:"pao 2",
    photo: null,
     title:"Titulo 1",
     body: "texto aleatorio largo largo largo",
     date:Date.now()
  },
  {
    id:3,
    name:"pao 3",
    photo: null,
     title:"Titulo 1",
     body: "texto aleatorio largo largo largo",
     date:Date.now()
  },
])*/
</script>

<template>
<NavApp />
<main>
  <div class="todo">
    <div>
        <h1 class="titutloLast text-center pt-3 mb-3 mx-auto"> Posts in POSTIN </h1> 
    </div>
    <div>
      <h2 class="titutloLast text-center mb-3 mx-auto">Add New Post:</h2>
      <NewPost />
    </div> 
    <div class="cardContainer">
      <NuevoPostitem v-for="post in posts" :post="post" :key="post.id" />
    </div>
    </div>
  </main>
<SocialApp />

</template>

<style scoped>
.todo{
margin-top: 8rem;
background-color: #fcddb0;
}
main{
  width: 100%;
  padding: 0.5rem 0;
}
.cardContainer{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>