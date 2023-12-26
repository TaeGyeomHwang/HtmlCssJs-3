window.onload = function () {
  showSlides();
  showModal();
}

function showSlides() {
  let current = 1;
  let imgSlide = document.getElementById("imgSlide");
  let images = imgSlide.getElementsByTagName('a');

  setInterval(() => {
    for (var i = 0; i < images.length; i++) {
      images[i].style.opacity = 0;
    }
    images[current - 1].style.opacity = 1;
    current++;
    if (current > images.length)
      current = 1;
  }, 3000);
}

function showModal(){
  let modal = document.querySelector('#modalWrap');
  let notice = document.querySelector('#notice > ul > li:first-child');
  let button = document.querySelector('.btn');
  notice.onclick = function() {
      modal.classList.add("active");
  }
  button.onclick = function() {
      modal.classList.remove("active");
  }  
}
