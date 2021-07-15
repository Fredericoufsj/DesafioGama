const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dados = { nome, email }
    let converteDados = JSON.stringify(dados)

    localStorage.setItem('lead', converteDados);
    let content = document.getElementById('content');
    let parabens = `<p style="color: white; font-size: 20px; text-align: center">Muito obrigado!!! </p>`
    content.innerHTML = parabens

})