// console.log('js connect');

const loadDate = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const loaddedData = data.data;
    // console.log(loaddedData);
    categories(loaddedData)
}

function categories(categories) {
    const categoryContainer = document.getElementById('catagory-section');
    for (category of categories) {
        // console.log('single category', category.category);
        const createCategory = document.createElement('button');
        createCategory.innerHTML = `
        <button class="btn btn-primary">${category.category}</button>
       `
        categoryContainer.appendChild(createCategory)
    }
    loadVideo();
}

async function loadVideo() {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1000");
    const data = await res.json();
    const videos = data.data;
    const videoContainer = document.getElementById('video-section');
    for (video of videos) {
        // console.log(video.authors[0]);
        const createVideo = document.createElement('div');
        createVideo.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
        <figure><img class="h-48" src="${video?.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${video?.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?<span class="text-red-400">${video.authors[0].verified ? `<img src="images/tik.svg">` : ' ' }</span></p>
          <p>${video?.others?.views}</p>
        </div>
      </div>
        `
        videoContainer.appendChild(createVideo);
    }
}

loadDate()


const copyrightSymbol = "\u00A9";
const yearYear = new Date ().getFullYear();
const copyRight = document.getElementById('copyright')
copyRight.innerText = `copyright ${copyrightSymbol} ${yearYear}`