const slider2 = document.getElementById("sliderImg");
primeraImg = slider2.querySelectorAll("div")[0];
flechasIcon = document.querySelectorAll("#sliderContainer i")

let movimientoInicio = false, enMovi = false, prevPageX, prevScrollLeft, cambiarPos;


const mostarIconos = () =>{
    let scrollWidth = slider2.scrollWidth -slider2.clientWidth;
    flechasIcon[0].style.display = slider2.scrollLeft == 0 ? "block" : "block"
    flechasIcon[1].style.display = slider2.scrollLeft == scrollWidth ? "block" : "block"
}

flechasIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        let primeraImgWidth = primeraImg.clientWidth + 40.2;
        slider2.scrollLeft += icon.id == "iconL" ? -primeraImgWidth : primeraImgWidth;
        setTimeout(() => mostarIconos(), 60);
    })
    
});

const autoMov = () => {
    if(slider2.scrollLeft == (slider2.scrollWidth - slider2.clientWidth)) return;
    cambiarPos = Math.abs(cambiarPos);
    let primeraImgWidth = primeraImg.clientWidth +  40.2;
    let calcPos = primeraImgWidth - cambiarPos

    if(slider2.scrollLeft >prevScrollLeft){
        return slider2.scrollLeft += cambiarPos > primeraImgWidth / 3 ? calcPos : -cambiarPos
    }
    slider2.scrollLeft -= cambiarPos > primeraImgWidth / 3 ? calcPos : -cambiarPos
}

const movInicio = (e) =>{
    movimientoInicio = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider2.scrollLeft
}

const movimiento = (e) => {
    if(!movimientoInicio) return;
    e.preventDefault()
    enMovi = true;
    slider2.classList.add("mov")
    cambiarPos = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider2.scrollLeft = prevScrollLeft - cambiarPos;
    mostarIconos ();
}

const movFinal =() => {
    movimientoInicio = false;
    slider2.classList.remove("mov")
    if(!enMovi) return;
    enMovi = false;
    mostarIconos ();
    autoMov ();
}

slider2.addEventListener("mousemove", movimiento);
slider2.addEventListener("touchmove", movimiento);

slider2.addEventListener("mousedown", movInicio);
slider2.addEventListener("touchstart", movInicio);

slider2.addEventListener("mouseup", movFinal);
slider2.addEventListener("mouseleave", movFinal);
slider2.addEventListener("touchend", movFinal);

const slider3 = document.getElementById("sliderImg2");
primeraImg = slider3.querySelectorAll("div")[0];
flechasIcon2 = document.querySelectorAll("#sliderContainer2 i")

let movimientoInicio2 = false, enMovi2 = false, prevPageX2, prevScrollLeft2, cambiarPos2;


const mostarIconos2 = () =>{
    let scrollWidth2 = slider3.scrollWidth -slider3.clientWidth;
    flechasIcon2[0].style.display = slider3.scrollLeft == 0 ? "block" : "block"
    flechasIcon2[1].style.display = slider3.scrollLeft == scrollWidth2 ? "block" : "block"
}

flechasIcon2.forEach(icon => {
    icon.addEventListener("click", () => {
        let primeraImgWidth = primeraImg.clientWidth + 40.2;
        slider3.scrollLeft += icon.id == "iconL" ? -primeraImgWidth : primeraImgWidth;
        setTimeout(() => mostarIconos2(), 60);
    })
    
});

const autoMov2 = () => {
    if(slider3.scrollLeft == (slider3.scrollWidth - slider3.clientWidth)) return;
    cambiarPos2 = Math.abs(cambiarPos2);
    let primeraImgWidth = primeraImg.clientWidth +  40.2;
    let calcPos = primeraImgWidth - cambiarPos2

    if(slider3.scrollLeft >prevScrollLeft2){
        return slider3.scrollLeft += cambiarPos2 > primeraImgWidth / 3 ? calcPos : -cambiarPos2
    }
    slider3.scrollLeft -= cambiarPos2 > primeraImgWidth / 3 ? calcPos : -cambiarPos2
}

