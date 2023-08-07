const toggleBtn = document.querySelector(".toggleBtn");
const toggleBtnIcon = document.querySelector(".toggleBtn i");
const dropdownMenu = document.querySelector(".dropdownMenu");

toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}

