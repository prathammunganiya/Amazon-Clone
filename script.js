document.addEventListener("DOMContentLoaded", () => {

  const allMenuBtn = document.getElementById("allMenu");
  const menuOptions = document.getElementById("menuOptions");
  const searchInput = document.querySelector(".search-input");
  const cartBtn = document.querySelector(".nav-cart");
  const backToTopBtn = document.querySelector(".foot-panel1");
  const signInBtn = document.querySelector(".nav-signin");

  const menuItems = [
    "Best Sellers",
    "Mobiles",
    "Fashion",
    "Electronics",
    "Home & Kitchen",
    "Amazon Pay",
    "New Releases",
    "Prime",
    "Customer Service"
  ];

  menuOptions.innerHTML = menuItems
    .map(item => `<div class="menu-item">${item}</div>`)
    .join("");

  menuOptions.style.cssText = `
    display:none;
    position:absolute;
    top:60px;
    left:0;
    background:#0f1111;
    width:250px;
    padding:10px;
    box-shadow:0 4px 12px rgba(0,0,0,0.3);
    z-index:1000;
  `;

  let menuOpen = false;

  allMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menuOpen = !menuOpen;
    menuOptions.style.display = menuOpen ? "block" : "none";
  });

  document.addEventListener("click", () => {
    menuOptions.style.display = "none";
    menuOpen = false;
  });

  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
      alert(`${item.textContent} clicked`);
      menuOptions.style.display = "none";
      menuOpen = false;
    });
  });

  let cartCount = 0;
  const cartBadge = document.createElement("span");
  cartBadge.textContent = cartCount;
  cartBadge.style.cssText = `
    background:red;
    color:white;
    border-radius:50%;
    padding:2px 6px;
    font-size:12px;
    margin-left:4px;
  `;
  cartBtn.appendChild(cartBadge);

  document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
      cartCount++;
      cartBadge.textContent = cartCount;
    });
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const modal = document.createElement("div");
  modal.style.cssText = `
    display:none;
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.5);
    z-index:2000;
  `;

  modal.innerHTML = `
    <div style="background:#fff;padding:20px;width:300px;margin:120px auto;border-radius:6px;">
      <h3>Sign In</h3>
      <input placeholder="Email" style="width:100%;margin-bottom:10px;padding:8px;">
      <input type="password" placeholder="Password" style="width:100%;margin-bottom:10px;padding:8px;">
      <button style="width:100%;padding:8px;background:#f0c14b;border:none;">
        Login
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  signInBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

});
