// Burger menu

// Добавьте обработчик событий к документу
document.addEventListener("click", function (event) {
  // Проверьте, был ли клик сделан вне .nav и .burger
  if (!event.target.closest(".nav") && !event.target.closest(".burger")) {
    // Закройте меню и сбросьте состояние бургер-кнопки
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
    // Закрываем меню и сбрасываем бургер при клике на ссылку
    document.querySelector(".nav").classList.remove("open");
    document.querySelector(".burger").classList.remove("active");
    // Разблокировка прокрутки при закрытии меню
    document.body.classList.remove("open-menu");
  });
});

if (!document.querySelector(".nav").classList.contains("open")) {
  setTimeout(function () {
    document.querySelector(".burger").classList.remove("active");
  }, 400); // Задержка в 400 миллисекунд (зависит от продолжительности анимации)
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
    // below console returns the number of pixels by which the document is scrolled in the vertical direction
    // console.log("Window Scroll Y:", window.scrollY);
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

// Функция для обновления года
function updateYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
}

// Вызываем функцию при загрузке страницы
document.addEventListener("DOMContentLoaded", updateYear);

// Вызываем функцию каждый раз при смене года
document.addEventListener("DOMContentLoaded", function () {
  setInterval(updateYear, 1000);
});
