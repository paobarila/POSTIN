import { ref } from 'vue';


const posts = ref([
   /* {
        id: 1,
        name: "pao 1",
        photo: null,
        title: "Titulo 1",
        body: "texto aleatorio largo largo largo",
        date: Date.now()
    },
    {
        id: 2,
        name: "pao 2",
        photo: null,
        title: "Titulo 1",
        body: "texto aleatorio largo largo largo",
        date: Date.now()
    },
    {
        id: 3,
        name: "pao 3",
        photo: null,
        title: "Titulo 1",
        body: "texto aleatorio largo largo largo",
        date: Date.now()
    }*/
])


const comments = ref([
   /* {
        id: 1,
        postid: 1,
        name: "Rebe",
        text: "veamos que funcione",
    },
    {
        id: 2,
        postid: 2,
        name: "Rebe",
        text: "veamos que funcione 2",
    },
    {
        id: 3,
        postid: 3,
        name: "Rebe",
        text: "veamos que funcione 3",
    }*/
])

export { posts, comments }