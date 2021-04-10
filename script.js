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

const dot = document.querySelectorAll('.dot');
dot.forEach((item, i) => {
  item.addEventListener("mouseenter", function() {
    console.log("it works")
  })
});
