<script setup>
const props = defineProps({  
    post: {},
    typeof: Object
})//props me traigo posteos ok

</script>

<template>
<div class="cardContiner mt-3 mb-3">
    <div class="card shadow-lg rounded">
        <div class="cardHeader p-1">
            <img :src="post.photo ? post.photo : 'https://picsum.photos/200'" alt="photo" />
            <h4>{{ post.name }}</h4>
        </div>
        <div class="cardContent">
            <h3 class="text-center">{{post.title}}</h3>
            <p>{{ post.body }} </p>
            
        </div>
        </div>
    </div>



<!--<div class="card d-flex flex-colum justify-content-center flex-wrap gap-3">
  <div class="card mb-3 shadow-lg rounded" style="width:21rem;">
  <img src="https://picsum.photos/200" class="card-img-top" alt="photo random">
  <div class="card-body">
    <h5 class="card-title">aca tittle</h5>
    <p class="card-text">acá va el texto del post</p>
    <p class="card-text"><small class="text-muted">acá va la fecha</small></p>
    <div class="d-flex justify-content-end m-2 gap-2">
    <i class="bi bi-heart fs-4"></i>
    <i class="bi bi-chat fs-4"></i>
  </div> 
  </div>

</div>
</div>-->
</template>
<style scoped>
button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #ccc;
    cursor: pointer;
}
.card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 500px;
    transition: 0.5s all;
}
.cardHeader {
    display: flex;
    width: 100%;
    height: 4rem;
    align-items: center;
    gap: 3rem;
}
h3 {
    font-weight: bold;
    text-align: center;
}
.cardHeader img {
    height: 100%;
    border-radius: 50%;
    border: 2px solid palevioletred;
}
.cardContent {
    display: flex;
    box-shadow: 2px 2px pink;
    border-radius: 10px;
    margin: 5px 0;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
}
.card button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0.5rem;
    background-color: red;
    color: white;
    border: none;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
}
.muted {
    color: gray;
    font-size: 0.7rem;
    text-align: end;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 0.6rem;
    opacity: 0.5;
}
@media screen and (max-width: 600px) {
    .card {
        width: 95%;
    }}
</style>