var documento = document.getElementById("form");
var form = document.getElementsByClassName("form-control")
var nome = document.getElementById("username");
var email = document.getElementById("email");
var senha = document.getElementById("senha");
var senhaConfirmation = document.getElementById("senha-confirmation");



form.addEventlistener("submit")

function checkInputs(){
    var nameValue = nome.value;
    var emailValue = email.value;
    var senhaValue = senha.value;
    var senhaConfirmationValue = senhaConfirmation.value;


    /*if(nameValue === ""){
        errorClass(nome, "O nome é obrigatório!")
    }*/

    if(nameValue === ""){
        validationError(nome, "O nome é obrigatório!")
        
    }else {
        validationSuccess(nome)
    }

    if(emailValue ===""){
        validationError(email, "O Email é obrigatório")
    }else{
        validationSuccess(email)
    }

    if(senhaValue === ""){
        validationError(senha, "A senha é obrigatória!")
    }else{
        validationSuccess(senha);
    }

    if(senhaConfirmationValue === ""){
        validationError(senhaConfirmation, "A senha de confirmação é obrigatória!")
    }else{
        validationSuccess(senhaConfirmation);
    }

    

}



function validationError(input, mensagem){
    var formControl = input.parentElement;
    formControl.className = "form-control error";
    var small = formControl.querySelector("small");
    small.innerText = mensagem;

}


function validationSuccess(input){
    var formControl = input.parentElement;
    formControl.className = "form-control success";
    var small = formControl.querySelector("small");
    small.innerText = ""
}


function formValid(){
    const forms = document.querySelectorAll(".success");
    const formsValidate = [...forms];
    const formFour = formsValidate[3];
    if(formFour !== undefined){
        window.location.href = "/Thanks/thanks.html"
        documento.addEventListener("submit", (e) => {
            e.preventDefault();
        })
    }else{
        documento.addEventListener("submit", (e) => {
            e.preventDefault();
        })
    }
}
/*function errorClass(input, mensagem){
    var formControl = input.parentElement;
    input.className = "error";
    var small = formControl.querySelector("small");
    small.innerText = mensagem;
    var icon = formControl.querySelector(".fa-exclamation-circle")
    icon.setAttribute("id", "error");
}*/