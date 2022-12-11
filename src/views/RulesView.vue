<script setup>
import NavApp from '../components/NavApp.vue';
import SocialApp from '../components/SocialApp.vue';
import ListApp from '../components/ListApp.vue';

</script>


<template>
<NavApp />
<ListApp />
<SocialApp />
  </template>
   
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>