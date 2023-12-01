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
    img_prof: "avatar-1",
    most_popular: false,
    trend: true,
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
    img_prof: "avatar-2",
    most_popular: false,
    trend: true,
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
    img_prof: "avatar-3",
    most_popular: true,
    trend: false,
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
    img_prof: "avatar-4",
    most_popular: false,
    trend: true,
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
    img_prof: "avatar-5",
    most_popular: true,
    trend: false,
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
    img_prof: "avatar-6",
    most_popular: true,
    trend: true,
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
    img_prof: "avatar-7",
    most_popular: false,
    trend: false,
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
    img_prof: "avatar-8",
    most_popular: false,
    trend: true,
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
    img_prof: "avatar-2",
    most_popular: false,
    trend: false,
  },
];
courses.sort(() => Math.random() - 0.5);

const carosel = document.querySelector("#carouselExample .carousel-inner");

const end_for =
  courses.length % 4 === 0
    ? Math.round(courses.length / 4)
    : Math.round(courses.length / 4) + 1;

for (let x = 0; x < end_for; x++) {
  carosel.innerHTML += `<div id="item_${x}" class="carousel-item ${
    x === 0 ? "active" : ""
  }"></div>`;
  const carosel__item = document.querySelector(
    `#carouselExample .carousel-inner #item_${x}`
  );

  const offset = x === end_for - 1 ? courses.length % 4 : 4;

  let html__item = "";
  let cont = 0;
  for (let i = x * 4; i < x * 4 + offset; i++) {
    cont++;
    html__item += `
 <div class="card__wrapper col-6 col-md-4 col-lg-3
${cont === 3 ? "d-none d-md-block" : ""}
${cont === 4 ? "d-none d-lg-block" : ""}
">
  <div class="card" >
   <img src="./assets/${courses[i].url_img}.jpg" class="card-img-top" alt="...">
   <div class="card-body">
    <h5 class="card-title">${courses[i].titolo}</h5>
    <div class=" card-text d-flex align-items-center gap-3">
<div><ion-icon name="time-outline"></ion-icon>
${courses[i].durata} m</div>
<div><ion-icon name="cellular-outline"></ion-icon>
${courses[i].livello}</div>
    </div>
    <div class="py-2 card-text d-flex align-items-center  gap-2">
<div class="stars">
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
</div>
<div class="stars">
${courses[i].media_voti}
</div>
<div>
<span class="vote_br">(${(1 + Math.random() * 20).toFixed(3)})</span>
</div>
</div>
    <p class="card-text">
<span class="fw-bold">${courses[i].prezzo.toFixed(
      2
    )}</span> <span class="price_not fw-bold text-decoration-line-through">${(
      courses[i].prezzo + 20
    ).toFixed(2)}</span>
    </p>
   </div>
   <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex align-items-center justify-content-between">
     <div>            <button class="btn w-10 p-0">
              <img src="./assets/${courses[i].img_prof}.jpg" />
            </button> <span class="font_name">${courses[i].nome} ${
      courses[i].cognome
    }</span>
     </div>  <div><ion-icon name="bookmark-outline"></ion-icon>
             <ion-icon name="bookmark"></ion-icon></div> 
    </li>
  </ul>
  </div>
 </div>

`;
  }
  carosel__item.innerHTML += `<div class='row gx-2 justify-content-center'>${html__item}</div>`;
}

const most_popular = [];
for (let i = 0; i < courses.length; i++) {
  if (courses[i].most_popular) most_popular.push(courses[i]);
}

const caroselPopular = document.querySelector(
  "#carouselPopular .carousel-inner"
);

const end_forPop =
  most_popular.length % 4 === 0
    ? Math.floor(most_popular.length / 4)
    : Math.floor(most_popular.length / 4) + 1;

