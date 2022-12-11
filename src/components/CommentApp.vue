<script setup>

import {addComment} from '../firebase/comment.js'

const addNewComment = () =>{
    const newComment = {
        id: crypto.randomUUID(),
        message: message.value,
    }
    console.log(newComment);
    addComment(newComment)
    message.value= ''
}
</script>

<template>
    <form>
        <input v-model="nombre" type="text" placeholder="Name"/>
        <input  v-model="email"  type="email" placeholder="email"/>
    <textarea v-model="message" placeholder="comment" @keyup.enter="addNewComment"></textarea>
    <button @click.prevent="addNewComment">Submit</button>
    </form>
    <h2>Comentarios agregados</h2>
    <div class="card-container">
        <div class="card" v-for="comment in comments" key="comment.id">
            <h3> Author: {{comment.nombre}}</h3>
            <div class="contenido">
                <p>{{comment.message}}</p>

            </div>

        </div>

    </div>
</template>

<style scoped>

</style>