import type Arma from "./Arma";
import type Inimigo from "./Inimigo";

export default class Personagem {
  private nome: string = "";
  private vida: number = 100;
  private força: number = 10;
  private arma: Arma | null = null;

  constructor(nome: string, vida: number = 100, força: number = 10) {
    this.nome = nome;
    this.vida = vida;
    this.força = força;
  }

  getNome() {
    return this.nome;
  }
  getVida() {
    return this.vida;
  }
  getForça() {
    return this.força;
  }
  getArma() {
    return this.arma;
  }

  setNome(nome: string) {
    this.nome = nome;
  }
  setVida(vida: number) {
    this.vida = vida;
  }
  setForça(força: number) {
    this.força = força;
  }
  setArma(arma: Arma) {
    this.arma = arma;
  }

  //metodo para receber dano

  receberDano(dano: number) {
    this.vida = this.vida - dano;
    if (this.vida < 0) {
      console.log("Personagem F");
    }
  }
  //metodo para equipar a arma
  equiparArma(arma: Arma) {
    this.arma = arma;
    console.log(this.arma.getNome() + " Equipado");
  }

  //metodo para atacar inimigo

  atacarInimigo(inimigo: Inimigo) {
    inimigo.receberDano(this.causarDano());
  }

  //metodo para caucular o dano que o personagem vai causar

  protected causarDano() {
    if (this.arma === null) {
      return this.força;
    } else {
      return this.força + this.arma.getDano();
    }
  }
}