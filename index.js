class classhero{
    constructor(nome, idade, tipo)
  {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }
  atacar(){
  let ataque;
  
  switch(this.tipo){
  case `mago`:
      ataque = `magia`;
      break;
  
  case `guerreiro`:
      ataque = `espada`;
      break;
  case `monge`:
      ataque = `artes marciais`;
      break;
  
  case `ninja`:
      ataque = `shurikens`;
      break;
  }
  console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
  }
  let mago = new classhero("Arraki", 27, "mago")
  let guerreiro = new classhero("Gandalf", 47, "guerreiro")
  let monge = new classhero("Dalai", 1000, "monge")
  let ninja = new classhero("Senju", 17, "ninja")
  mago.atacar()
  guerreiro.atacar()
  monge.atacar()
  ninja.atacar()