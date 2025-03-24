function validFormulario(event){

   event.preventDefault();

    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const passwordtwo = document.getElementById("passwordtwo").value;

    alert('Formulário enviado com sucesso!');
        document.getElementById('cadastro_form').submit();
   
}
 