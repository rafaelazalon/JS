let email_acesso = "rafa@gmail.com";
let email_cadastro = "RAFA@gmail.com";

if ( email_acesso.toLowerCase() == email_cadastro.toLowerCase()) {
    console.log("Foi enviado um link de ativação para seu email "+email_acesso);
} else {
    console.log("Esse email não existe em nossos dados");
}