function showFormPart() {
  let idType = document.querySelector('input[name="idType"]:checked').value;
  let passportInputs = document.querySelectorAll("#passportDetail input");
  let driverLicInputs = document.querySelectorAll("#driverLicDetail input");

  if (idType == "passport") {
    for (let input of passportInputs) {
      input.disabled = false;
    }
    for (let input of driverLicInputs) {
      input.disabled = true;
    }
  } else {
    for (let input of driverLicInputs) {
      input.disabled = false;
    }
    for (let input of passportInputs) {
      input.disabled = true;
    }
  }
  
  // passportInputs.forEach( item => {item.disabled = (idType !== "passport")})
  // driverLicInputs.forEach( item => {item.disabled = (idType !== "driverLic")})
    
}