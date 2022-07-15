// Global variables
const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

// build the nav

function createListItem() {
  const fragment = document.createDocumentFragment();
  for (const sec of sections) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}"class="menu__link"</a>${sec.dataset.nav}</a></li>`;
    fragment.appendChild(listItem);
  }
  navList.appendChild(fragment);
}
createListItem();

// make the scrolling smooth

navList.addEventListener("click", (scrollTo) => {
  scrollTo.preventDefault();
  if (scrollTo.target.dataset.nav) {
    document
      .getElementById(`${scrollTo.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${scrollTo.target.dataset.nav}`;
    }, 200);
  }
});

// Add active class when scroll

window.onscroll = function (active) {
  sections.forEach((section) => {
    if (
      section.getBoundingClientRect().top >= -330 &&
      section.getBoundingClientRect().top <= 290
    ) {
        section.classList.add("your-active-class");
    } else {
        section.classList.remove("your-active-class");
    }
  });
};
