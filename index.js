let menuLinks = [
  { text: "about", href: "/about" },
  {text: "catalog", href: "#", subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ]},
  {
    text: "orders", href: "#", subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ]},
  {text: "account", href: "#", subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ]},
];

let mainEl = document.querySelector("main");
// console.log(mainEl);
const mainbg = "#4a4e4d";
mainEl.style.backgroundColor = mainbg;
const h1 = document.createElement("h1");
// console.log(h1)
h1.textContent = "DOM Manipulation";
// console.log(h1);
mainEl.appendChild(h1);
h1.classList.add("flex-ctr");
h1.style.height = "100%";

// ===========================================================
let topMenuEl = document.getElementById("top-menu")
// console.log(topMenuEl)
topMenuEl.style.height = "100%";
const topColor = "#0e9aa7";
topMenuEl.style.backgroundColor = topColor;
topMenuEl.classList.add("flex-around");

menuLinks.forEach((link) => {
  let aElement = document.createElement('a');
  aElement.setAttribute('href', link.href);
  aElement.textContent = link.text;
  topMenuEl.appendChild(aElement);
 
});

// ============================================================
// Part 3
let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
const subMenuColor = "#3da4ab";
subMenuEl.style.backgroundColor = subMenuColor;
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
// =============================================================


// =====================Part 4==========================

let topMenuLinks = topMenuEl.querySelectorAll('a');

// console.log(topMenuLinks)

topMenuEl.addEventListener('click', function(event) {
event.preventdefault;
if(!event.target.matches('a')) {
return;
  }
  // console.log(event.target.textContent);
  
  if(!event.target.classList.contains('active')) {
    event.target.classList.add('active')
  } else {
    event.target.classList.remove('active')
  }

  // ===================Part 5======================
  if (event.target.textContent === "about") {
    subMenuEl.style.top = "0";
  } else {
    subMenuEl.style.top = "100%";
    
  }

}
)
;




