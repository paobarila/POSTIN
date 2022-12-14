
<script setup>
import { loginGoogle } from '../firebase/auth.js'
import useUser from '../store/profile.js'
import { RouterLink } from 'vue-router'

</script>

<template>


  <div class="todo">
    <article class="encabezado d-fkex flex-column mb-4 mx-auto" style="width:200px">
      <img class="postin" src="../assets/images/dibujo postin.png" alt="logo">
      <h1 class="marca display-2 text-center mx-auto"> POSTIN </h1>
      <h2 class="log display-4 text-center mx-auto">Login In:</h2>
    </article>
    <div class="row p-2">
      <div class="col-lg-6 mb-5">
        <div class="card p-2 shadow rounded">
          <div class="card-body">

            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <a class="btn d-grid gap-2 col-6 mx-auto mt-4" id="sub">Submit</a>
          </div>
        </div>
      </div>
      <p class="text-center fs-2"> or </p>
    </div>
  
  <div class="abajo ">
  <div class="login d-flex flex-column gap-4  mx-auto p-4">
    <button class="btn btn-primary" type="button" @click="loginGoogle">Log in with Google</button>
    <button class="btn btn-primary" type="button" id="face"> Log in with Facebbok</button>

    <div class="reg d-flex justify-content-center gap-2">
     <RouterLink to="/register">
        <p class="text-center text-wrap mx-auto"> Are you not registered yet? Sign up here.</p>
      </RouterLink>
      <div class="profile mx-auto">
      <RouterLink v-if="useUser" to="/profile"><button class="btn btn-primary mx-auto text-center" id="face">Go to profile to logout</button></RouterLink>
    </div>
   
    </div>
    <div>

</div>
</div>
  </div>
</div>
</template>
<style scoped>
.todo{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #fcddb0;
}
input{
    border-inline-color:#256d85 ;
    border-block-color: #256d85;
}
img {
  height: 200px;
}
#sub{
  background-color: #256d85;
  color: white
}
#face {
  background-color: #256d85;
  color: white
}
.btn{
  background-color: red;
  color: white
}
.card{
  border-color: #256d85;
}
.cajita {
  background-color: #d61c4e;
}
.reg{
  flex-direction: column;
}

</style>
