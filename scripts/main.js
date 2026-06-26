const btnGrupos = document.getElementById("btnGrupos");
const btnEstatis = document.getElementById("btnEstatistica");
const bntElimina = document.getElementById("btnElimi");

btnGrupos.addEventListener('click', () => {

    document.location.href = "pages/grupos.html";

});

btnEstatis.addEventListener('click', () => {

    document.location.href = "pages/estatisticas.html";

});

bntElimina.addEventListener('click', () => {

    document.location.href = "pages/eliminatorias.html";
    
});

bntEliminatorias.addEventListener('click', () => {

    modalEliminatorias.showModal();

    return;
});