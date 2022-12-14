import { defineStore } from "pinia";
import {ref} from "vue";

export const useUser = defineStore( 'user',()=> {

    const user = ref(null)

    const addUser = (usuario) =>{
        user.value = usuario;
    }

    return{
        user,
        addUser
    }   
})

export default useUser;

