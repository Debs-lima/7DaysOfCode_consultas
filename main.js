const botaoFlutuante = document.querySelector('.botao-flutuante');
const botaoAdicionar = document.querySelector('.botao-adicionar');
const tela = document.querySelector('.aplicar-filtro');

let clicado = false;

function adicionarBotoes () {
  const botaoCamera = document.createElement('button');
  botaoCamera.classList.add('botao-camera');
  botaoFlutuante.appendChild(botaoCamera);

  const paginaRemota = document.createElement('a');
  paginaRemota.href = './pages/novaConsulta.html';
  botaoCamera.appendChild(paginaRemota);

  const botaoComponentes = document.createElement('div');
  botaoComponentes.classList.add('botao-componentes');
  paginaRemota.appendChild(botaoComponentes);

  const botaoDescricao = document.createElement('span');
  botaoDescricao.classList.add('botao-descricao');
  botaoDescricao.textContent = 'Nova consulta por vídeos';
  botaoComponentes.appendChild(botaoDescricao);

  const iconeCamera = document.createElement('img');
  iconeCamera.src = "./assets/icones/camera-adicionar.svg";
  botaoComponentes.appendChild(iconeCamera);

  const botaoLocalizacao = document.createElement('button');
  botaoLocalizacao.classList.add('botao-localizacao');
  botaoFlutuante.appendChild(botaoLocalizacao);
  
  const paginaPresencial = document.createElement('a');
  paginaPresencial.href = './pages/novaConsulta.html';
  botaoLocalizacao.appendChild(paginaPresencial);
  
  const botaoComponentesLoc = document.createElement('div');
  botaoComponentesLoc.classList.add('botao-componentes');
  paginaPresencial.appendChild(botaoComponentesLoc);

  const botaoDescricaoLoc = document.createElement('span');
  botaoDescricaoLoc.classList.add('botao-descricao');
  botaoDescricaoLoc.textContent = 'Nova consulta na casa do paciente';
  botaoComponentesLoc.appendChild(botaoDescricaoLoc);

  const iconeLocalizacao = document.createElement('img');
  iconeLocalizacao.src = "./assets/icones/location-adicionar.svg";
  botaoComponentesLoc.appendChild(iconeLocalizacao);

  const filtro = document.createElement('div');
  filtro.classList.add('filtro');
  tela.appendChild(filtro);

  return clicado = true;
}

function recolherBotoes () {
  const botaoVideo = document.querySelector('.botao-camera');
  const botaoEndereco = document.querySelector('.botao-localizacao');
  const filtroTela = document.querySelector('.filtro');

  botaoVideo.remove();
  botaoEndereco.remove();
  filtroTela.remove();

  return clicado = false;
}

function acao () {
  clicado ? recolherBotoes() : adicionarBotoes()
}

botaoAdicionar.addEventListener('click', acao)
