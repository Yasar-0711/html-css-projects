
const toggleBtn = document.querySelector(".toggle-btn");
const lockIcon = document.querySelector(".icon i");


toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");

  if(toggleBtn.classList.contains("active")) {
    lockIcon.classList.replace("fa-lock-open", "fa-lock");
  }
  else {
    lockIcon.classList.add("fa-lock-open")
  }

})


