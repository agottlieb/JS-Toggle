const share = document.querySelector('.btn');
const activeState = document.querySelector('.active-state');

const toggle = () => {
    activeState.classList.toggle('visible');
    console.log(1);
};

share.addEventListener('click', toggle);