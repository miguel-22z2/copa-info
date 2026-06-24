const btnGols = document.getElementById("btnGols");
const modalGols = document.getElementById("dialogGols");
const btnAssistencias = document.getElementById("btnAssistencias");
const modalAssistencias = document.getElementById("dialogAssistencias");
const closeModalGols = document.getElementById("closeModal");
const closeModalAssist = document.getElementById("closeModalAssist");

btnGols.addEventListener('click', () => {

    modalGols.showModal();

});

closeModalGols.addEventListener('click', () => {

    modalGols.close();

});

btnAssistencias.addEventListener('click', () => {

    modalAssistencias.showModal();

});

closeModalAssist.addEventListener('click', () => {

    modalAssistencias.close();

});
