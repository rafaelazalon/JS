var curiosidades_chuck_norris = [
    { titulo: "Rotação da terra", conteudo: "Chuck Norris estava jogando bola e chutou o chão, a terra gira até hoje."},

    { titulo: "Contando sem parar", conteudo: "Chuck Norris contou até o infinito, 2 vezes."},

    { titulo: "Como surgio a lua", conteudo: "Chuck Norris chutou uma pedra para o céu, e agora ela se chama lua."},

    { titulo: "Suicida que não morre", conteudo: "Chuck Norris foi homem bomba 34 vezes."},

    { titulo: "Veneno", conteudo: "Chuck Norris uma vez foi picado pela manba negra, e dpois de duas horas agonizando de dor, a cobra morreu."},

    { titulo: "Manipulando o tempo", conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},

    { titulo: "Praticando esportes radicais", conteudo: "Chuck Norris faz bungee jump sem corda."},

    { titulo: "Extinção dos dinossauros", conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
     
    { titulo: "Não morre de ataque cardíaco", conteudo: "Chuck Norris não morre por ataque cardíaco, pois seu coração não tem coragem de ataca-lo."}
];

var tamanho_colecao = curiosidades_chuck_norris.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);