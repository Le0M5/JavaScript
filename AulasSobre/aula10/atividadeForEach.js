let jogos = ["Valorant", "GTA V","Fortnite", "Minecraft", "Call of Duty"]

jogos.forEach((jogo, indice, todosOsJogos) => {
    console.log(`Jogo bom é esse: ${jogo}`);
    console.log(`Está no meu ${indice + 1}° lugar de jogo favorito`);
    console.log(`Essa é minha lista de jogos favoritos em ordem: ${todosOsJogos.join(" | ")}`);
    console.log("--- --- --- --- --- --- ---");
})