<script setup>
import { RouterLink } from 'vue-router';
import {logOut} from '../firebase/auth.js'
import useUser from '../store/profile.js';


const user = useUser();

console.log(user)

</script>

<template>
<div class="todo p-4" >
<div class="card mx-auto shadow rounded" style="width:80%;">
  <img :src='user ? user.user.photoURL : "https://picsum.photos/200"' class="card-img-top p-2" alt="user photo">
  <div class="card-body">
    <h5 class="card-title">{{user.user.displayName}}</h5>
    <p class="card-text">{{user.user.email}}</p>
  <RouterLink to="/"><button class="btn btn-primary"  @click='logOut'>Log Out</button></RouterLink>
  </div>
</div>
</div>
</template>

<style scoped>
img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.card{
  border-color: #256d85;
}
.todo{
  min-height: 100vh;
  background-color: #fcddb0 ;
}
.btn{
  background-color: #256d85;
  color: white
}
</style>
