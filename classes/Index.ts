import Arma from "./Arma";
import Inimigo from "./Inimigo";
import Personagem from "./Personagem";

//comentarios para ajudar a discernir cada parte

// criando a arma
const espada = new Arma(
  "Espada Arcana",
  "A história dessa arma é chata, pode pular.",
  50
);
console.log(
  `Arma: ${espada.getNome()}, Dano: ${espada.getDano()}, Descrição: ${espada.getDescricao()}`
);

// criando o personagem
const meuPersonagem = new Personagem("Steban Catavento", 300, 50);
meuPersonagem.setArma(espada);
console.log(`${meuPersonagem.getNome()} equipado com: ${espada.getNome()}`);

// criando o inimigo
const esqueleto = new Inimigo("Esqueleto Escarlate", 100, 20);
esqueleto.equiparArma(espada);
console.log(`${esqueleto.getNome()} equipado com: ${espada.getNome()}`);

