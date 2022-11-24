import {creaPost} from "./functions.js";
import {posts} from "./database.js";

const container = document.getElementById("container");


//funzione che crea il post tramite un ciclo


for (let i = 0; i < posts.length; i++) {
    creaPost(container, i);
}


