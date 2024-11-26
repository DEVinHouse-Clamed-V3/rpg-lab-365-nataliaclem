import Personagem from "./Personagem";

export default class Inimigo extends Personagem {
  atacar(personagem: Personagem) {
    const chanceDeAcerto = Math.random();
    if (chanceDeAcerto < 0.5) {
      console.log("atacque falhou");
    } else {
      personagem.receberDano(this.causarDano());
    }
  }

  // Método que define uma ação aleatória do inimigo durante o combate
  comportamentoAleatorio(personagem: Personagem) {
    const acao = Math.random();

    if (acao < 0.5) {
      console.log("decide esperar e observar...");
    } else {
      console.log("decide atacar!");
      this.atacar(personagem);
    }
  }
}