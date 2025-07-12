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
const addButtons = document.querySelectorAll(".addminus");
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

// let productForm = document.getElementById("submit");

const productToCartMap = new Map();
let products = [];
// let foodproducts = [];
// let furnitureProducts = [];
// let cosmaticProducts = [];

// loadAllProducts();
// loadCartItems();

function renderProducts() {
  let productWithBox = products.map((e, i) => {
    return `
    <div class="boxes" data-index="${i}">
    <h4>${e.pname}</h4>
    <p>${e.pabout}
</p>
<img src="${e.imlink}" alt="">
<div class="money-cart">
<div class="price">$ ${e.pprice}</div>
<div class="add"><span class="addminus">ADD TO CART</span></div>
</div>
<button type="button" class="btn btn-dark delete-product">Delete</button>

</div>
`;
  });
  // const productToCartMap = new Map();
  let myProductBox = document.getElementById("myProductBox");
  myProductBox.innerHTML = productWithBox.join("");
  // const cartBoxes = document.querySelector(".cart-boxes");
  const addButtons = myProductBox.querySelectorAll(".addminus");

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

  const deleteButtons = ClotheBox.querySelectorAll(".delete-product");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const box = btn.closest(".boxes");
      const index = parseInt(box.getAttribute("data-index"));
      products.splice(index, 1); // ✅ delete the correct product
      // saveAllProducts();
      renderProducts(); // re-render updated list
    });
  });
}
// function addToproductcart(box) {
//   const clone = box.cloneNode(true);
//   const e = clone.querySelector(".addminus");
//   e.classList.add("minus");
//   e.innerHTML = "Remove Item";
//   e.addEventListener("click", function () {
//     e.classList.remove("minus");
//     e.innerHTML = "ADD TO CART";
//     removeFromCart(clone);

//     const originalBtn = box.querySelector(".addminus");
//     originalBtn.classList.remove("minus");
//     originalBtn.innerHTML = "ADD TO CART";
//     productToCartMap.delete(box);
//   });
//   cartBoxes.appendChild(clone);
//   productToCartMap.set(box, clone);
//   // const header = document.querySelector("header");

//   let addcart = document.createElement("div");
//   addcart.classList.add("green-signal");
//   let i = document.createElement("i");
//   i.classList.add("fa-solid", "fa-circle-check");
//   addcart.appendChild(i);
//   addcart.append(" Item added to cart");
//   header.appendChild(addcart);
// }

// function removeToproductcart(box) {
//   if (cartBoxes.contains(box)) {
//     cartBoxes.removeChild(box);
//   }
//   // const header = document.querySelector("header");

//   let removeCart = document.createElement("div");
//   removeCart.classList.add("red-signal");
//   let i = document.createElement("i");
//   // removeCart.innerHTML = i + "Item removed from cart";
//   i.classList.add("fa-solid", "fa-circle-xmark");
//   removeCart.appendChild(i);
//   removeCart.append(" Item removed from cart");
//   header.appendChild(removeCart);
// }
// renderProducts();

function addYourProduct(e) {
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
  // saveAllProducts();
  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";
  e.target[3].value = "";
}

// food section

// let foodToCartMap = new Map();

// function foodRenderProducts() {
//   let foodwithBox = foodproducts.map((food, i) => {
//     return `    <div class="boxes" data-index="${i}">
//     <h4>${food.pname}</h4>
//     <p>${food.pabout}
//     </p>
//     <img src="${food.imlink}" alt="">
//     <div class="money-cart">
//     <div class="price">$ ${food.pprice}</div>
//     <div class="add"><span class="addminus">ADD TO CART</span></div>
//     </div>
// <button type="button" class="btn btn-dark delete-product">Delete</button>

//     </div>`;
//   });
//   let foodBox = document.getElementById("foodBox");
//   foodBox.innerHTML = foodwithBox.join("");
//   const addButtons = foodBox.querySelectorAll(".addminus");
//   addButtons.forEach((e) => {
//     e.addEventListener("click", function () {
//       const box = e.closest(".boxes");

