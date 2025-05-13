let filmes = [
  { nome: "A viagem de Chihiro", idade: 0, categorias: ["fantasia", "aventura", "animacao"] },
  { nome: "A substância", idade: 14, categorias: ["Terror", "ficcao"] },
  { nome: "Challengers", idade: 14, categorias: ["Esporte", "romance", "drama"] },
  { nome: "Guardiões da Galáxia", idade: 12, categorias: ["fantasia", "aventura"] },
  { nome: "Young Hearts", idade: 10, categorias: ["drama", "romance"] },
  { nome: "O menino que descobriu o vento", idade: 14, categorias: ["drama"] },
  { nome: "Companion", idade: 16, categorias: ["terror", "suspense"] },
  { nome: "O quarto ao lado", idade: 14, categorias: ["drama", "ficcao"] },
  { nome: "Ainda estou aqui", idade: 14, categorias: ["drama"] },
  { nome: "Flow", idade: 0, categorias: ["aventura", "fantasia", "animacao"] }
];

let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDrama, gostaTerror, gostaSuspense, gostaFiccao, gostaAnimacao;
let filmesRecomendados = [];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Filmes", 20, 30);

  // Coletar idade
  idadeUsuario = int(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaFantasia = prompt("Você gosta de filmes de fantasia? (sim/não)").toLowerCase() === "sim";
  gostaAventura = prompt("Você gosta de filmes de aventura? (sim/não)").toLowerCase() === "sim";
  gostaDrama = prompt("Você gosta de filmes de drama? (sim/não)").toLowerCase() === "sim";
  gostaTerror = prompt("Você gosta de filmes de terror? (sim/não)").toLowerCase() === "sim";
  gostaSuspense = prompt("Você gosta de filmes de suspense? (sim/não)").toLowerCase() === "sim";
  gostaFiccao = prompt("Você gosta de filmes de ficção? (sim/não)").toLowerCase() === "sim";
  gostaAnimacao = prompt("Você gosta de filmes de animação? (sim/não)").toLowerCase() === "sim";

  for (let filme of filmes) {
    if (idadeUsuario >= filme.idade) {
      let gostouDeAlgumGenero = false;
      if (gostaFantasia && filme.categorias.includes("fantasia")) {
        gostouDeAlgumGenero = true;
      }
      if (gostaAventura && filme.categorias.includes("aventura")) {
        gostouDeAlgumGenero = true;
      }
      if (gostaDrama && filme.categorias.includes("drama")) {
        gostouDeAlgumGenero = true;
      }
      if (gostaTerror && filme.categorias.includes("terror")) {
        gostouDeAlgumGenero = true;
      }
      if (gostaSuspense && filme.categorias.includes("suspense")) {
        gostouDeAlgumGenero = true;
      }
      if (gostaFiccao && filme.categorias.includes("ficcao")) {
        gostouDeAlgumGenero = true;
      }
      if (gostaAnimacao && filme.categorias.includes("animacao")) {
        gostouDeAlgumGenero = true;
      }
      if (gostouDeAlgumGenero) {
        filmesRecomendados.push(filme.nome);
      }
    }
  }

  if (filmesRecomendados.length > 0) {
    text("Filmes recomendados para você:", 20, 70);
    for (let i = 0; i < filmesRecomendados.length; i++) {
      text("- " + filmesRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum filme disponível para sua idade e preferências.", 20, 70);
  }
}

function draw() {
  // A função draw está vazia, pois a lógica principal está no setup
}
