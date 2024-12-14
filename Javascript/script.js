//typing animation

var typed = new Typed(".typing" ,{
    strings: ["","Frontend Developer", "Web Developer", "Graphic Designer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

//aside
const nav = document.querySelector('.link');
    navList = nav.querySelectorAll('li');
    totalNavlist = navList.length;
    for(let i= 0; i<totalNavlist; i++){
        const a = navList[i].querySelector('a');
        a.addEventListener('click', function(){
            this.classList.add('active');
        })
    }