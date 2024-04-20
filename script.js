const rep = document.querySelector('button');

function reply(e) {
  const va = document.querySelector('input').value;
  alert(va);
}

rep.addEventListener('click', reply);
