const displaySearchBtn = document.querySelector(".activate-search-menu")
const searchbarContainer = document.querySelector(".searchbar-container")

displaySearchBtn.addEventListener("click", function () {
    if (searchbarContainer.style.display === "block") {
        searchbarContainer.style.display = "none"
    } else {
        searchbarContainer.style.display = "block"
    }
})