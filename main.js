document.addEventListener("DOMContentLoaded", () => {
  const writeModal = document.getElementById("writeModal");
  writeModal.addEventListener("click", (e) => {
    if (e.target.id === "writeModal__btn") {
      writeModal.style.display = "none";
    }
  });
});
