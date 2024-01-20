document.addEventListener('DOMContentLoaded', function () {
    const modeToggleBtn = document.getElementById('modeToggleBtn');
    const body = document.body;

    modeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
