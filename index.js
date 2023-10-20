const login = document.getElementById("login");
const home = document.getElementById("home");
const menuLateral = document.getElementById("menuLateral");
const usuInput = document.getElementById("usuarioInput");
const senUnput = document.getElementById("senhaInput");
const usuario = "micael";
const senha = 1234;

function btnEntrar(){
    validaDados();
}
document.addEventListener("keypress",(el)=>{
     if(el.key == "Enter"){
        validaDados();
     }
  }
)

function menuL(){    
        menuLateral.style.transition = "0.3s";
        menuLateral.style.marginLeft = "0px";
}
function btnV(){
        menuLateral.style.transition = "0.3s";
        menuLateral.style.marginLeft = "-250px";
}
function validaDados(){
    if(usuInput.value == usuario && senUnput.value == senha){
        login.style.display = "none";
        home.style.display = "block";
    }
    else{
        alert("USUARIO OU SENHA INCORRETA !");
    }
}