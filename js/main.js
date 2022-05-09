const cardArr = [
  {
    item: "web",
    open: "web-1",
    img: "./assets/images/portfolio-1.jpg",
    alt: "portfolio icon",
    subheader: "Web Development",
    h3: "Food Website",
  },
  {
    item: "web",
    open: "web-2",
    img: "./assets/images/portfolio-2.jpg",
    alt: "portfolio icon",
    subheader: "Web Development",
    h3: "Skate Website",
  },
  {
    item: "web",
    open: "web-3",
    img: "./assets/images/portfolio-3.jpg",
    alt: "portfolio icon",
    subheader: "Web Development",
    h3: "Eating Website",
  },
  {
    item: "ui",
    open: "ui-1",
    img: "./assets/images/portfolio-3.jpg",
    alt: "portfolio icon",
    subheader: "UI Design",
    h3: "Cool Design",
  },
  {
    item: "app",
    open: "app-1",
    img: "./assets/images/portfolio-5.jpg",
    alt: "portfolio icon",
    subheader: "App Development",
    h3: "Gambling App",
  },
  {
    item: "app",
    open: "app-2",
    img: "./assets/images/portfolio-6.jpg",
    alt: "portfolio icon",
    subheader: "App Development",
    h3: "Game App",
  },
  {
    item: "app",
    open: "app-3",
    img: "./assets/images/portfolio-7.jpg",
    alt: "portfolio icon",
    subheader: "App Development",
    h3: "Money Website",
  },
  {
    item: "ui",
    open: "web-1",
    img: "./assets/images/portfolio-8.jpg",
    alt: "portfolio icon",
    subheader: "UI Design",
    h3: "Fantastic Design",
  },
];

const modalCardArr = [
  {
    id: "web-1",
    header: "Web Project",
    img: "./assets/images/portfolio-1.jpg",
    txtHeader: "My first awesome website",
    txtBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaquenatus, dolor, repellat amet sequi laboriosam.",
  },
  {
    id: "web-2",
    header: "Web Project",
    img: "./assets/images/portfolio-2.jpg",
    txtHeader: "My second website",
    txtBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaquenatus, dolor, repellat amet sequi laboriosam.",
  },
  {
    id: "web-3",
    header: "Web Project",
    img: "./assets/images/portfolio-3.jpg",
    txtHeader: "My third website",
    txtBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaquenatus, dolor, repellat amet sequi laboriosam.",
  },
  {
    id: "ui-1",
    header: "UI Project",
    img: "./assets/images/portfolio-4.jpg",
    txtHeader: "My first UI website",
    txtBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaquenatus, dolor, repellat amet sequi laboriosam.",
  },
  {
    id: "app-1",
    header: "App Project",
    img: "./assets/images/portfolio-5.jpg",
    txtHeader: "My first app",
    txtBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaquenatus, dolor, repellat amet sequi laboriosam.",
  },
  {
    id: "app-2",
    header: "App Project",
    img: "./assets/images/portfolio-6.jpg",
    txtHeader: "My second app",
    txtBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaquenatus, dolor, repellat amet sequi laboriosam.",
  },
  {
    id: "app-3",
    header: "App Project",
    img: "./assets/images/portfolio-7.jpg",
    txtHeader: "My money app",
    txtBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaquenatus, dolor, repellat amet sequi laboriosam.",
  },
  {
    id: "ui-2",
    header: "UI Project",
    img: "./assets/images/portfolio-8.jpg",
    txtHeader: "My UI site",
    txtBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaquenatus, dolor, repellat amet sequi laboriosam.",
  },
];

const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";

const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible";

const dataFilter = "[data-filter]";
const portfolioData = "[data-item]";

const root = document.documentElement;

/* Theme */

const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio Cards */
const container = document.querySelector(".portfolio-grid");

const createCards = () => {
  const cards = cardArr
    .map(
      ({ item, open, img, alt, subheader, h3 }) =>
        ` <div class="portfolio-card" data-item="${item}" data-open="${open}">
            <div class="card-body">
              <img src="${img}" alt="${alt}" />
              <div class="card-popup-box">
                <div>${subheader}</div>
                <h3>${h3}</h3>
              </div>
            </div>
          </div>
    `
    )
    .join("");

  container.innerHTML = cards;
};

createCards();

/* Portfolio Modal */

const modalContainer = document.querySelector(".popup-modal-container");

const openCardModal = (open) => {
  const card = modalCardArr.map((card) => card.id).indexOf(open);
  const cardIndex = modalCardArr.map((card) => card.id).indexOf(open);

  const newCard = modalCardArr[card];

  const oneCard = `  <div id="${newCard.id}" class="modal" data-animation="slideInOutTop">
              <div class="modal-dialog">
                <header class="modal-header">
                  <h3>${newCard.header}</h3>
                  <i class="fas fa-times" data-close></i>
                </header>
                <div class="modal-body">
                  <div class="img-wrapper">
                    <img
                      src=".${newCard.img}"
                      alt="portfolio image"
                    />
                  </div>
                  <div class="text-wrapper">
                    <p><strong>${newCard.txtHeader}</strong></p>
                    <p>
                      ${newCard.txtBody}
                    </p>
                    <p>
                      ${newCard.txtBody}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    `;
  modalContainer.innerHTML = oneCard;
};

/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

/* Portfolio Filter */

const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector("#search");

// createCards();

const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
};

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener("click", function () {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener("click", function () {
    const toggle = this.dataset.toggle;
    setActive(elm, switcherBtn);
    setTheme(toggle);
  });
}

for (const link of filterLink) {
  link.addEventListener("click", function () {
    setActive(link, ".filter-link");
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (card.dataset.item === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

searchBox.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase().trim();

  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

//Modal/Full Site Modal "open buttons"
for (const elm of openModal) {
  elm.addEventListener("click", function () {
    openCardModal(this.dataset.open);
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const elm of closeModal) {
  elm.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

// Modal

document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

const elmsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elms-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elms", marqueeContent.children.length);

for (let i = 0; i < elmsDisplayed; i += 1) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
