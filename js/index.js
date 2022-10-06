// GO-TO-TOP BUTTON
let topBtn = document.querySelector(".top-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener("click", function () {
  resMenuBox.style.animation = "resMenuBoxNormal 0.1s forwards 1";
  resMenuBarOne.style.animation = "resMenuBarOneNormal 0.1s forwards 1";
  resMenuBarTwo.style.animation = "resMenuBarTwoNormal 0.1s forwards 1";
});

// Responsive Bar
const navMenuBox = document.querySelector(".nav-menu-box");
const resBar = document.querySelector(".resbar");
const resMenuBox = document.querySelector(".res-menu-box");
const resMenuBarOne = document.querySelector(".res-menu-bar-one");
const resMenuBarTwo = document.querySelector(".res-menu-bar-two");
const resAbout = document.querySelector(".resbar-about");
const resSkills = document.querySelector(".resbar-skills");
const resProjects = document.querySelector(".resbar-projects");
const footerCallMe = document.querySelector(".footer-call");

navMenuBox.addEventListener("click", function () {
  resBar.style.animation = "resbarAppear 1s forwards 1";
  resMenuBox.style.animation = "resMenuBox 0.3s forwards 1 1.6s";
  resMenuBarOne.style.animation = "resMenuBarOne 0.3s forwards 1 1s";
  resMenuBarTwo.style.animation = "resMenuBarTwo 0.3s forwards 1 1.3s";
});

resMenuBox.addEventListener("click", function () {
  resBar.style.animation = "resbarDisappear 1s forwards 1";
  resMenuBox.style.animation = "resMenuBoxNormal 0.1s forwards 1";
  resMenuBarOne.style.animation = "resMenuBarOneNormal 0.1s forwards 1";
  resMenuBarTwo.style.animation = "resMenuBarTwoNormal 0.1s forwards 1";
});

function resLinkClick(linkName) {
  linkName.addEventListener("click", function () {
    resBar.style.animation = "resbarDisappear 0.2s forwards 1";
  });
}

resLinkClick(resAbout);
resLinkClick(resSkills);
resLinkClick(resProjects);

// Popups Functions
function closebtn(btnName, popUpName) {
  btnName.addEventListener("click", function () {
    popUpName.style.display = "none";
  });
}

function cardPopUp(cardName, popUpName) {
  cardName.addEventListener("click", function () {
    popUpName.style.display = "block";
  });
}

// Bay Point Popup
const bpPopUp = document.querySelector(".bp-popup");
const bpCard = document.querySelector(".bay-point-card");
const bpCloseBtn = document.querySelector(".bp-close-btn");

cardPopUp(bpCard, bpPopUp);
closebtn(bpCloseBtn, bpPopUp);

// Dozer Construction Popup
const dcPopUp = document.querySelector(".dc-popup");
const dcCard = document.querySelector(".dozer-constr-card");
const dcCloseBtn = document.querySelector(".dc-close-btn");

cardPopUp(dcCard, dcPopUp);
closebtn(dcCloseBtn, dcPopUp);

// Rachel Smith Popup
const rsPopUp = document.querySelector(".rs-popup");
const rsCard = document.querySelector(".rachel-smith-card");
const rsCloseBtn = document.querySelector(".rs-close-btn");

cardPopUp(rsCard, rsPopUp);
closebtn(rsCloseBtn, rsPopUp);

// Rachel Smith Popup
const ssPopUp = document.querySelector(".ss-popup");
const ssCard = document.querySelector(".scholarly-studies-card");
const ssCloseBtn = document.querySelector(".ss-close-btn");

cardPopUp(ssCard, ssPopUp);
closebtn(ssCloseBtn, ssPopUp);

// Abigael Scents Popup
const asPopUp = document.querySelector(".as-popup");
const asCard = document.querySelector(".abigael-scentcard");
const asCloseBtn = document.querySelector(".as-close-btn");

cardPopUp(asCard, asPopUp);
closebtn(asCloseBtn, asPopUp);
