let left = document.querySelector(".linding .fa-angle-left");
let right = document.querySelector(".linding .fa-angle-right");
let linding = document.querySelector(".linding");
let point = document.querySelectorAll(".linding ul li");
let arrayImg = [1, 2, 3];
let pos = arrayImg.length - 2;

left.addEventListener("click", () => {
    linding.style.backgroundImage = `url(../images/${arrayImg[pos]}.jpg)`;
    point.forEach((e) => {
        e.classList.remove("as");
        if (pos == 0) {
            if (e.dataset.num == 1) e.classList.add("as");
        } else if (pos == 1) {
            if (e.dataset.num == 2) e.classList.add("as");
        } else if (pos == 2) {
            if (e.dataset.num == 3) e.classList.add("as");
        }
    });
    pos--;
    if (pos < 0) pos = arrayImg.length - 1;
});
right.addEventListener("click", () => {
    linding.style.backgroundImage = `url(../images/${arrayImg[pos]}.jpg)`;
    point.forEach((e) => {
        e.classList.remove("as");
        if (pos == 0) {
            if (e.dataset.num == 1) e.classList.add("as");
        } else if (pos == 1) {
            if (e.dataset.num == 2) e.classList.add("as");
        } else if (pos == 2) {
            if (e.dataset.num == 3) e.classList.add("as");
        }
    });
    pos++;
    if (pos > arrayImg.length - 1) pos = 0;
});

// ##########################

let imag = document.querySelectorAll(".portfolio .image-container .conta");
let chose = document.querySelectorAll(".portfolio ul.shuffle li").forEach((li) => {
    li.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach((el) => {
            el.classList.remove("active");
        });
        e.target.classList.add("active");
        imag.forEach((im) => {
            im.style.display = "none";
        });
        document.querySelectorAll(e.target.dataset.cat).forEach((el) => {
            el.style.display = "block";
        });
    });
});