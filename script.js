const url = `https://picsum.photos/v2/list`;
const body = document.querySelector('body');
const main = document.querySelector('main');

//criação de função assíncrona para buscar os dados da url
async function getDados(url) {
    const dados = await (await fetch(url)).json();
//variavel para armazenar os dados do fetch
//O primeiro await é para esperar a resposta do fetch, e o segundo await é para esperar a conversão da resposta em json    
    filtrarDados(dados);
    
} 
//iniciando a função getDados e passa a url como parâmetro de busca.
getDados(url);
// funcao para filtrar os dados e mostrar as urls das imagens no console
function filtrarDados(dados) {
    const urlIMG = dados.forEach((elemento) => {
        inserirIMG(elemento.download_url)
        console.log(elemento.download_url);
    });
}
//Função apra estilizar o os elementos da página (body e main)
function estilizarMural(){
    body.className = "flex items-center justify-center"
}   main.classList.add("columns-3", "gap-5", "*:mt-5")

estilizarMural();

function inserirIMG(url) {

    //Cria o elemento img
  let img = document.createElement('img');
  // Adiciona o valor da url recebida dentro da propiedade src (source)
    img.src = url;
  // Adiciona a imagem criada dentro do elemento main
    main.appendChild(img);
}