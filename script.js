const header = document.querySelector("header");
const listEl = document.querySelectorAll(".list");
const sectionEl = document.querySelectorAll(".section");
const activeSection = document.querySelector(".active-section");
const shoping = document.querySelector(".shoping");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const CART = document.querySelector(".cart");
const cartBoxes = document.querySelector(".cart-boxes");
const boxes = document.querySelectorAll(".boxes");
const footerEl = document.querySelector("footer");
const welcome = document.querySelector(".welcome");
const demo = document.querySelector(".demo");
const movie = document.querySelector(".movie");
const closeIcon = document.querySelector(".close-icon");
const addminus = document.querySelectorAll(".addminus");
const Video = document.querySelector("video");
// const header = document.querySelector("header");
const greenSignal = document.querySelector(".greenS");
const redSingnal = document.querySelector(".redS");
const mainEl = document.querySelector("main");

const profession = [
  "Shopping website !",
  "Food Website !",
  "Clothes Website !",
  "Cosmatic website !",
  "our website !",
  "best Website !",
  "Shopde !",
];

let professionIndex = 0;
let professionCharacterIndex = 0;
updateText();

function updateText() {
  // let currentProfession = profession[professionIndex];
  welcome.innerHTML = `<h1>Welcome to ${profession[professionIndex].slice(
    0,
    professionCharacterIndex
  )} </h1>`;
  professionCharacterIndex++;
  if (professionCharacterIndex === profession[professionIndex].length + 1) {
    professionIndex++;
    professionCharacterIndex = 0;
  }
  if (professionIndex === profession.length) {
    professionIndex = 0;
  }
  setTimeout(updateText, 200);
}

listEl.forEach(function (list, index) {
  list.addEventListener("click", function (e) {
    listEl.forEach(function (innerTab) {
      innerTab.classList.remove("list-active");
    });
    welcome.style.display = "none";
    list.classList.add("list-active");
    footerEl.style.display = "flex";
    sectionEl.forEach(function (section) {
      section.style.display = "none";
      section.classList.remove("active-section");
    });
    sectionEl[index].classList.add("active-section");
    sectionEl[index].style.display = "block";
  });
});
// productToCartMap.set(box, clone);

// console.log(productToCartMap);

//clothes section

let productForm = document.getElementById("submit");

const productToCartMap = new Map();
let products = [];

function renderProducts() {
  let productWithBox = products.map((e) => {
    return `
    <div class="boxes">
    <h4>${e.pname}</h4>
    <p>${e.pabout}
</p>
<img src="${e.imlink}" alt="">
<div class="money-cart">
<div class="price">$ ${e.pprice}</div>
<div class="add"><span class="addminus">ADD TO CART</span></div>
</div>
</div>
`;
  });
  // const productToCartMap = new Map();
  let ClotheBox = document.getElementById("ClotheBox");
  ClotheBox.innerHTML = productWithBox.join("");
  // const cartBoxes = document.querySelector(".cart-boxes");

  const addButtons = document.querySelectorAll(".addminus");
  addButtons.forEach((e) => {
    e.addEventListener("click", function () {
      const box = e.closest(".boxes");

      if (e.classList.contains("minus")) {
        showNotification("error", "Item removed from cart");
        e.classList.remove("minus");
        e.innerHTML = "ADD TO CART";
        const cloneBox = productToCartMap.get(box);
        // redSingnal.classList.add("red-signal");
        if (cloneBox) {
          removeFromCart(cloneBox);
          productToCartMap.delete(box);
        }
      } else {
        showNotification("success", "Item added to cart");
        e.classList.add("minus");
        e.innerHTML = "Remove Item";
        addToCart(box);
      }
    });
  });
}
function addToproductcart(box) {
  const clone = box.cloneNode(true);
  const e = clone.querySelector(".addminus");
  e.classList.add("minus");
  e.innerHTML = "Remove Item";
  e.addEventListener("click", function () {
    e.classList.remove("minus");
    e.innerHTML = "ADD TO CART";
    removeFromCart(clone);

    const originalBtn = box.querySelector(".addminus");
    originalBtn.classList.remove("minus");
    originalBtn.innerHTML = "ADD TO CART";
    productToCartMap.delete(box);
  });
  cartBoxes.appendChild(clone);
  productToCartMap.set(box, clone);
  // const header = document.querySelector("header");

  let addcart = document.createElement("div");
  addcart.classList.add("green-signal");
  let i = document.createElement("i");
  i.classList.add("fa-solid", "fa-circle-check");
  addcart.appendChild(i);
  addcart.append(" Item added to cart");
  header.appendChild(addcart);
}