for (let x = 0; x < end_forPop; x++) {
  const offsetPop = x === end_forPop - 1 ? most_popular.length % 4 : 4;

  let html__itempop = "";
  let contpop = 0;
  for (let i = x * 4; i < x * 4 + offsetPop; i++) {
    contpop++;
    html__itempop += `
 <div class="col-6 col-md-4 col-lg-3
${contpop === 3 ? "d-none d-md-block" : ""}
${contpop === 4 ? "d-none d-lg-block" : ""}
">
  <div class="card" >
   <img src="./assets/${
     most_popular[i].url_img
   }.jpg" class="card-img-top" alt="...">
   <div class="card-body">
    <h5 class="card-title">${most_popular[i].titolo}</h5>
    <div class=" card-text d-flex align-items-center gap-3">
<div><ion-icon name="time-outline"></ion-icon>
${most_popular[i].durata} m</div>
<div><ion-icon name="cellular-outline"></ion-icon>
${most_popular[i].livello}</div>
    </div>
    <div class="py-2 card-text d-flex align-items-center  gap-2">
    <div class="stars">
    <ion-icon name="star-outline"></ion-icon>
    <ion-icon name="star-outline"></ion-icon>
    <ion-icon name="star-outline"></ion-icon>
    <ion-icon name="star-outline"></ion-icon>
    <ion-icon name="star-outline"></ion-icon>
    </div>
    <div class="stars">
    ${most_popular[i].media_voti}
    </div>
    <div>
    <span class="vote_br">(${(1 + Math.random() * 20).toFixed(3)})</span>
    </div>
    </div>
    <p class="card-text">
<span class="fw-bold">${most_popular[i].prezzo.toFixed(
      2
    )}</span> <span class="price_not fw-bold text-decoration-line-through">${(
      most_popular[i].prezzo + 20
    ).toFixed(2)}</span>
    </p>
   </div>
   <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex align-items-center justify-content-between">
     <div>            <button class="btn w-10 p-0">
              <img src="./assets/${most_popular[i].img_prof}.jpg" />
            </button> ${most_popular[i].nome} ${most_popular[i].cognome}
     </div>  <div><ion-icon name="bookmark-outline"></ion-icon>
     <ion-icon name="bookmark"></ion-icon></div> 
    </li>
  </ul>
  </div>
 </div>

`;
  }
  caroselPopular.innerHTML += `<div  class="carousel-item ${
    x === 0 ? "active" : ""
  }"><div class='row gx-2 justify-content-center'>${html__itempop}</div></div>
`;
}

const trend = [];
for (let i = 0; i < courses.length; i++) {
  if (courses[i].trend) trend.push(courses[i]);
}
console.log(trend.length);

const caroselTrend = document.querySelector("#carouselTrend .carousel-inner");

const end_forTrend =
  trend.length % 4 === 0
    ? Math.floor(trend.length / 4)
    : Math.floor(trend.length / 4) + 1;

for (let x = 0; x < end_forTrend; x++) {
  const offsetTrend = x === end_forTrend - 1 ? trend.length % 4 : 4;

  let html__itemTrend = "";
  let contTrend = 0;
  for (let i = x * 4; i < x * 4 + offsetTrend; i++) {
    contTrend++;
    html__itemTrend += `
 <div class="col-6 col-md-4 col-lg-3
${contTrend === 3 ? "d-none d-md-block" : ""}
${contTrend === 4 ? "d-none d-lg-block" : ""}
">
  <div class="card" >
   <img src="./assets/${trend[i].url_img}.jpg" class="card-img-top" alt="...">
   <div class="card-body">
    <h5 class="card-title">${trend[i].titolo}</h5>
    <div class=" card-text d-flex align-items-center gap-3">
<div><ion-icon name="time-outline"></ion-icon>
${trend[i].durata} m</div>
<div><ion-icon name="cellular-outline"></ion-icon>
${trend[i].livello}</div>
    </div>
    <div class="card-text d-flex align-items-center  gap-2">
    <div class="stars">
    <ion-icon name="star-outline"></ion-icon>
    <ion-icon name="star-outline"></ion-icon>
    <ion-icon name="star-outline"></ion-icon>
    <ion-icon name="star-outline"></ion-icon>
    <ion-icon name="star-outline"></ion-icon>
    </div>
    <div class="stars">
    ${trend[i].media_voti}
    </div>
    <div>
    <span class="vote_br">(${(1 + Math.random() * 20).toFixed(3)})</span>
    </div>
    </div>
    <p class="card-text">
<span class="fw-bold">${trend[i].prezzo.toFixed(
      2
    )}</span> <span class="price_not fw-bold text-decoration-line-through">${(
      trend[i].prezzo + 20
    ).toFixed(2)}</span>
    </p>
   </div>
   <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex align-items-center justify-content-between">
     <div>            <button class="btn w-10 p-0">
              <img src="./assets/${trend[i].img_prof}.jpg" />
            </button> ${trend[i].nome} ${trend[i].cognome}
     </div>  <div><ion-icon name="bookmark-outline"></ion-icon>
     <ion-icon name="bookmark"></ion-icon></div> 
    </li>
  </ul>
  </div>
 </div>

`;
  }
  caroselTrend.innerHTML += `<div  class="carousel-item ${
    x === 0 ? "active" : ""
  }"><div class='row gx-2 justify-content-center'>${html__itemTrend}</div></div>
`;
}

const ciao = function () {};

const user = document.querySelector(".btn_user");
user.onclick = ciao;
