document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário e o recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const mensagem = document.getElementById('mensagem').value;

    // Salvando os dados no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('whatsapp', whatsapp);
    localStorage.setItem('mensagem', mensagem);

    // Redirecionando para a página de dados
    window.location.href = 'dados.html';
});
