function limitaPosicao (posicao) {
    if (posicao < 0 || posicao > 100) {
        return 50
    } else {
        return posicao
    }
  }

  console.log(limitaPosicao(76))