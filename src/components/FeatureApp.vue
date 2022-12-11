<script setup>
</script>

<template>
<div class="caja3">
  <nav class="navbar p-5">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
<div>
  <h1 class="titutloLast text-center mb-3 m-1">Latest Posts</h1>
<div class="cardlast d-flex flex-colum justify-content-center flex-wrap gap-3">
  <div v-for="i in 3" class="card mb-3" style="width:21rem;">
  <img src="https://img.freepik.com/free-photo/older-couple-doing-yoga-outdoors_23-2148729839.jpg?w=740&t=st=1669668408~exp=1669669008~hmac=f6c53e53af30f8df2911a47712789860e5ec4fc7ebb34d4028a78522a85bcb4e" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <div class="d-flex justify-content-end m-2 gap-2">
    <i class="bi bi-heart-fill fs-4"></i>
    <i class="bi bi-chat fs-4"></i>
  </div> 
  </div>

</div>
</div>
    <h1 class="tituloFeat mb-3 text-center mt-5">Featured Posts</h1>
    <div class="feat d-flex flex-colum justify-content-center flex-wrap gap-3">
 
    <div v-for="i in 6" class="card" style="width: 24rem;">
  <img src="../assets/images/otro3.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
    <div class="d-flex justify-content-end m-2 gap-2 p-2">
    <i class="bi bi-heart-fill fs-4"></i>
    <i class="bi bi-chat fs-4"></i>
  </div> 
  </div>
</div>
</div>
<h1 class="Upcoming mt-5 mb-3 text-center">Upcomings Posts</h1>
<div class="cardUp d-flex flex-colum justify-content-center flex-wrap gap-3">
<div v-for="i in 3" class="card text-center mb-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
  </div>
</div>
</div>
</div>
</div>


</template>
<style scoped>
.caja3{
  background-color: #f1d3b3;
}
.cardlast{

  align-items: center;
}
</style>