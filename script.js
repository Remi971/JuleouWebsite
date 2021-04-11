const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
})

var scrollBefore = 0;

window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;

    if(scrollBefore > scrolled){
        console.log("ScrollUP");
        scrollBefore = scrolled;
        //Desired action
    }else{
        scrollBefore = scrolled;
        console.log("ScrollDOWN");
        //Desired action
    }
})

const start = document.querySelector(".start");
start.classList.add("selected")

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
  })
  aDot.addEventListener("mouseleave", function() {
    line.style.width = '0px';
    span.style.opacity = 0;
    dot.classList.remove('active');
  })
  aDot.addEventListener("click", function() {
    point.forEach((el, i) => {
      el.classList.remove("selected")
    })
    dot.classList.add("selected")
  })
});
