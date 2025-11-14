document.addEventListener("DOMContentLoaded", () => {
  const btnIrArriba = document.getElementById("btnIrArriba");

 
  btnIrArriba.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btnIrArriba.style.display = "block";
    } else {
      btnIrArriba.style.display = "none";
    }
  });

  btnIrArriba.style.display = "none";
});
