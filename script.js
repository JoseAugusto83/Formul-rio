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

    
    if(nameValue === ""){
        validationError(nome, "O nome é obrigatório!")
        
    }else {
        validationSuccess(nome)
    }

    if(emailValue ===""){
        validationError(email, "O Email é obrigatório")

    }else if(checkEmail(emailValue) === false){
        validationError(email, "Digite um Email válido")
    }
    
    else{
        validationSuccess(email)
    }

    if(senhaValue === ""){
        validationError(senha, "A senha é obrigatória!")

    }else if(senhaValue.length < 7){
        validationError(senha, "A senha precisa ter ao menos 7 caracteres")
    }
    
    else{
        validationSuccess(senha);
    }

    if(senhaConfirmationValue === ""){
        validationError(senhaConfirmation, "A senha de confirmação é obrigatória!")

    }
    
    else if(senhaConfirmationValue !== senhaValue){
        validationError(senhaConfirmation, "As senhas estão diferentes")
    }
    else{
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

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
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
