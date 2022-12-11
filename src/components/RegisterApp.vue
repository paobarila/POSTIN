<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        <article class="encabezado d-fkex flex-column mb-4 mx-auto" style="width:200px">
            <img class="postin" src="../assets/images/dibujo postin.png" alt="">
            <h1 class="marca display-2 text-center"> POSTIN </h1>
            <h2 class="log display-3 text-center">Register</h2>
        </article>
        <div class="row p-2">
            <div class="col-lg-6 mb-5">
                <div class="card p-2">
                    <div class="card-body">
                        <div class="form-floating mb-3">
                            <input type="name" class="form-control" id="floatingInput" placeholder="First Name">
                            <label for="floatingInput">First Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="lastname" class="form-control" id="floatingInput" placeholder="Last Name">
                            <label for="floatingInput">Last Name</label>
                        </div>
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
        </div>
        </div>
</template>

<style scoped>

</style>