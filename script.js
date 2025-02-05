const buttonNao = document.getElementById('nao');

buttonNao.addEventListener('mouseover', () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (windowWidth - buttonNao.offsetWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - buttonNao.offsetHeight));

    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
});

const buttonSim = document.getElementById('sim');
buttonSim.addEventListener('click', () => {
    alert("Que ótimo! Vamos marcar algo então! 😊");
});