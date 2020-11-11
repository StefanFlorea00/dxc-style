const wrapper = document.querySelectorAll(".question-checklist");
const wrapperArr = Array.from(wrapper);


wrapperArr.forEach(question => question.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("active")) {
        console.log("i clicked here before");
        e.currentTarget.firstElementChild.lastElementChild.classList.add("right");
        e.currentTarget.firstElementChild.lastElementChild.classList.remove("rotated");
        e.currentTarget.lastElementChild.classList.remove("appearing");
        e.currentTarget.classList.remove("active");
    }

    else {
        e.currentTarget.firstElementChild.lastElementChild.classList.remove("right");
        e.currentTarget.firstElementChild.lastElementChild.classList.add("rotated");
        e.currentTarget.classList.add("active");
        e.currentTarget.lastElementChild.classList.add("appearing");
    }
}))

const p = document.querySelectorAll(".hidden-checklist");
const pArr = Array.from(p);

pArr.forEach(pActive => pActive.addEventListener("click", (f) => {
    console.log(f.currentTarget);
    f.currentTarget.classList.remove("appearing");
    if (f.currentTarget.parentElement.classList.contains("active")) {
        console.log("your dad is a cunt");
    }
}));
