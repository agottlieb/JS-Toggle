const activeState = document.getElementById("active-state");
const share = document.querySelector(".btn");

const toggle = () => {
    activeState.classList.toggle("visible");
    console.log(1);
};

share.addEventListener("click", toggle);