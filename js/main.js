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
//funzione che crea il post tramite un ciclo

function creaPost(container , i) {


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
    // const jsLikes = document.createElement("div");
    // const likeCta = document.createElement("div");
    // const likeCounter = document.createElement("div");

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

    postMetaIcon.innerHTML = `<img class="profile-pic" src="${posts[i].author.image}" alt="Phil Mangione">`
    postMetaAuthor.innerHTML = `${posts[i].author.name}`;
    postMetaTime.innerHTML = "4 mesi fa";
    postText.innerHTML = `${posts[i].content}`
    postImg.innerHTML = `<img src="${posts[i].media}" alt=""></img>`;


}

function postElement() {

}

for (let i = 0; i < posts.length; i++) {
    creaPost(container , i);
}

