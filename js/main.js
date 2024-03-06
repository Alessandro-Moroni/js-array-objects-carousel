const imgWrapper = document.querySelector('.my-carousel-images');
const left = document.querySelector('.my-previous');
const right = document.querySelector('.my-next');
const imgList = document.querySelector('.my-thumbnails');


let counterImg = 0;


const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


images.forEach(img =>{
    
    imgWrapper.innerHTML += `

    <div class="my-carousel-item active img-pos hide show">
        <img class="img-fluid" src="${img.url}" alt="">
        <div class="item-description px-3 words-pos">
            <h2>${img.title}</h2>
            <p>${img.description}</p>
        </div>
    </div>
    `;
    
    imgList.innerHTML += `
    <div class="my-thumbnail active images-list opacity">
        <img class="img-fluid" src="${img.url}" alt="">
    </div>
    
    `
})


const itemsCollection = document.getElementsByClassName('show');
itemsCollection[counterImg].classList.remove('hide');

const smallImages = document.getElementsByClassName('images-list');
smallImages[0].classList.remove('opacity');


left.addEventListener('click', function(){
    scrollLeft();
})
right.addEventListener('click', function(){
    scrollRight();
})

function scrollLeft(){
    smallImages[counterImg].classList.add('opacity');

    itemsCollection[counterImg--].classList.add('hide');
    
    if(counterImg < 0){
      counterImg = images.length - 1;
    }
  
    itemsCollection[counterImg].classList.remove('hide');
  
    smallImages[counterImg].classList.remove('opacity');
    
    right.classList.remove('hide');
}

function scrollRight(){
    left.classList.remove('hide');
  
    smallImages[counterImg].classList.add('opacity');
    
    itemsCollection[counterImg++].classList.add('hide');
    
   if(counterImg === images.length){
    counterImg = 0;
   }
    itemsCollection[counterImg].classList.remove('hide');
    
    smallImages[counterImg].classList.remove('opacity');
  }