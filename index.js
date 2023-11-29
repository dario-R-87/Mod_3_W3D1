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
    }
];

const carosel = document.querySelector("#carouselExample .carousel-inner");
carosel.innerHTML += `<div class="carousel-item active d-flex gap-3 justify-content-center"></div>`;
const carosel__item = document.querySelector("#carouselExample .carousel-inner .carousel-item");

for(let i=0; i<courses.length; i++){
 carosel__item.innerHTML += `
 <div class="col-3">
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
