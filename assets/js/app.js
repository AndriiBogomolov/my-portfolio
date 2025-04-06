// Burger menu

document.addEventListener("click", function (event) {
  if (!event.target.closest(".nav") && !event.target.closest(".burger")) {
    document.querySelector(".nav").classList.remove("open");
    document.querySelector(".burger").classList.remove("active");
  }
});

document.querySelectorAll(".nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".nav").classList.remove("open");
    document.querySelector(".burger").classList.remove("active");
  });
});

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
  document.body.classList.toggle("open-menu");
});

document.querySelectorAll(".nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".nav").classList.remove("open");
    document.querySelector(".burger").classList.remove("active");
    document.body.classList.remove("open-menu");
  });
});

if (!document.querySelector(".nav").classList.contains("open")) {
  setTimeout(function () {
    document.querySelector(".burger").classList.remove("active");
  }, 400);
}

// Scroll to top functionaluty

document.addEventListener("DOMContentLoaded", function () {
  const scrollUp = document.querySelector("#scroll-up");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      scrollUp.style.display = "block";
    } else {
      scrollUp.style.display = "none";
    }
  });

  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log("Scroll to top button clicked!");
  });
});

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function updateYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", updateYear);

document.addEventListener("DOMContentLoaded", function () {
  setInterval(updateYear, 1000);
});