function removeToproductcart(box) {
  if (cartBoxes.contains(box)) {
    cartBoxes.removeChild(box);
  }
  // const header = document.querySelector("header");

  let removeCart = document.createElement("div");
  removeCart.classList.add("red-signal");
  let i = document.createElement("i");
  // removeCart.innerHTML = i + "Item removed from cart";
  i.classList.add("fa-solid", "fa-circle-xmark");
  removeCart.appendChild(i);
  removeCart.append(" Item removed from cart");
  header.appendChild(removeCart);
}
renderProducts();

function addProduct(e) {
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  console.log(e.target[3].value);
  e.preventDefault();
  let convert = {
    pname: e.target[0].value,
    pabout: e.target[1].value,
    imlink: e.target[2].value,
    pprice: e.target[3].value,
  };
  products = [...products, convert];
  renderProducts();
  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";
  e.target[3].value = "";
}

// food section

// let foodToCartMap = new Map();
let foodproducts = [];

function foodRenderProducts() {
  let foodwithBox = foodproducts.map((food) => {
    return `    <div class="boxes">
    <h4>${food.pname}</h4>
    <p>${food.pabout}
    </p>
    <img src="${food.imlink}" alt="">
    <div class="money-cart">
    <div class="price">$ ${food.pprice}</div>
    <div class="add"><span class="addminus">ADD TO CART</span></div>
    </div>
    </div>`;
  });
  let foodBox = document.getElementById("foodBox");
  foodBox.innerHTML = foodwithBox.join("");
  const addButtons = document.querySelectorAll(".addminus");
  addButtons.forEach((e) => {
    e.addEventListener("click", function () {
      const box = e.closest(".boxes");

      if (e.classList.contains("minus")) {
        showNotification("error", "Item removed from cart");
        e.classList.remove("minus");
        e.innerHTML = "ADD TO CART";
        const cloneBox = productToCartMap.get(box);
        // redSingnal.classList.add("red-signal");
        if (cloneBox) {
          removeFromCart(cloneBox);
          productToCartMap.delete(box);
        }
      } else {
        showNotification("success", "Item added to cart");
        e.classList.add("minus");
        e.innerHTML = "Remove Item";
        addToCart(box);
      }
    });
  });
}

function addfoodproduct(food) {
  food.preventDefault();
  let convert = {
    pname: food.target[0].value,
    pabout: food.target[1].value,
    imlink: food.target[2].value,
    pprice: food.target[3].value,
  };
  foodRenderProducts();
  foodproducts = [...foodproducts, convert];
  // renderProducts();
  food.target[0].value = "";
  food.target[1].value = "";
  food.target[2].value = "";
  food.target[3].value = "";
}
foodRenderProducts();

// food section ends

// cosmatic section starts

let cosmaticProducts = [];

function cosmaticRenderProducts() {
  let cosmaticwithBox = cosmaticProducts.map((cosmatic) => {
    return `    <div class="boxes">
    <h4>${cosmatic.pname}</h4>
    <p>${cosmatic.pabout}
    </p>
    <img src="${cosmatic.imlink}" alt="">
    <div class="money-cart">
    <div class="price">$ ${cosmatic.pprice}</div>
    <div class="add"><span class="addminus">ADD TO CART</span></div>
    </div>
    </div>`;
  });
  let cosmaticBox = document.getElementById("cosmaticBox");
  cosmaticBox.innerHTML = cosmaticwithBox.join("");
  const addButtons = document.querySelectorAll(".addminus");
  addButtons.forEach((e) => {
    e.addEventListener("click", function () {
      const box = e.closest(".boxes");

      if (e.classList.contains("minus")) {
        showNotification("error", "Item removed from cart");
        e.classList.remove("minus");
        e.innerHTML = "ADD TO CART";
        const cloneBox = productToCartMap.get(box);
        // redSingnal.classList.add("red-signal");
        if (cloneBox) {
          removeFromCart(cloneBox);
          productToCartMap.delete(box);
        }
      } else {
        showNotification("success", "Item added to cart");
        e.classList.add("minus");
        e.innerHTML = "Remove Item";
        addToCart(box);
      }
    });
  });
}

function addcosmaticproduct(cosmatic) {
  cosmatic.preventDefault();
  let convert = {
    pname: cosmatic.target[0].value,
    pabout: cosmatic.target[1].value,
    imlink: cosmatic.target[2].value,
    pprice: cosmatic.target[3].value,
  };
  cosmaticRenderProducts();
  cosmaticProducts = [...cosmaticProducts, convert];
  // renderProducts();
  cosmatic.target[0].value = "";
  cosmatic.target[1].value = "";
  cosmatic.target[2].value = "";
  cosmatic.target[3].value = "";
}
cosmaticRenderProducts();

// cosmatic section ends

// furniture section starts

