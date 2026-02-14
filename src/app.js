(function(){
  [...document.querySelectorAll(".control")].forEach(button=>{
    button.addEventListener("click", function(){
      document.querySelector(".active-btn").classList.remove("active-btn");
    })
  })
})()