const movInicio2 = (e) =>{
    movimientoInicio2 = true;
    prevPageX2 = e.pageX || e.touches[0].pageX;
    prevScrollLeft2 = slider3.scrollLeft
}

const movimiento2 = (e) => {
    if(!movimientoInicio2) return;
    e.preventDefault()
    enMovi2 = true;
    slider3.classList.add("mov")
    cambiarPos2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
    slider3.scrollLeft = prevScrollLeft2 - cambiarPos2;
    mostarIconos2 ();
}

const movFinal2 =() => {
    movimientoInicio2 = false;
    slider3.classList.remove("mov")
    if(!enMovi2) return;
    enMovi2 = false;
    mostarIconos2 ();
    autoMov2 ();
}

slider3.addEventListener("mousemove", movimiento2);
slider3.addEventListener("touchmove", movimiento2);

slider3.addEventListener("mousedown", movInicio2);
slider3.addEventListener("touchstart", movInicio2);

slider3.addEventListener("mouseup", movFinal2);
slider3.addEventListener("mouseleave", movFinal2);
slider3.addEventListener("touchend", movFinal2);

const slider4 = document.getElementById("sliderImg4");
primeraImg = slider4.querySelectorAll("div")[0];
flechasIcon3 = document.querySelectorAll("#sliderContainer4 i")

let movimientoInicio3 = false, enMovi3 = false, prevPageX3, prevScrollLeft3, cambiarPos3;


const mostarIconos4 = () =>{
    let scrollWidth4 = slider4.scrollWidth -slider4.clientWidth;
    flechasIcon3[0].style.display = slider4.scrollLeft == 0 ? "block" : "block"
    flechasIcon3[1].style.display = slider4.scrollLeft == scrollWidth4 ? "block" : "block"
}

flechasIcon3.forEach(icon => {
    icon.addEventListener("click", () => {
        let primeraImgWidth = primeraImg.clientWidth + 40.2;
        slider4.scrollLeft += icon.id == "iconL" ? -primeraImgWidth : primeraImgWidth;
        setTimeout(() => mostarIconos4(), 60);
    })
    
});

const autoMov3 = () => {
    if(slider4.scrollLeft == (slider4.scrollWidth - slider4.clientWidth)) return;
    cambiarPos3 = Math.abs(cambiarPos3);
    let primeraImgWidth = primeraImg.clientWidth +  40.2;
    let calcPos = primeraImgWidth - cambiarPos3

    if(slider4.scrollLeft >prevScrollLeft3){
        return slider4.scrollLeft += cambiarPos3 > primeraImgWidth / 3 ? calcPos : -cambiarPos3
    }
    slider4.scrollLeft -= cambiarPos3 > primeraImgWidth / 3 ? calcPos : -cambiarPos3
}

const movInicio3 = (e) =>{
    movimientoInicio3 = true;
    prevPageX3 = e.pageX || e.touches[0].pageX;
    prevScrollLeft3 = slider4.scrollLeft
}

const movimiento3 = (e) => {
    if(!movimientoInicio3) return;
    e.preventDefault()
    enMovi = true;
    slider4.classList.add("mov")
    cambiarPos3 = (e.pageX || e.touches[0].pageX) - prevPageX3;
    slider4.scrollLeft = prevScrollLeft3 - cambiarPos3;
    mostarIconos4 ();
}

const movFinal3 =() => {
    movimientoInicio3 = false;
    slider4.classList.remove("mov")
    if(!enMovi3) return;
    enMovi3 = false;
    mostarIconos4 ();
    autoMov3 ();
}

slider4.addEventListener("mousemove", movimiento3);
slider4.addEventListener("touchmove", movimiento3);

slider4.addEventListener("mousedown", movInicio3);
slider4.addEventListener("touchstart", movInicio3);

slider4.addEventListener("mouseup", movFinal3);
slider4.addEventListener("mouseleave", movFinal3);
slider4.addEventListener("touchend", movFinal3);