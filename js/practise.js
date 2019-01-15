const headChange = document.querySelector(".article__header");
headChange.textContent = "Welcome to the Panya blog";

const impClass = document.querySelectorAll(".article__header");
for (i = 0; i < impClass.length; i++) {
    impClass[i].classList.add("important");
}

const dasherGone = document.querySelector(".dashed");
dasherGone.classList.remove("dashed");
//dasherGone.textContent = "";
//dasherGone.innerHTML = "";
//dasherGone.remove();

const colorMe = document.querySelector(".article__footer");
colorMe.classList.add("goldenrod");