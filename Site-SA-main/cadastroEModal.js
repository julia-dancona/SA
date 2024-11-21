//  CONFIRMAR CADASTRO
// chamar id do html 
function Cadastro() {
    let email= document.getElementById('email').value;
    let senha= document.getElementById('senha').value;
    let termos= document.getElementById('termos');
    let bancodeDados=  JSON.parse(localStorage.getItem("cadastro")) || {}
   
    if(bancodeDados[email]){
       alert('Esse email já foi cadastrado!');
       return;
    }

    else if(email && senha && termos.checked){
        bancodeDados[email] = { email: email, senha: senha };
        localStorage.setItem('cadastro', JSON.stringify(bancodeDados))
        alert('Usuário cadastrado com sucesso!')
        window.location.href="telaPrincipal.html"
    }
    else{
        alert('Preencha todas as informações!')
    }
}

// MODAL CADASTRO
// Seleciona os elementos do DOM
const abrirModal = document.getElementById("botaoabrir");
const fecharModal = document.getElementById("botaofechar");
const modal = document.getElementById("modal");
const fundo = document.getElementById("fundo");

abrirModal.addEventListener("click", () => {
    modal.classList.remove("sumir");
    fundo.classList.remove("sumir");
});


fecharModal.addEventListener("click", () => {
    modal.classList.add("sumir");
    fundo.classList.add("sumir");
});


fundo.addEventListener("click", (e) => {
    if (e.target === fundo) {
        modal.classList.add("sumir");
        fundo.classList.add("sumir");
    }
});
function voltarC(){
    window.location.href = "telaPrincipal.html"
}