let commit1=document.getElementById("modalCommis1");
let button1=document.querySelectorAll(".btnOpen1");
let close_modal1=document.querySelectorAll("#modalCommis1 i")[0];
let fondoVentanaModal1=document.getElementById("fondoVentanaModal");

close_modal1.addEventListener("click",()=>{
    commit1.classList.toggle("showModalCommis");
    fondoVentanaModal1.classList.toggle("showFondo");
});

button1.forEach(btn => btn.addEventListener("click",()=>{
    fondoVentanaModal1.classList.toggle("showFondo");
    commit1.classList.toggle("showModalCommis");
}

));

let commit2=document.getElementById("modalCommis2");
let button2=document.querySelectorAll(".btnOpen2");
let close_modal2=document.querySelectorAll("#modalCommis2 i")[0];
let fondoVentanaModal2=document.getElementById("fondoVentanaModal");

close_modal2.addEventListener("click",()=>{
    commit2.classList.toggle("showModalCommis");
    fondoVentanaModal2.classList.toggle("showFondo");
});

button2.forEach(btn => btn.addEventListener("click",()=>{
    fondoVentanaModal2.classList.toggle("showFondo");
    commit2.classList.toggle("showModalCommis");
}

));


let commit=document.getElementById("modalCommis");
let button=document.querySelectorAll(".btnOpen");
let close_modal=document.querySelectorAll("#modalCommis i")[0];
let fondoVentanaModal=document.getElementById("fondoVentanaModal");

close_modal.addEventListener("click",()=>{
    commit.classList.toggle("showModalCommis");
    fondoVentanaModal.classList.toggle("showFondo");
});

button.forEach(btn => btn.addEventListener("click",()=>{
    fondoVentanaModal.classList.toggle("showFondo");
    commit.classList.toggle("showModalCommis");
}

));

