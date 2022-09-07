/**Global variables */
const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));
/** build the nav */

function createListItem() {
  const fragment = document.createDocumentFragment();
  for (const sec of sections) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${sec.id}" data-nav="${sec.id}"class="menu__link"</a>${sec.dataset.nav}</a>`;
    fragment.appendChild(listItem);
  }
  navList.appendChild(fragment);
}
createListItem();

/** Add active class when scroll */

window.onscroll = function () {
  let currentLink = "";
  sections.forEach((section) => {
    if (
      section.getBoundingClientRect().top >= -330 &&
      section.getBoundingClientRect().top <= 290
      ) {
        section.classList.add("your-active-class");
        currentLink = section.getAttribute("id")
    } else {
        section.classList.remove("your-active-class");
    }
  });
  
  /** Make an array to store the links in */
  
  const navArr = document.querySelectorAll('nav ul li a')

  navArr.forEach((li) => {
    li.classList.remove("active");
    if (li.href.includes(currentLink)) {
      li.classList.add("active")
    }
  })
};