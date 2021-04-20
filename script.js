//Sections
const sections = document.querySelectorAll(".section")
// activation de la puce de la première page
const start = document.querySelector(".start");
start.classList.add("selected");
const accueil = document.querySelector(".part1");
//accueil.classList.add("selectionActive");
//navigateur
const navigateur = document.querySelector(".navigateur")
//Puces du Navigateur
const puces = document.querySelectorAll("#point")

//Activation de la puce en fonction de la section affichée
function checkSection() {
  sections.forEach((section, i) => {
    // console.log(section.getBoundingClientRect().top)
    // console.log(window.innerHeight)
    if (section.getBoundingClientRect().top > -window.innerHeight/2 && section.getBoundingClientRect().top < window.innerHeight/2){
      puces[i].classList.add("selected");
      section.classList.add("sectionActive")
    } else {
      puces[i].classList.remove("selected");
      if (!section.classList.contains("reduit")){
        section.classList.remove("sectionActive")
      }
    }
  })
};
const wrapper = document.querySelector(".wrapper")
wrapper.addEventListener("scroll", checkSection);
checkSection();

// Navigateur et ses puces
const part = document.querySelectorAll('.part');
part.forEach((item, i) => {
  const line = item.querySelector('.line');
  const aDot = item.querySelector('.dot');
  const span = item.querySelector('span');
  const dot = aDot.querySelector('span');
  const point = document.querySelectorAll("#point")
  aDot.addEventListener("mouseenter", function() {
    line.style.width = '30px';
    span.style.opacity = 1;
    dot.classList.add('active');
    console.log()
  })
  aDot.addEventListener("mouseleave", function() {
    line.style.width = '0px';
    span.style.opacity = 0;
    dot.classList.remove('active');
  })
  // aDot.addEventListener("click", function() {
  //   point.forEach((el, i) => {
  //     el.classList.remove("selected")
  //   })
  //   dot.classList.add("selected")
  // })
});

//Menu
const toggle = document.querySelector('.toggle')
const menu = document.getElementById("menu");
toggle.addEventListener('click', () => {
  toggle.classList.toggle("active");
  navigateur.classList.toggle("menu");
  const sectionActive = document.querySelector(".sectionActive");
  sectionActive.classList.toggle("reduit");
  menu.classList.toggle("activated");
})
const liens = document.querySelectorAll('.activated a');
liens.forEach((lien) => {
  lien.addEventListener('click', () => {
    toggle.classList.remove('active');
    menu.classList.remove("activated");
  })
})
