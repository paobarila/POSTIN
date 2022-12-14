<script setup>
import NavApp from '../components/NavApp.vue';
import FormApp from '../components/FormApp.vue';
</script>

<template>
  <NavApp />
 <FormApp />
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