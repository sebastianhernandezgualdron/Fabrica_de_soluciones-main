const consultAe = document.getElementById("consultAe");
const consultFc = document.getElementById("consultFc");
const consultIs = document.getElementById("consultIs");
const consultMl = document.getElementById("consultMl");
const consultIi = document.getElementById("consultIi");
const consultNi = document.getElementById("consultNi");
const admiEmpre = document.getElementById("admi_empre");
const finanComer = document.getElementById("finan_comer");
const ingSoft = document.getElementById("ing_soft");
const markLog = document.getElementById("mark_log");
const ingIndus = document.getElementById("ing_indus");
const negocInter = document.getElementById("negoc_inter");



consultAe.onclick = () =>{
    if (admiEmpre.style.display === "block") {
        admiEmpre.style.display = "none";
    } else {
        admiEmpre.style.display = "block";
        finanComer.style.display = "none";
        ingSoft.style.display = "none";
        markLog.style.display = "none";
        ingIndus.style.display = "none";
        negocInter.style.display = "none";
    }
}
consultFc.onclick = () =>{
    if (finanComer.style.display === "block") {
        finanComer.style.display = "none";
    } else {
        admiEmpre.style.display = "none";
        finanComer.style.display = "block";
        ingSoft.style.display = "none";
        markLog.style.display = "none";
        ingIndus.style.display = "none";
        negocInter.style.display = "none";
    }
}
consultIs.onclick = () =>{
    if (ingSoft.style.display === "block") {
        ingSoft.style.display = "none";
    } else {
        admiEmpre.style.display = "none";
        finanComer.style.display = "none";
        ingSoft.style.display = "block";
        markLog.style.display = "none";
        ingIndus.style.display = "none";
        negocInter.style.display = "none";
    }
}
consultMl.onclick = () =>{
    if (markLog.style.display === "block") {
        markLog.style.display = "none";
    } else {
        admiEmpre.style.display = "none";
        finanComer.style.display = "none";
        ingSoft.style.display = "none";
        markLog.style.display = "block";
        ingIndus.style.display = "none";
        negocInter.style.display = "none";
    }
}
consultIi.onclick = () =>{
    if (ingIndus.style.display === "block") {
        ingIndus.style.display = "none";
    } else {
        admiEmpre.style.display = "none";
        finanComer.style.display = "none";
        ingSoft.style.display = "none";
        markLog.style.display = "none";
        ingIndus.style.display = "block";
        negocInter.style.display = "none";
    }
}
consultNi.onclick = () =>{
    if (negocInter.style.display === "block") {
        negocInter.style.display = "none";
    } else {
        admiEmpre.style.display = "none";
        finanComer.style.display = "none";
        ingSoft.style.display = "none";
        markLog.style.display = "none";
        ingIndus.style.display = "none";
        negocInter.style.display = "block";
    }
}

