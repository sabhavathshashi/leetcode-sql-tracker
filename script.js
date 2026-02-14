document.addEventListener("DOMContentLoaded", function () {

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Load saved state
    checkboxes.forEach(box => {
        const saved = localStorage.getItem(box.id);
        if (saved === "true") {
            box.checked = true;
        }
    });

    // Save state on change
    checkboxes.forEach(box => {
        box.addEventListener("change", function () {
            localStorage.setItem(box.id, box.checked);
        });
    });

});