//       if (e.classList.contains("minus")) {
//         showNotification("error", "Item removed from cart");
//         e.classList.remove("minus");
//         e.innerHTML = "ADD TO CART";
//         const cloneBox = productToCartMap.get(box);
//         // redSingnal.classList.add("red-signal");
//         if (cloneBox) {
//           removeFromCart(cloneBox);
//           productToCartMap.delete(box);
//         }
//       } else {
//         showNotification("success", "Item added to cart");
//         e.classList.add("minus");
//         e.innerHTML = "Remove Item";
//         addToCart(box);
//       }
//     });
//   });

//   const deleteButtons = foodBox.querySelectorAll(".delete-product");
//   deleteButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const box = btn.closest(".boxes");
//       const index = parseInt(box.getAttribute("data-index"));
//       foodproducts.splice(index, 1); // ✅ delete the correct product
//       saveAllProducts();
//       foodRenderProducts(); // re-render updated list
//     });
//   });
// }

// function addfoodproduct(food) {
//   food.preventDefault();
//   let convert = {
//     pname: food.target[0].value,
//     pabout: food.target[1].value,
//     imlink: food.target[2].value,
//     pprice: food.target[3].value,
//   };
//   foodproducts = [...foodproducts, convert];
//   foodRenderProducts();
//   saveAllProducts();
//   // renderProducts();
//   food.target[0].value = "";
//   food.target[1].value = "";
//   food.target[2].value = "";
//   food.target[3].value = "";
// }

// foodRenderProducts();

// food section ends

// cosmatic section starts

// function cosmaticRenderProducts() {
//   let cosmaticwithBox = cosmaticProducts.map((cosmatic, i) => {
//     return `    <div class="boxes" data-index="${i}">
//     <h4>${cosmatic.pname}</h4>
//     <p>${cosmatic.pabout}
//     </p>
//     <img src="${cosmatic.imlink}" alt="">
//     <div class="money-cart">
//     <div class="price">$ ${cosmatic.pprice}</div>
//     <div class="add"><span class="addminus">ADD TO CART</span></div>

//     </div>
// <button type="button" class="btn btn-dark delete-product">Delete</button>

//     </div>`;
//   });
//   let cosmaticBox = document.getElementById("cosmaticBox");
//   cosmaticBox.innerHTML = cosmaticwithBox.join("");
//   const addButtons = cosmaticBox.querySelectorAll(".addminus");
//   addButtons.forEach((e) => {
//     e.addEventListener("click", function () {
//       const box = e.closest(".boxes");

//       if (e.classList.contains("minus")) {
//         showNotification("error", "Item removed from cart");
//         e.classList.remove("minus");
//         e.innerHTML = "ADD TO CART";
//         const cloneBox = productToCartMap.get(box);
//         // redSingnal.classList.add("red-signal");
//         if (cloneBox) {
//           removeFromCart(cloneBox);
//           productToCartMap.delete(box);
//         }
//       } else {
//         showNotification("success", "Item added to cart");
//         e.classList.add("minus");
//         e.innerHTML = "Remove Item";
//         addToCart(box);
//       }
//     });
//   });

//   const deleteButtons = cosmaticBox.querySelectorAll(".delete-product");
//   deleteButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const box = btn.closest(".boxes");
//       const index = parseInt(box.getAttribute("data-index"));
//       cosmaticProducts.splice(index, 1); // ✅ delete the correct product
//       saveAllProducts();
//       cosmaticRenderProducts(); // re-render updated list
//     });
//   });
// }

// function addcosmaticproduct(cosmatic) {
//   cosmatic.preventDefault();
//   let convert = {
//     pname: cosmatic.target[0].value,
//     pabout: cosmatic.target[1].value,
//     imlink: cosmatic.target[2].value,
//     pprice: cosmatic.target[3].value,
//   };

//   cosmaticProducts = [...cosmaticProducts, convert];
//   cosmaticRenderProducts();
//   saveAllProducts();
//   // renderProducts();
//   cosmatic.target[0].value = "";
//   cosmatic.target[1].value = "";
//   cosmatic.target[2].value = "";
//   cosmatic.target[3].value = "";
// }
// cosmaticRenderProducts();

// cosmatic section ends

// furniture section starts

