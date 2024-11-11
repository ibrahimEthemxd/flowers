const flow = document.querySelectorAll(".flowers");

flow.forEach(flowers => {
    flowers.addEventListener("click", (event) => {
        event.stopPropagation(); // Kartlara tıklarken doküman olayının tetiklenmesini engeller
        removeActive();
        if (!flowers.classList.contains("active")) {
            flowers.classList.add("active");
        } else {
            flowers.classList.remove("active");
        }
    });
});

document.addEventListener("click", () => {
    removeActive();
});

function removeActive() {
    flow.forEach(flowers => {
        flowers.classList.remove("active");
    });
}
