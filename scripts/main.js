const btnGrupos = document.getElementById("btnGrupos");
const btnEstatis = document.getElementById("btnEstatistica");
const bntElimina = document.getElementById("bntEliminatorias");

btnGrupos.addEventListener('click', () => {

    document.location.href = "pages/grupos.html";

    return;
});

btnEstatis.addEventListener('click', () => {

    document.location.href = "pages/estatisticas.html";

});


bntEliminatorias.addEventListener('click', () => {

    modalEliminatorias.showModal();

    return;
});