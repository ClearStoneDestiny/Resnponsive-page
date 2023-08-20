//Masonry gallery

document.addEventListener('DOMContentLoaded', () => {
  const expandButton = document.getElementById('expand-button');
  const photoGallery = document.querySelector('.photo-gallery');
  const columns = document.querySelectorAll('.column');

  expandButton.addEventListener('click', () => {
    if (photoGallery.style.maxHeight) {
      photoGallery.style.maxHeight = null;
      expandButton.innerHTML = 'Rozwiń <i class="bx bx-down-arrow-alt" ></i>';
    } else {
      photoGallery.style.maxHeight = 'none';
      expandButton.innerHTML = 'Zwiń <i class="bx bx-up-arrow-alt"></i>';
    }

    updateImageOpacity(); // Обновление прозрачности изображений
  });

  const updateImageOpacity = () => {
    columns.forEach(column => {
      const images = column.querySelectorAll('img');
      images.forEach(image => {
        if (photoGallery.style.maxHeight) {
          image.classList.remove('transparent'); // Убрать класс прозрачности
        } else {
          const imageTop = image.getBoundingClientRect().top - column.getBoundingClientRect().top;
          const threshold = 0.25 * column.clientHeight;

          if (imageTop < threshold) {
            image.classList.remove('transparent');
          } else {
            image.classList.add('transparent');
          }
        }
      });
    });
  };

  updateImageOpacity(); // Вызывать при загрузке DOM
  window.addEventListener('resize', () => {
    updateImageOpacity(); // Вызывать при изменении размера галереи
  });
});



//Search bar

document.addEventListener("DOMContentLoaded", function () {
  const searchToggle = document.getElementById("searchToggle");
  const searchForm = document.getElementById("searchForm");
  const searchIcon = document.getElementById("searchIcon");

  searchToggle.addEventListener("click", function () {
    searchForm.classList.toggle("d-none");
    searchForm.classList.toggle("d-flex");
    searchIcon.style.display = "none"; // Hide picture
  });

  searchForm.addEventListener("submit", function () {
    searchForm.classList.add("d-none");
    searchForm.classList.remove("d-flex");
    searchIcon.style.display = "block"; // Show picture
  });
});


//Hero-section gallery slider

const images = [
  "img/Main-img.png",
  "img/firma-img.png",
  "https://images.pexels.com/photos/13705834/pexels-photo-13705834.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const imageElement = document.getElementById("hero-image");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }

  
// Animation
imageElement.classList.add("fade-out");
setTimeout(() => {
  imageElement.src = images[index];
  imageElement.classList.remove("fade-out");
  imageElement.classList.add("fade-in");
  }, 500);

  currentIndex = index;
}

prevButton.addEventListener("click", () => {
  showImage(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showImage(currentIndex + 1);
});

showImage(currentIndex);




