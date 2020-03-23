let btn = document.querySelector('.btn'),
    animateObject = document.querySelector('.animateObject');

let myAnivate = function () {

    let pos = 0,
        rotate = 0;
        rotateStep = (360+180) / 300;
        bgcolor = 000000;


    let idInterval = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(idInterval);
        } else {
            pos++;
            rotate += rotateStep;
            bgcolor += 5;
            animateObject.style.top = pos + 'px';
            animateObject.style.left = pos + 'px';
            animateObject.style.transform = 'rotate('+ rotate +'deg)';
            animateObject.style.backgroundColor = '#' + bgcolor;

        }
    }
}



btn.addEventListener('click', myAnivate);