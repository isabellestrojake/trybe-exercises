window.onload = function () {
  const button = document.querySelector('#submit');
  button.addEventListener('click', handleSubmit);
  
  const clearBtn = document.querySelector('#limpar');
  clearBtn.addEventListener('click', clearForm);

  const autorizacao = document.querySelector('#autorizacao');
  autorizacao.addEventListener('change', enableSubmit);
}

function handleSubmit(event) {
  event.preventDefault();

  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

function clearForm() {
  const inputs = document.querySelectorAll('input');
  const texts = document.querySelectorAll('textarea');

  for (let index = 0; index < inputs.length; index += 1) {
    const userInput = inputs[index];
    userInput.value = '';
    userInput.checked = false;
  }
  texts.value = '';
}

function enableSubmit() {
  const submitBtn = document.querySelector('#submit');
  const autorizacao = document.querySelector('#autorizacao');

  submitBtn.disabled = !autorizacao.checked;
}



function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#input-nome').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#motivo').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}