// function furnitureRenderProducts() {
//   let furnitureWithBox = furnitureProducts.map((furniture, i) => {
//     return `    <div class="boxes" data-index="${i}">
//     <h4>${furniture.pname}</h4>
//     <p>${furniture.pabout}
//     </p>
//     <img src="${furniture.imlink}" alt="">
//     <div class="money-cart">
//     <div class="price">$ ${furniture.pprice}</div>
//     <div class="add"><span class="addminus">ADD TO CART</span></div>
//     </div>
// <button type="button" class="btn btn-dark delete-product">Delete</button>

//     </div>`;
//   });
//   let furnitureBox = document.getElementById("furnitureBox");
//   furnitureBox.innerHTML = furnitureWithBox.join("");

//   const addButtons = furnitureBox.querySelectorAll(".addminus");
//   addButtons.forEach((e) => {
//     e.addEventListener("click", function () {
//       const box = e.closest(".boxes");

//       if (e.classList.contains("minus")) {
//         showNotification("error", "Item removed from cart");
//         e.classList.remove("minus");
//         e.innerHTML = "ADD TO CART";
//         const cloneBox = productToCartMap.get(box);
//         // redSingnal.classList.add("red-signal");
//         if (cloneBox) {
//           removeFromCart(cloneBox);
//           productToCartMap.delete(box);
//         }
//       } else {
//         showNotification("success", "Item added to cart");
//         e.classList.add("minus");
//         e.innerHTML = "Remove Item";
//         addToCart(box);
//       }
//     });
//   });

//   const deleteButtons = furnitureBox.querySelectorAll(".delete-product");
//   deleteButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const box = btn.closest(".boxes");
//       const index = parseInt(box.getAttribute("data-index"));
//       furnitureProducts.splice(index, 1); // ✅ delete the correct product
//       saveAllProducts();
//       furnitureRenderProducts(); // re-render updated list
//     });
//   });
// }

// function addfurnitureProduct(furniture) {
//   furniture.preventDefault();
//   let convert = {
//     pname: furniture.target[0].value,
//     pabout: furniture.target[1].value,
//     imlink: furniture.target[2].value,
//     pprice: furniture.target[3].value,
//   };
//   console.log(furniture.target[0].value);

//   furnitureProducts = [...furnitureProducts, convert];
//   furnitureRenderProducts();
//   saveAllProducts();
//   // renderProducts();
//   furniture.target[0].value = "";
//   furniture.target[1].value = "";
//   furniture.target[2].value = "";
//   furniture.target[3].value = "";
// }

// furnitureRenderProducts();

// furniture section ends

addButtons.forEach(function (e) {
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
    updateCartStorage();
  });
  cartBoxes.appendChild(clone);
  productToCartMap.set(box, clone);
  updateCartStorage();

  showNotification("success", "Item added to cart");
}

function removeFromCart(box) {
  if (cartBoxes.contains(box)) {
    cartBoxes.removeChild(box);
    updateCartStorage();
    showNotification("error", "Item removed from cart");
  }
  // const header = document.querySelector("header");
}
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

function updateCartStorage() {
  const cartItems = [];

  cartBoxes.querySelectorAll(".boxes").forEach((item) => {
    cartItems.push({
      title: item.querySelector("h4")?.innerText,
      desc: item.querySelector("p")?.innerText,
      price: item.querySelector(".price")?.innerText,
      img: item.querySelector("img")?.src,
    });
  });

  localStorage.setItem("cart", JSON.stringify(cartItems));
}

window.addEventListener("DOMContentLoaded", restoreCartFromStorage);

function restoreCartFromStorage() {
  const data = JSON.parse(localStorage.getItem("cart")) || [];

  data.forEach((product) => {
    const box = document.createElement("div");
    box.classList.add("boxes");

    box.innerHTML = `
      <h4>${product.title}</h4>
      <p>${product.desc}</p>
      <img src="${product.img}" alt="">
      <div class="money-cart">
        <div class="price">${product.price}</div>
        <div class="add"><span class="addminus minus">Remove Item</span></div>
      </div>
    `;

    const btn = box.querySelector(".addminus");
    btn.addEventListener("click", function () {
      btn.classList.remove("minus");
      btn.innerHTML = "ADD TO CART";
      removeFromCart(box);
      updateCartStorage();
    });

    cartBoxes.appendChild(box);
  });
}

// function saveAllProducts() {
//   localStorage.setItem("clothesProducts", JSON.stringify(products));
//   localStorage.setItem("foodProducts", JSON.stringify(foodproducts));
//   localStorage.setItem("cosmaticProducts", JSON.stringify(cosmaticProducts));
//   localStorage.setItem("furnitureProducts", JSON.stringify(furnitureProducts));
// }

