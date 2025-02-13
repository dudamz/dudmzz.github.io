function exibirDadosSalvos() {
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');
    const whatsapp = localStorage.getItem('whatsapp');
    const mensagem = localStorage.getItem('mensagem');

    // Verifica se os dados existem e os exibe
    if (nome && email) {
        document.getElementById('nomeExibido').textContent = `Nome: ${nome}`;
        document.getElementById('emailExibido').textContent = `E-mail: ${email}`;
        document.getElementById('whatsappExibido').textContent = `WhatsApp: ${whatsapp || 'Não informado'}`;
        document.getElementById('mensagemExibida').textContent = `Mensagem: ${mensagem || 'Não informada'}`;
    } else {
        document.getElementById('dados').innerHTML = "<p>Nenhum dado encontrado. Por favor, envie o formulário.</p>";
    }
}

document.addEventListener('DOMContentLoaded', exibirDadosSalvos);
