const slider = document.getElementById("sliderImg");
primeraImg = slider.querySelectorAll("div")[0];
flechasIcon = document.querySelectorAll("#sliderContainer i")

let movimientoInicio = false, enMovi = false, prevPageX, prevScrollLeft, cambiarPos;


const mostarIconos = () =>{
    let scrollWidth = slider.scrollWidth -slider.clientWidth;
    flechasIcon[0].style.display = slider.scrollLeft == 0 ? "none" : "block"
    flechasIcon[1].style.display = slider.scrollLeft == scrollWidth ? "none" : "block"
}

flechasIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        let primeraImgWidth = primeraImg.clientWidth + 47.2;
        slider.scrollLeft += icon.id == "iconL" ? -primeraImgWidth : primeraImgWidth;
        setTimeout(() => mostarIconos(), 60);
    })
    
});

const autoMov = () => {
    if(slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) return;
    cambiarPos = Math.abs(cambiarPos);
    let primeraImgWidth = primeraImg.clientWidth +  47.2;
    let calcPos = primeraImgWidth - cambiarPos

    if(slider.scrollLeft >prevScrollLeft){
        return slider.scrollLeft += cambiarPos > primeraImgWidth / 3 ? calcPos : -cambiarPos
    }
    slider.scrollLeft -= cambiarPos > primeraImgWidth / 3 ? calcPos : -cambiarPos
}

const movInicio = (e) =>{
    movimientoInicio = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft
}

const movimiento = (e) => {
    if(!movimientoInicio) return;
    e.preventDefault()
    enMovi = true;
    slider.classList.add("mov")
    cambiarPos = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - cambiarPos;
    mostarIconos ();
}

const movFinal =() => {
    movimientoInicio = false;
    slider.classList.remove("mov")
    if(!enMovi) return;
    enMovi = false;
    mostarIconos ();
    autoMov ();
}

slider.addEventListener("mousemove", movimiento);
slider.addEventListener("touchmove", movimiento);

slider.addEventListener("mousedown", movInicio);
slider.addEventListener("touchstart", movInicio);

slider.addEventListener("mouseup", movFinal);
slider.addEventListener("mouseleave", movFinal);
slider.addEventListener("touchend", movFinal);