const btnGols = document.getElementById("btnGols");
const modalGols = document.getElementById("dialogGols");
const btnAssistencias = document.getElementById("btnAssistencias");
const modalAssistencias = document.getElementById("dialogAssistencias");
const closeModalGols = document.getElementById("closeModal");
const closeModalAssist = document.getElementById("closeModalAssist");
const btnCartaoA = document.getElementById("btnCartaoA");
const dialogCartoesA = document.getElementById("dialogCartoesA");
const btnCloseModalCA = document.getElementById("btnCloseModalCA");
const btnCartaoV = document.getElementById("btnCartaoV");
const dialogCartoesV = document.getElementById("dialogCartoesV");
const btnCloseModalCV = document.getElementById("btnCloseModalCV");


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

btnCartaoA.addEventListener('click', () => {

    dialogCartoesA.showModal();

});

btnCloseModalCA.addEventListener('click', () => {

    dialogCartoesA.close();

});

btnCartaoV.addEventListener('click', () => {

    dialogCartoesV.showModal();

});

btnCloseModalCV.addEventListener('click', () => {

    dialogCartoesV.close();

});