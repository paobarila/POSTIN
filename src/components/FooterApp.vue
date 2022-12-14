<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>
    <nav class="footer">
<div class="d-flex justify-content-evenly w-100">
        <RouterLink to="/"><i class="bi bi-house-door fs-2 m-4"></i></RouterLink>
        <RouterLink to="/postin"><i class="bi bi-chat-square-heart fs-2 m-4"></i></RouterLink>
        <RouterLink to="/login"><i class="bi bi-person fs-2 m-4"></i></RouterLink>
        <RouterLink to="/contact"><i class="bi bi-envelope-paper-heart fs-2 m-4"></i></RouterLink>
    </div>
    </nav>
</template>

<style scoped>
div{
    align-items: flex-end;
    max-height: 10vh;
    background-color: #4d5061;
    bottom:0;
    position:fixed;
}

i {
    color: white;
}

</style>
