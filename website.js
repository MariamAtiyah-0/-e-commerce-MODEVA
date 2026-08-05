 var swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        loop:true,
        direction: getDirection(),
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          resize: function () {
            swiper.changeDirection(getDirection());
          },
        },
      });

      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

        return direction;
      };
let container=document.querySelector(".card-woman");
let scroll=document.querySelector(".btn-sec1 button");

const productsArray = [
  {
    id: 1,
    title: "White Summer Dress",
    price: "450K",
    image: "./img/Rectangle 132.png"
  },
  {
    id: 2,
    title: "Blue Party Dress",
    price: "520K",
    image: "./img/Rectangle 132 (1).png"
  },
  {
    id: 3,
    title: "Green Maxi Dress",
    price: "450K",
    image: "./img/Rectangle 132 (2).png"
  },
  {
    id: 4,
    title: "Floral Evening Dress",
    price: "650K",
    image: "./img/Rectangle 132 (3).png"
  }
];

function  newproduct  (productsArray){
productsArray.map((el)=>{
    container.innerHTML+=`<div class="card-sec3">
<div class="img-woman">
    <img src="${el.image}" width=100% height="100%">
</div>
<div class="text-woman">
    <h1>${el.title}</h1>
    <p> ${el.price}</p>
</div>
<div class="btn-woman">
    <button>add to cart</button>
</div>
</div>`;
});
}

window.addEventListener(("load"),()=>{
    newproduct (productsArray);
    alert( `Hello ${localStorage.getItem("username").split("@")[0]} `);
    
    

});
scroll.addEventListener("click",()=>{
  
  window.scrollTo({
        top: 1500,
        behavior: "smooth"
    });
})