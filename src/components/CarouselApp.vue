<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
   <div class="hola">
<h1 class="text-center diplay-5 fst-italic">Welcome to POSTIN</h1>
<h2 class="text-center mb-5 display-5 fst-italic text-wrap">Find post about everything that interests you:</h2>
</div>
<article class="seccion1 d-flex text-end flexwrap-wrap justify-content-evenly p-2">
 <RouterLink to="/postin"> <img class="circulo" src="../assets/images/yoga.png" alt="yoga"></RouterLink>
<div> <h4 class="text-start display-6"> Life Style:</h4> <p class="text-center fs-5 fst-italic">Tips to improve your health, physical and mental.</p></div>
</article>
<article class="seccion1 d-flex text-end flexwrap-wrap justify-content-evenly p-2">
  <div> <h4 class="text-start display-6">Home deco:</h4> <p class="text-center fs-5 fst-italic">How to intervene in your space, make it yours, with your hands.</p></div>

  <RouterLink to="/postin"><img class="circulo mb-3" src="../assets/images/Homedeco.png" alt="deco"></RouterLink>
</article>

<article class="seccion1 d-flex text-end flexwrap-wrap justify-content-evenly p-2">
  <div class="mt-2"><h4 class="text-start display-6"> Recipes:</h4> <p class="text-center fs-5 fst-italic">Conscious cooking, for your health, the recipes you were looking for.</p></div>
  <RouterLink to="/postin"><img class="circulo" src="../assets/images/recipies.png" alt="cook"></RouterLink>
</article>
<article class="seccion1 d-flex text-end flexwrap-wrap justify-content-evenly aling-items-center p-2">
  <RouterLink to="/postin"><img class="circulo" src="../assets/images/office.png" alt="yoga"></RouterLink>
<div class="p-2 mt-3"> <h4 class="text-start display-6">Home Office:</h4> <p class="text-center fs-5 fst-italic">the new way of working.</p></div>

</article>
<p class=" be fs-1 text-wrap text-center mt-5"> Be part of a community, comment, enjoy and do it your way.</p>
<img class="logoPie"   src="../assets/images/postin.png" alt="logoCompleto" srcset="">
 
  
</main>
</template>
<style scoped>

.hola{
margin-top: 10rem;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
color:#d61c4e;
font-variant: initial;

}

h2{
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
  color: #495c83;
}
h4{
color:#d61c4e
}
.be{
  color:#d61c4e;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
padding-left: 2rem;
padding-right: 2rem;
}


.circulo{
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
}
.circulo:hover{
  transform:scale(1.15) ;
}
.logoPie{
  width: 100%;
  height: 100%;
  background-color: #fcdd80;
}
</style>