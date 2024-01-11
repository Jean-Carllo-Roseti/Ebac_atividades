function cadastrarContato() {
    const categoria = document.getElementById('Cate').value.toLowerCase();
    const nome = document.getElementById('nome').value.trim();
    const numero = document.getElementById('numero').value.trim();

    if (categoria === 'familia' || categoria === 'amigos' || categoria === 'faculdade' || categoria === 'trabalho' || categoria === 'casual') {
        const novaLinha = `<tr>
        <td> 
        <td>${nome}<br>${numero}</td>
        </tr>
        <br>`;
        document.getElementById(`${categoria}-text`).insertAdjacentHTML('beforeend', novaLinha);

        document.getElementById('sucesso').style.display = 'block';
        document.getElementById('sucesso').textContent = 'Contato salvo com sucesso!';

        document.getElementById('nome').value = '';
        document.getElementById('numero').value = '';
    } else {
        document.getElementById('sucesso').style.display = 'block';
        document.getElementById('sucesso').textContent = 'Escolha uma categoria válida!';
    }
}
