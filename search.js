document.getElementById("searchBox").addEventListener("input", function() {
    let searchValue = this.value.toLowerCase();
    let items = document.querySelectorAll(".item");
    
    if (searchValue === "") {
        items.forEach(item => item.style.display = "block");
        return;
    }
    
    items.forEach(item => {
        let text = item.querySelector("h1").textContent.toLowerCase();
        if (text.startsWith(searchValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