let furnitureProducts = [];
function furnitureRenderProducts() {
  let furnitureWithBox = furnitureProducts.map((furniture) => {
    return `    <div class="boxes">
    <h4>${furniture.pname}</h4>
    <p>${furniture.pabout}
    </p>
    <img src="${furniture.imlink}" alt="">
    <div class="money-cart">
    <div class="price">$ ${furniture.pprice}</div>
    <div class="add"><span class="addminus">ADD TO CART</span></div>
    </div>
    </div>`;
  });
  let furnitureBox = document.getElementById("furnitureBox");
  furnitureBox.innerHTML = furnitureWithBox.join("");

  const addButtons = document.querySelectorAll(".addminus");
  addButtons.forEach((e) => {
    e.addEventListener("click", function () {
      const box = e.closest(".boxes");

      if (e.classList.contains("minus")) {
        showNotification("error", "Item removed from cart");
        e.classList.remove("minus");
        e.innerHTML = "ADD TO CART";
        const cloneBox = productToCartMap.get(box);
        // redSingnal.classList.add("red-signal");
        if (cloneBox) {
          removeFromCart(cloneBox);
          productToCartMap.delete(box);
        }
      } else {
        showNotification("success", "Item added to cart");
        e.classList.add("minus");
        e.innerHTML = "Remove Item";
        addToCart(box);
      }
    });
  });
}

function addfurnitureProduct(furniture) {
  furniture.preventDefault();
  let convert = {
    pname: furniture.target[0].value,
    pabout: furniture.target[1].value,
    imlink: furniture.target[2].value,
    pprice: furniture.target[3].value,
  };
  console.log(furniture.target[0].value);

  furnitureRenderProducts();
  furnitureProducts = [...furnitureProducts, convert];
  // renderProducts();
  furniture.target[0].value = "";
  furniture.target[1].value = "";
  furniture.target[2].value = "";
  furniture.target[3].value = "";
}

furnitureRenderProducts();

// furniture section ends

addminus.forEach(function (e) {
  e.addEventListener("click", function () {
    const box = e.closest(".boxes");
    if (e.classList.contains("minus")) {
      e.classList.remove("minus");
      showNotification("error", "Item removed from cart");

      e.innerHTML = "ADD TO CART";
      const cloneBox = productToCartMap.get(box);
      // redSingnal.classList.add("red-signal");
      if (cloneBox) {
        removeFromCart(cloneBox);
        productToCartMap.delete(box);
      }
    } else {
      showNotification("success", "Item added to cart");

      e.classList.add("minus");
      e.innerHTML = "Remove Item";
      addToCart(box);
    }
  });
});

function addToCart(box) {
  const clone = box.cloneNode(true);
  const e = clone.querySelector(".addminus");
  e.classList.add("minus");
  e.innerHTML = "Remove Item";
  e.addEventListener("click", function () {
    e.classList.remove("minus");
    e.innerHTML = "ADD TO CART";
    removeFromCart(clone);

    const originalBtn = box.querySelector(".addminus");
    originalBtn.classList.remove("minus");
    originalBtn.innerHTML = "ADD TO CART";
    productToCartMap.delete(box);
  });
  cartBoxes.appendChild(clone);
  productToCartMap.set(box, clone);

  let addcart = document.createElement("div");
  addcart.classList.add("green-signal");
  let i = document.createElement("i");
  i.classList.add("fa-solid", "fa-circle-check");
  addcart.appendChild(i);
  addcart.append(" Item added to cart");
  header.appendChild(addcart);
}

function removeFromCart(box) {
  if (cartBoxes.contains(box)) {
    cartBoxes.removeChild(box);
    showNotification("error", "Item removed from cart");
  }
  // const header = document.querySelector("header");

  let removeCart = document.createElement("div");
  removeCart.classList.add("red-signal");
  let i = document.createElement("i");
  // removeCart.innerHTML = i + "Item removed from cart";
  i.classList.add("fa-solid", "fa-circle-xmark");
  removeCart.appendChild(i);
  removeCart.append(" Item removed from cart");
  header.appendChild(removeCart);
}
demo.addEventListener("click", function () {
  movie.style.display = "flex";
  // shoping.style.visibility = "hidden";
});

closeIcon.addEventListener("click", function () {
  movie.style.display = "none";
  Video.pause();
  Video.currentTime = 0;
});

function showNotification(type, message) {
  const div = document.createElement("div");
  div.classList.add(type === "success" ? "green-signal" : "red-signal");
  const icon = document.createElement("i");
  icon.classList.add(
    "fa-solid",
    type === "success" ? "fa-circle-check" : "fa-circle-xmark"
  );
  div.appendChild(icon);
  div.append(" " + message);
  header.appendChild(div);
  setTimeout(() => div.remove(), 2000);
}

// function addToCart() {}
