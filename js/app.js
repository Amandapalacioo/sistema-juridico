// Aguarda o carregamento do DOM para rodar a primeira tela
document.addEventListener('DOMContentLoaded', () => {
    // A função renderLogin estará disponível pois carregaremos login.js abaixo
    if(typeof renderLogin === 'function') {
        renderLogin();
    }
});

