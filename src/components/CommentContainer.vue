<script setup>
import {ref} from 'vue';
import CommentItem from './CommentItem.vue';
import {comments} from '../store/postStore.js';

const props = defineProps ({
    postId: "",
    typeOf:String
})
const commentsWithId= comments.value.filter(comment =>comment.postid === props.postId)
</script>
<template>
    
<CommentItem v-for="comment in commentsWithId" :comment="comment" :key="comment"/>  

</template>