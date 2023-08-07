const btns = document.querySelectorAll('.botones button');
const imgs = document.querySelectorAll(".proyectosC div");
 

btns.forEach(button =>{
    button.addEventListener("click", ()=>{
        btns.forEach(button =>{
            button.className = "";   
        })
        button.className= "active";

    const value = button.textContent;
    console.log(button.textContent);
    imgs.forEach(div =>{
        div.style.display = "none";
        console.log(div.getAttribute("data-div"));
        if (div.getAttribute("data-div") == value || value == "All") {
            div.style.display = "flex";
        }
    });
    })
});