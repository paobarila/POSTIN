<script setup>
import { RouterLink } from 'vue-router';
import user from '../store/profile.js'
import {logOut} from '../firebase/auth.js'


</script>

<template>
<div >
<div class="card mx-auto mt-5" style="width:80%;">
  <img :src='user?user.photoURL:"https://picsum.photos/200"' class="card-img-top" alt="user photo">
  <div class="card-body">
    <h5 class="card-title">{{user.displayName}}</h5>
    <p class="card-text">{{user.email}}</p>
  <RouterLink to="/"><button  @click='logOut'>Log Out</button></RouterLink>
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
</style>
