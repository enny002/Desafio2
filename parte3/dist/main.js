function verificarPassword() {
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;
    var select3 = document.getElementById("select3").value;
    var password = select1.toString() + select2.toString() + select3.toString();
  
    if (password === "911") {
      document.getElementById("resultado").innerHTML = "Password 1 correcto";
    } else if (password === "714") {
      document.getElementById("resultado").innerHTML = "Password 2 correcto";
    } else {
      document.getElementById("resultado").innerHTML = "Password incorrecto";
    }
  }
  