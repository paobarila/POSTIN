<script setup>
import NewComment from './NewComment.vue';
import CommentContainer from './CommentContainer.vue';



const props = defineProps({  
    post: {},
    typeof: Object
})

</script>
<template>
   
    <div class="card d-flex shadow-lg rounded w-75 flex-wrap">
        <div class="cardHeader shadow-rounded d-flex">
            <img :src="post.photo ? post.photo : 'https://picsum.photos/200'" alt="photo">
            <h3>{{ post.name }}</h3>
        </div>
        <div class="cardConten">
            <h4 class="text-center mx-auto">{{ post.title }}</h4>
            <p class="mx-auto">{{ post.body }} </p>
        </div>
        <NewComment />
  <CommentContainer :postId="post.id"/>
        </div>

</template>
<style scoped>
.cardHeader{
    height: 3rem;
    align-items: center;
    gap:1rem;
    margin-top: 1rem;
   
}
.cardHeader img{
    height: 100%;
    border-radius: 50%;
    margin-left: 1rem;
    
}
.cardConten{
    padding-left: 2rem;
    padding-right: 2rem;

}
.card{
    height: auto;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
}
</style>

