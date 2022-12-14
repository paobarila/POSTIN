<script setup>
import { ref } from 'vue'
import { addPost } from '../firebase/posts.js'



const name = ref('')
const email = ref('')
const body = ref('')
const title = ref('')

const addNewPost = () => {
    let newPost = {
        id: crypto.randomUUID(),
        date: Date.now(),
        name: name.value,
        email: email.value,
        body: body.value,
       //photo: user.value.photoURL,
        title: title.value
    }
  addPost(newPost)
    body.value = ''
    title.value = ''
    console.log(newPost)
}
</script>

<template>
    <div class="card shadow rounded w-75 d-flex justify-content-center mx-auto mb-5">
        <form class="posteo  d-flex flex-column ">
            <input v-model="name" type="text" placeholder=" Name">
            <input v-model="title" type="text" placeholder=" Same Title">
            <textarea v-model="body" placeholder=" Posting here" rows="4"></textarea>
            <button class="btn btn-primary" id="sub" @click.prevent="addNewPost">Submit</button>
        </form>
    </div>
</template>
<style scoped>
form {
    border-color: #256d85;
}

input textarea {
    border-inline-color: #256d85;
    border-block-color: #256d85;
}

#sub {
    background-color: #256d85;
    color: white
}
</style>