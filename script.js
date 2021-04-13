const progressbar = document.getElementById('progressbar');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circle= document.querySelectorAll('circle');

let currentActive = 1

nextBtn.addEventListener('click',()=> {
    progressForward()
});

prevBtn.addEventListener('click',()=> {
    progressBack()
});


function progressForward() {
    currentActive++
    console.log(currentActive)
}
function progressback() {
    currentActive--
}