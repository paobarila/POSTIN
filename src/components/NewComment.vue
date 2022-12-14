<template>
    <form>
        <input class="input w-100"  type="text">
        <button class="btn btn-primary" id="sub"> Comment</button>
    </form>
</template>

<style scoped>
form{
    display:flex;
    justify-content: center;
    padding: 1rem;
 
}
.input{
    border-radius: 10px 0 0 10px;
}
#sub{
    background-color: #256d85;
  color: white;
  border-radius:0 10px 10px 0
}
</style>