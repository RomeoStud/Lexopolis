document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".mobile-menu__link");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      // Закриття мобільного меню
      mobileMenu.classList.remove("is-open");
    });
  });
});
