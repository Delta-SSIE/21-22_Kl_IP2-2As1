// Create a function that will enable submission only when
// 1) All passwords are filled in
// 2) AND both new passwords match
// 3) AND new and old passwords differ
//
// The function will show a warning only when the checked field is not 
// empty (e.g. ) new password is filled, old not yet => submission is 
// disabled but no warning shown.

function passChange(){
   let oldPass = document.getElementById('oldpass').value;
   let pass = document.getElementById('pass').value;
   let pass2 = document.getElementById('pass2').value;
  
   let warnings = "";
   let disabled = false;
  
  if (!oldPass || !pass || !pass2) { //some is empty => disable submit
    disabled = true;
  }
  
  if (pass != pass2) { //they do not match => disable
    disabled = true;
    if (pass && pass2) { //none of them is empty => show warning
      warnings += "<div>Passwords do not match</div>"
    }      
  }

  if (pass == oldPass) { //old and new are the same => disable
    disabled = true;
    if (pass && oldPass) { //none of them is empty => show warning
      warnings += "<div>Old and new password must differ</div>"
    }      
  }
  
  document.querySelector('input[type="submit"]').disabled = disabled;
  document.getElementById('warning').innerHTML = warnings; 
}