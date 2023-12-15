document.addEventListener('DOMContentLoaded', function () {
    // Mantenha esta linha para garantir que o texto certo esteja visível inicialmente
    mostrarTexto();
});

function mostrarTexto() {
    // Oculta todos os elementos inicialmente
    document.getElementById('TratamentoPsiquiatrico').style.display = 'none';
    document.getElementById('Psicoanalises').style.display = 'none';
    document.getElementById('Neurologia').style.display = 'none';

    // Obtém o valor selecionado no dropdown
    var temaSelecionado = document.getElementById('temaSelecionado').value;

    // Mostra o texto correspondente ao tema selecionado
    if (temaSelecionado == 'psiquiatrico') {
        document.getElementById('TratamentoPsiquiatrico').style.display = 'block';
    } else if (temaSelecionado == 'psicoanalise') {
        document.getElementById('Psicoanalises').style.display = 'block';
    } else if (temaSelecionado == 'neurologia') {
        document.getElementById('Neurologia').style.display = 'block';
    }
}
window.addEventListener('scroll', function () {
    var menu = document.getElementById('fixedMenu');
    var content = document.querySelector('.content');
    var pageBottom = content.offsetTop + content.offsetHeight;
    var eightyFivePercent = 0.85 * pageBottom;

    if (window.pageYOffset >= eightyFivePercent) {
        menu.style.position = 'fixed';
        menu.style.bottom = 'auto';
        menu.style.top = window.innerHeight - menu.offsetHeight + 'px';
    } else {
        menu.style.position = 'fixed';
        menu.style.bottom = '10px';
        menu.style.top = 'auto';
    }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');

    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;

    var nameRegex = /^[a-zA-Z\s]*$/; // Expressão regular para permitir apenas letras e espaços

    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (!name.match(nameRegex)) {
        alert('Números e símbolos são inválidos para o nome.');
    } else if (name.trim().length < 3) {
        alert('Nome muito curto. Por favor, insira um nome com pelo menos 3 letras.');
        return; // Interrompe o envio do formulário caso o nome seja muito curto
    } else {
        alert('Formulário enviado com sucesso!');
        // Limpa os campos de texto após o envio bem-sucedido
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';

        // Aqui você pode adicionar o código para enviar os dados do formulário para o backend
        // Por exemplo: fazer uma requisição POST para um endpoint que lide com os dados.
    }
});

