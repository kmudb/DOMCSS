


window.onload = function (){
    const submit = document.getElementById("submit");
    submit.addEventListener('click', validate);
}

function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById("firstname");
  let valid = true;

  if (!firstNameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);
  }else{
      firstNameField.classList.remove("invalid");
      nameError.setAttribute('aria-hidden', true);
      nameError.classList.remove('visible');
  }
  return valid;
}

function establecerVisibilidadImagen(id, visibilidad) {
    var img = document.getElementById(id);
    img.style.visibility = (visibilidad ? 'visible' : 'hidden');
    }
