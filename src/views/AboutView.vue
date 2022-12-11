<script setup>


import NavApp from '../components/NavApp.vue';
import SocialApp from '../components/SocialApp.vue';
import AboutApp from '../components/AboutApp.vue';

</script>
<template>
   <NavApp />
  <AboutApp />
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
