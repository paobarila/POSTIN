<script setup>

import { ref } from '@vue/reactivity';
import { addComment } from '../firebase/comment.js'
import { useReadPost } from '../store/readPost.js'

// Store
const post = useReadPost();

// State
const message = ref("");
const nombre = ref("");
const email = ref("");


const addNewComment = () => {
    const newComment = {
        id: crypto.randomUUID(),
        message: message.value,
        email: email.value,
    }

    addComment(newComment)
    message.value = ''
    email.value = ''
}

console.log(post.arrayPost)
</script>

<template>
    <div class="row p-2">
        <div class="col-lg-6 mb-5">
            <div class="card p-2 shadow rounded">
                <div class="card-body">

                    <div class="form-floating mb-3">
                        <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput"></label>
                    </div>
                    <div class="form-floating">
                        <input v-model="nombre" type="name" class="form-control" id="floatingPassword" placeholder="Name">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea v-model="message" class="form-control" placeholder="comment" @keyup.enter="addNewComment" rows="3"></textarea>
                    </div>
                    <a class="btn d-grid gap-2 col-6 mx-auto mt-4" id="sub" @click.prevent="addNewComment">Submit</a>
                </div>
            </div>
        </div>
        </div>

        <h2>Comentarios agregados</h2>
        <div class="card-container">
            <div class="card" v-for="comment in post.arrayPost" :key="comment.id">
                <div class="contenido">
                    <p>{{ comment.message }}</p>
                </div>
<div>
    <p>{{ comment.email }}</p>
</div>
            </div>

        </div>
</template>

<style scoped>

</style>