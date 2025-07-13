
document.getElementById("searchBox").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const title = item.querySelector(".boxdes h1").textContent.toLowerCase();
        if (title.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

