const menu = [

  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./media/buttermilk-pancakes.jpeg",
    desc: `Pancakes are the hero of the breakfast table, and their very taste can even be described as “deeply breakfasty”: eggy, salty, just this side of sweet.`,
  },

  {
    id: 2,
    title: "dinner double",
    category: "lunch",
    price: 13.99,
    img: "./media/dinner-double.jpeg",
    desc: `Unsere buns werden jeden tag frisch bei uns und von uns selbst gebacken. Wir verwenden ausschliesslich zutaten von regionalen anbieter die wir persönlich kennen.`
  },

  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./media/godzilla-milkshake.jpeg",
    desc: `Godzilla Milkshake - The premium milkshake that shakes your day off... Comes in various flavours of your choice. These dessert will definitely grow on you.`
  },

  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./media/country-delight.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },

  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./media/egg-attack.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },

  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./media/oreo-dream.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },

  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./media/bacon-overflow.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },

  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./media/american-classic.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },

  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./media/quarantine-buddy.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 16.99,
    img: "./media/steak.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");



window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function(item) {
    return `<article class="menu-item">
              <img src=${item.img} class="photo" alt=${item.title}>
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
  });

  displayMenu = displayMenu.join("")

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(function(values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  }, ["all"])

  const categoryBtns = categories.map(function(category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem
        }
        
      })
      // console.log(menuCategory);
  
      if (category === "all") {
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory)
      }
    })
  })
}