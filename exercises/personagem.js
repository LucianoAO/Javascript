function personagemMorreu (dano, saude) {
    if (saude > dano) {
        console.log(`O ataque foi de ${dano} de damage, seu personagem ficou com ${saude - dano}hp, não morreu!`)
    } else if (saude == dano) {
        console.log(`Oh não! Seu personagem lutou bravamente, sofreu ${dano} de damage com ${saude} de hp, foi um lutador incrível, e quase sobreviveu...`)
    } else {
        console.log(`Seu personagem sofreu ${dano}, com ${saude} causando sua morte`)
    }
}

console.log(personagemMorreu(0.5,1))