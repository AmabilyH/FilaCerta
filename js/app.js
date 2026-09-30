let servicos = [];
async function iniciar() {
    const resposta = await fetch("dados/servicos.json");
    servicos = await resposta.json();
    montarLista(servicos);
}
iniciar();