function renderLogin(error = false) {
    app.innerHTML = `
    <div class="login-page">
        <div class="login-card">
            <div class="login-left">
                <div>
                    <h2 style="font-size:18px;">JurisDoc</h2>
                    <p style="color:#E2E8F0;">O arquivo institucional para gestão jurídica segura.</p>
                </div>
            </div>
            <div class="login-right">
                <h2 style="margin-bottom:24px;">Acesse sua conta</h2>
                ${error ? `<p style="color:red; font-size:12px;">E-mail inválido. Use @jurisdoc.com.br</p>` : ''}
                <div class="input-group">
                    <label class="input-label">Endereço de E-mail</label>
                    <input type="email" id="email" class="login-input" placeholder="seu@jurisdoc.com.br">
                </div>
                <div class="input-group">
                    <label class="input-label">Senha</label>
                    <input type="password" class="login-input" placeholder="Sua senha">
                </div>
                <button class="btn-entrar" id="btn-entrar">Entrar</button>
            </div>
        </div>
    </div>`;

    document.getElementById('btn-entrar').onclick = () => {
        const email = document.getElementById('email').value.toLowerCase();
        if (email.endsWith('@jurisdoc.com.br')) {
            renderDashboard();
        } else {
            renderLogin(true);
        }
    };
}
