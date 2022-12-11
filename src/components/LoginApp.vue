
<script setup>
import { loginGoogle } from '../firebase/auth.js'
import user from '../store/profile.js'
import { RouterLink } from 'vue-router'

</script>

<template>


  <div>
    <article class="encabezado d-fkex flex-column mb-4 mx-auto" style="width:200px">
      <img class="postin" src="../assets/images/dibujo postin.png" alt="">
      <h1 class="marca display-2 text-center"> POSTIN </h1>
      <h2 class="log display-3 text-center">iniciate sesion</h2>
    </article>
    <div class="row p-2">
      <div class="col-lg-6 mb-5">
        <div class="card p-2">
          <div class="card-body">

            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <a class="btn d-grid gap-2 col-6 mx-auto mt-4">Submit</a>
          </div>
        </div>
      </div>
      <p class="text-center"> or </p>
    </div>
  </div>
  <div class="d-flex flex-column gap-4  mx-auto p-4">
    <button class="btn-g btn-primary" type="button" @click="loginGoogle">Inicia con Google</button>
    <button class="btn btn-primary" type="button"> Inicia con Facebbok</button>

    <div class="reg d-flex justify-content-center gap-2">
     <!-- <RouterLink to="/register">
        <p> Are you not registered yet? Sign up here.</p>
      </RouterLink>-->
    </div>
    <div>

</div>
  </div>
</template>
<style scoped>
img {
  height: 200px;
}

.btn {
  background-color: #256d85;
  color: white
}

.cajita {
  background-color: #d61c4e;
}

h2 {
  margin-left: 4rem;
  margin-right: 4rem;
}

form,
h1 {
  padding-bottom: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