// --- 2. Load all product arrays from localStorage at start ---

// function loadAllProducts() {
//   products = JSON.parse(localStorage.getItem("clothesProducts")) || [];
//   foodproducts = JSON.parse(localStorage.getItem("foodProducts")) || [];
//   cosmaticProducts = JSON.parse(localStorage.getItem("cosmaticProducts")) || [];
//   furnitureProducts =
//     JSON.parse(localStorage.getItem("furnitureProducts")) || [];

//   renderProducts();
//   foodRenderProducts();
//   cosmaticRenderProducts();
//   furnitureRenderProducts();

//   loadCartItems();
// }

// --- 3. Save cart to localStorage ---

// function updateCartStorage() {
//   const items = [];
//   productToCartMap.forEach((cloneBox, originalBox) => {
//     const pname = originalBox.querySelector("h4").innerText;
//     const pabout = originalBox.querySelector("p").innerText;
//     const imlink = originalBox.querySelector("img").src;
//     const pprice = originalBox
//       .querySelector(".price")
//       .innerText.replace("$", "")
//       .trim();
//     items.push({ pname, pabout, imlink, pprice });
//   });
//   localStorage.setItem("cartItems", JSON.stringify(items));
// }

// --- 4. Load cart from localStorage on page load ---

// function loadCartItems() {
//   const items = JSON.parse(localStorage.getItem("cartItems")) || [];
//   items.forEach((item) => {
//     // Find matching box in DOM
//     const originalBoxes = document.querySelectorAll(".boxes");
//     let matchedOriginalBox = null;

//     originalBoxes.forEach((b) => {
//       const name = b.querySelector("h4")?.innerText;
//       const about = b.querySelector("p")?.innerText;
//       const price = b
//         .querySelector(".price")
//         ?.innerText.replace("$", "")
//         .trim();
//       const img = b.querySelector("img")?.src;

//       if (
//         name === item.pname &&
//         about === item.pabout &&
//         price === item.pprice &&
//         img === item.imlink
//       ) {
//         matchedOriginalBox = b;
//         const btn = b.querySelector(".addminus");
//         if (btn) {
//           btn.classList.add("minus");
//           btn.innerText = "Remove Item";
//         }
//       }
//     });

// Create clone box for cart
// const cloneBox = document.createElement("div");
// cloneBox.classList.add("boxes");
// cloneBox.innerHTML = `
//   <h4>${item.pname}</h4>
//   <p>${item.pabout}</p>
//   <img src="${item.imlink}" alt="">
//   <div class="money-cart">
//     <div class="price">$ ${item.pprice}</div>
//     <div class="add"><span class="addminus minus">Remove Item</span></div>
//   </div>
// `;

// const btn = cloneBox.querySelector(".addminus");
// btn.addEventListener("click", function () {
//   btn.classList.remove("minus");
//   btn.innerHTML = "ADD TO CART";
//   removeFromCart(cloneBox);

//   if (matchedOriginalBox) {
//     const originalBtn = matchedOriginalBox.querySelector(".addminus");
//     if (originalBtn) {
//       originalBtn.classList.remove("minus");
//       originalBtn.innerText = "ADD TO CART";
//     }
//     productToCartMap.delete(matchedOriginalBox);
//   }

//   updateCartStorage();
// });

//     cartBoxes.appendChild(cloneBox);

//     // ✅ Reconnect map
//     if (matchedOriginalBox) {
//       productToCartMap.set(matchedOriginalBox, cloneBox);
//     }
//   });
// }

// function updateCartTotal() {
//   let total = 0;
//   cartBoxes.querySelectorAll(".boxes").forEach((box) => {
//     const price = parseFloat(
//       box.querySelector(".price").textContent.replace("$", "")
//     );
//     total += price;
//   });
//   document.getElementById("cartTotal").textContent = `Total: $${total}`;
// }

demo.addEventListener("click", function () {
  movie.style.display = "flex";
  // shoping.style.visibility = "hidden";
});

closeIcon.addEventListener("click", function () {
  movie.style.display = "none";
  Video.pause();
  Video.currentTime = 0;
});
