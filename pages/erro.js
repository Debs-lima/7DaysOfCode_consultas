const inputs = document.querySelectorAll('input');
const select = document.querySelectorAll('select');

function validar(input) {
  const tipoInput = input.dataset.tipo;

  if(validador[tipoInput]){
    validador[tipoInput](input);
  }

  if(input.validity.valid) {
    input.parentElement.classList.remove('erro-edicao');
    input.parentElement.querySelector('.mensagem-erro').innerHTML = '';
  } else {
  input.parentElement.classList.add('erro-edicao');
  input.parentElement.querySelector('.mensagem-erro').innerHTML = mostrarErro(tipoInput, input);
}
}

function validarSelect(input) {
  const tipoInput = input.dataset.tipo;
 
  if(input.validity.valid) {
    input.parentElement.classList.remove('erro-edicao');
    input.parentElement.querySelector('.mensagem-erro').innerHTML = '';
  } else {
  input.parentElement.classList.add('erro-edicao');
  input.parentElement.querySelector('.mensagem-erro').innerHTML = mostrarErro(tipoInput, input);
  }
}

inputs.forEach( input => {
  input.addEventListener('blur', (evento) => {
    validar(evento.target);
  })
})

select.forEach( input => {
  input.addEventListener('blur', (evento) => {
    validarSelect(evento.target);
  })
})

const mensagensErro = {
  nome: {
    valueMissing: 'O campo não pode estar vazio'
  },
  formato: {
    valueMissing: 'Um formato de consulta deve ser selecionado'
  },
  data: {
    valueMissing: 'Selecione uma data'
  },
  horario: {
    customError: 'Selecionar uma hora entre 10 horas e 19 horas'
  }
}

const tipoErro = ['valueMissing', 'customError']

const validador = {
  horario:input => validaHorario(input)
}

function mostrarErro(tipoInput, input) {
  let mensagem = '';
  tipoErro.forEach(erro => {
    if(input.validity[erro]) {
      mensagem = mensagensErro[tipoInput][erro]
    }
  })

  return mensagem
}

function validaHorario(input) {
  const horario = input.value;
  let mensagem = '';

  if(horario < '10:00' || horario > '19:00') {
    mensagem = 'Selecionar uma hora entre 10 horas e 19 horas'; 
  }
  
  input.setCustomValidity(mensagem);
}