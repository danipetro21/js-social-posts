const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById("container");

//pulsante like
const likeBtn = document.getElementsByClassName("like-button");
let likeId = [];

//date now method
let today = new Date().toISOString().slice(0, 10);
console.log(today);
console.log(posts[1].created);

//funzione che crea il post tramite un ciclo
function creaPost(container, i) {
    // let uploadDate = Math.round(Date.now() / year);

    const post = document.createElement("div");
    const postHeader = document.createElement("div");
    const postMeta = document.createElement("div");
    const postMetaData = document.createElement("div");
    const postMetaAuthor = document.createElement("div");
    const postMetaTime = document.createElement("div");
    const postMetaIcon = document.createElement("div");
    const postText = document.createElement("div");
    const postImg = document.createElement("div");
    const postFooter = document.createElement("div");

    //variabili per i like
    const jsLikes = document.createElement("div");
    const likeCta = document.createElement("div");
    const likeCounter = document.createElement("div");

    post.classList.add("post");
    postHeader.classList.add("post__header");
    postMeta.classList.add("post-meta");
    postMetaIcon.classList.add("post-meta__icon");
    postMetaData.classList.add("post-meta__data");
    postMetaAuthor.classList.add("post-meta__author");
    postMetaTime.classList.add("post-meta__time");
    postText.classList.add("post__text");
    postImg.classList.add("post__image");
    postFooter.classList.add("post__footer");
    jsLikes.classList.add("likes", "js-likes");
    likeCta.classList.add("likes__cta");
    likeCounter.classList.add("likes__counter");


    container.append(post);
    post.append(postHeader);
    postHeader.append(postMeta);
    postMeta.append(postMetaIcon);
    postMeta.append(postMetaData);
    postMetaData.append(postMetaAuthor);
    postMetaData.append(postMetaTime);
    post.append(postText);
    post.append(postImg);
    post.append(postFooter);
    postFooter.append(jsLikes);
    jsLikes.append(likeCta);

    likeCta.addEventListener("click",
        function () {
            likeCta.classList.add("clicked");
            likeCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${likeAPost(i)}</b> persone`
            likeId[i] = posts[i].id;
            console.log(likeId[i]);
        });

    jsLikes.append(likeCounter);
    if (posts[i].author.image == null) {
        postMetaIcon.innerHTML = `${initialName(posts[i].author.name)}`
    } else {
        postMetaIcon.innerHTML = `<img class="profile-pic" src="${posts[i].author.image}" alt="Phil Mangione">`
    }


    postMetaAuthor.innerHTML = `${posts[i].author.name}`;

    postMetaTime.innerHTML = `${monthDiff(new Date(posts[i].created), new Date(today))} mesi fa`;

    postText.innerHTML = `${posts[i].content}`
    postImg.innerHTML = `<img src="${posts[i].media}" alt=""></img>`;
    likeCta.innerHTML = `<a class="like-button  js-like-button" data-postid="1">   
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
    </a>`;
    // counter likes di default
    likeCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone`


}

function initialName(string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}

function likeAPost(i) {
    like = posts[i].likes;
    like++;
    return like;
}

function monthDiff(startDate, endDate) {
    const diff = Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());
    return diff
}

for (let i = 0; i < posts.length; i++) {
    creaPost(container, i);

}


