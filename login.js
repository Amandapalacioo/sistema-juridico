function renderLogin(error = false) {
    const app = document.getElementById('app');
    app.innerHTML = `
    <div class="login-page">
        <div class="login-card">
            <div class="login-left">
                <h2>JurisDoc</h2>
                <p>O arquivo institucional definitivo para gestão jurídica segura e eficiente.</p>
            </div>
            <div class="login-right">
                ${error ? `<div class="error-msg-box">E-mail inválido ou não cadastrado.</div>` : ''}
                <h2>Recuperar Senha</h2>
                <p>Informe seu e-mail institucional.</p>
                <div>
                    <label>E-MAIL INSTITUCIONAL</label>
                    <input type="email" id="email" class="login-input" placeholder="exemplo@lexdocs.com.br">
                </div>
                <button class="btn-login" id="btn-entrar">Enviar Link</button>
            </div>
        </div>
    </div>`;

    document.getElementById('btn-entrar').onclick = () => {
        const email = document.getElementById('email').value;
        // Validação simples para teste do fluxo
        if(email === "admin") {
            renderDashboard();
        } else {
            renderLogin(true);
        }
    };
}
