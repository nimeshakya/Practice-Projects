Array.from(document.querySelectorAll('.goback-btn')).forEach((btn) => {
    btn.onclick = () => {
        btn.parentElement.parentElement.classList.toggle('change');
    };
});
