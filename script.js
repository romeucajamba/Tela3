const form = document.querySelector('form');



form.addEventListener('click', (e) => {
    e.preventDefault();
    var input1 = document.querySelector('#text').value;
    var input2 = document.querySelector('#senha').value;
    
    if(input1 == "" || input2 == ""){
        alert("Preencha todos os campos!")
    }else{
        alert("Tudoo preenhido com sucesso, a sua conta está sendo carregada, aguarde!")
    }
    Submit();

});