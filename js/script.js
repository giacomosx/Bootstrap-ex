const controlsBtn = document.querySelectorAll('.controlsBtn');
const heartBtn = document.querySelectorAll('.heartBtn');

controlsBtn.forEach(button => {
    button.addEventListener('click', function(){
        if (button.classList.contains('text--yellow')) {
            button.classList.remove('text--yellow');
            button.innerHTML= '<ion-icon name="play-outline"></ion-icon>';
        } else {
            button.classList.add('text--yellow');
            button.innerHTML= '<ion-icon name="pause"></ion-icon>';
        }
    })
})

heartBtn.forEach(button => {
    button.addEventListener('click', function(){
        if (button.classList.contains('text-danger')) {
            button.classList.remove('text-danger');
            button.innerHTML= '<ion-icon name="heart-outline"></ion-icon>';
        } else {
            button.classList.add('text-danger');
            button.innerHTML= '<ion-icon name="heart"></ion-icon>';
        }
    })
})
