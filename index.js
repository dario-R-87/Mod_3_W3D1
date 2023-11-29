const courses = [
    {
        url_img: "course-angular",
        titolo: "Titolo 1",
        durata: 120,
        livello: "Avanzato",
        media_voti: 4.5,
        prezzo: 29.99,
        nome: "Nome 1",
        cognome: "Cognome 1",
        img_prof: "avatar-1"
    },
    {
        url_img: "course-css",
        titolo: "Titolo 2",
        durata: 90,
        livello: "Intermedio",
        media_voti: 3.8,
        prezzo: 19.99,
        nome: "Nome 2",
        cognome: "Cognome 2",
        img_prof: "avatar-2"
    },
    {
        url_img: "course-gatsby",
        titolo: "Titolo 3",
        durata: 150,
        livello: "Principiante",
        media_voti: 4.0,
        prezzo: 24.99,
        nome: "Nome 3",
        cognome: "Cognome 3",
        img_prof: "avatar-3"
    },
    {
        url_img: "course-graphql",
        titolo: "Titolo 4",
        durata: 180,
        livello: "Avanzato",
        media_voti: 4.8,
        prezzo: 34.99,
        nome: "Nome 4",
        cognome: "Cognome 4",
        img_prof: "avatar-4"
    },
    {
        url_img: "course-html",
        titolo: "Titolo 5",
        durata: 120,
        livello: "Principiante",
        media_voti: 3.5,
        prezzo: 19.99,
        nome: "Nome 5",
        cognome: "Cognome 5",
        img_prof: "avatar-5"
    },
    {
        url_img: "course-javascript",
        titolo: "Titolo 6",
        durata: 90,
        livello: "Avanzato",
        media_voti: 4.8,
        prezzo: 34.99,
        nome: "Nome 6",
        cognome: "Cognome 6",
        img_prof: "avatar-6"
    },
    {
        url_img: "course-laravel",
        titolo: "Titolo 7",
        durata: 150,
        livello: "Principiante",
        media_voti: 3.9,
        prezzo: 22.99,
        nome: "Nome 7",
        cognome: "Cognome 7",
        img_prof: "avatar-7"
    },
    {
        url_img: "course-node",
        titolo: "Titolo 8",
        durata: 180,
        livello: "Avanzato",
        media_voti: 4.6,
        prezzo: 39.99,
        nome: "Nome 8",
        cognome: "Cognome 8",
        img_prof: "avatar-8"
    },
    {
        url_img: "course-python",
        titolo: "Titolo 9",
        durata: 120,
        livello: "Intermedio",
        media_voti: 4.3,
        prezzo: 27.99,
        nome: "Nome 9",
        cognome: "Cognome 9",
        img_prof: "avatar-2"
    }
];

const carosel = document.querySelector("#carouselExample .carousel-inner");

const end_for = courses.length%4 === 0 ? Math.round(courses.length/4) : Math.round(courses.length/4)+1;

for(let x=0; x<end_for; x++){    
carosel.innerHTML += `<div id="item_${x}" class="carousel-item ${x===0 ? 'active' : ''} d-flex gap-3 justify-content-between"></div>`;
const carosel__item = document.querySelector(`#carouselExample .carousel-inner #item_${x}`);

const offset = (x===end_for-1 ? courses.length%4 : 4);
for(let i=x*4; i<x*4+offset; i++){
 carosel__item.innerHTML += `
 <div class="col-6 col-md-4 col-lg-3">
  <div class="card" >
   <img src="./assets/${courses[i].url_img}.jpg" class="card-img-top" alt="...">
   <div class="card-body">
    <h5 class="card-title">${courses[i].titolo}</h5>
    <p class="card-text d-flex align-items-center justify-content-between">
<ion-icon name="time-outline"></ion-icon>
${courses[i].durata} 
<ion-icon name="cellular-outline"></ion-icon>
${courses[i].livello}
    </p>
    <p class="card-text d-flex align-items-center justify-content-between">
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
${courses[i].media_voti} (1,600)
    </p>
    <p class="card-text">
${courses[i].prezzo} ${courses[i].prezzo+200}
    </p>
   </div>
   <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex align-items-center justify-content-between">
     <div>            <button class="btn w-10 p-0">
              <img src="./assets/${courses[i].img_prof}.jpg" />
            </button> ${courses[i].nome} ${courses[i].cognome}
     </div>  <ion-icon name="bookmark-outline"></ion-icon>
    </li>
  </ul>
  </div>
 </div>

</div>`;
}
}

const ciao = function(){

};

const user = document.querySelector("#btn_user");
user.onclick = ciao;
