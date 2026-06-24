const btnGrupos = document.getElementById("btnGrupos");
const btnVoltar = document.getElementById("btnVoltar");
const btnEstatis = document.getElementById("btnEstatistica");
const bntElimina = document.getElementById("bntEliminatorias");

btnEstatis.addEventListener('click', () => {

    document.location.href = "pages/estatisticas.html";

});

btnGrupos.addEventListener('click', () => {

    document.location.href = "pages/grupos.html";

    return;
});

btnVoltar.addEventListener('click', () => {

    document.location.href = "../index.html";

    return;
});

bntEliminatorias.addEventListener('click', () => {

    modalEliminatorias.showModal();

    return;
});