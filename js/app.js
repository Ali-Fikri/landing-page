/**Global variables */
const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

/** build the nav */

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

/** Add active class */
function addActiveClass(section) {
  // Add Link Active
  document.querySelector(".active__link")?.classList.remove("active__link")
  document.querySelector(`[href="#${section}]"`)?.classList.add('active__link');
}
/** Add  when scroll */

window.onscroll = function () {
  sections.forEach((section) => {
    if (
      section.getBoundingClientRect().top >= -330 &&
      section.getBoundingClientRect().top <= 290
    ) {
        section.classList.add("your-active-class");
    } else {
        section.classList.remove("your-active-class");
    }
    addActiveClass(section.DOCUMENT_FRAGMENT_NODE.dataset.nav);
  });
};
