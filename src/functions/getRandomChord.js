import Scales from '../base/Scales'

const getRandomChord = () => {  // Gerar chord aleatório (nem sempre)

  const keys = [] // Criar array de chaves do objeto

  for (let chord in Scales) {
    keys.push(chord) // Alimentar essa array
  }

  const randomPosition = parseInt(Math.random() * 24) // Aleatório entre 1 e 24
  return keys[randomPosition] // Definir chord aleatório

}

export default getRandomChord