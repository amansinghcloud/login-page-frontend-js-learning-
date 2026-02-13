const forms = document.querySelectorAll(".form");

function next(step){
    forms.forEach(form => {
        form.style.left = (parseInt(form.style.left || getComputedStyle(form).left) - 100) + "%";
    });
}

function prev(step){
    forms.forEach(form => {
        form.style.left = (parseInt(form.style.left || getComputedStyle(form).left) + 100) + "%";
    });
}
