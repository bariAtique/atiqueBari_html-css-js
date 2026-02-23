(function(){
  [...document.querySelectorAll(".control")].forEach(button=>{
    button.addEventListener("click", function(){
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    })
  })
  document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})()



// const sections = document.querySelectorAll('.section');
// const secBtns = document.querySelectorAll('.controls');
// const secBtn = document.querySelectorAll('.control');
// const allSections = document.querySelector('.main-content');



// const data = document.querySelector('.control').dataset.id;
// console.log(data);
