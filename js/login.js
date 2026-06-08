function getLoginLayout(content) {
  return `
    <div class="login-page">
      <div class="login-topbar">
        <div class="login-topbar-brand">JurisDoc</div>
        <div class="login-topbar-copy">© 2026 JURISDOC - BY AMANDA PALACIO</div>
      </div>

      <div class="login-card">
        <div class="login-left">
          <div class="login-left-content">
            <div class="login-brand-white">JurisDoc</div>
            <div class="login-brand-description">
              O arquivo institucional definitivo para gestão jurídica segura e eficiente.
            </div>
          </div>
          <div></div>
        </div>

        <div class="login-right">
          ${content}
        </div>
      </div>

      <div class="login-footer">
        <div class="login-footer-brand">JurisDoc</div>
        <div class="login-footer-copy">© 2026 JURISDOC - BY AMANDA PALACIO</div>
      </div>
    </div>
  `;
}

function attachLoginEvents() {
  const btn = document.getElementById('btn-entrar');
  if (btn) {
    btn.onclick = () => {
      const emailEl = document.getElementById('email');
      const passwordEl = document.getElementById('password');

      const email = emailEl ? emailEl.value.toLowerCase().trim() : '';
      const senha = passwordEl ? passwordEl.value.trim() : '';

      if (!email || !senha) {
        renderLoginCampoVazio(email, senha);
        return;
      }

      if (!email.endsWith('@jurisdoc.com.br')) {
        renderLoginUsuarioNaoEncontrado(email, senha);
        return;
      }

      if (senha !== '1234') {
        renderLoginSenhaIncorreta(email, senha);
        return;
      }

      renderLoginProcessando(email);
    };
  }

  const forgot = document.getElementById('forgot-password-link');
  if (forgot) {
    forgot.onclick = (e) => {
      e.preventDefault();
      renderRecoverPassword();
    };
  }
}

function renderLogin(emailValue = '', senhaValue = '') {
  const app = document.getElementById('app');

  app.innerHTML = getLoginLayout(`
    <div class="login-form-wrap">
      <div class="login-title">Acesse sua conta</div>

      <div class="login-field">
        <label class="login-field-label">Endereço de E-mail</label>
        <div class="login-input-wrap">
          <div class="login-icon-left"></div>
          <input
            id="email"
            class="login-input"
            type="email"
            placeholder="insira seu e-mail"
            value="${emailValue}"
          />
        </div>
      </div>

      <div class="login-field">
        <div class="login-row-between">
          <label class="login-field-label">Senha</label>
          <a href="#" id="forgot-password-link" class="login-link">Esqueci a senha</a>
        </div>
        <div class="login-input-wrap">
          <div class="login-icon-left password"></div>
          <input
            id="password"
            class="login-input"
            type="password"
            placeholder="insira a sua senha"
            value="${senhaValue}"
          />
        </div>
      </div>

      <div class="login-checkbox-row">
        <div class="login-checkbox-box"></div>
        <div class="login-checkbox-label">Manter conectado neste dispositivo</div>
      </div>

      <button id="btn-entrar" class="login-button">Entrar</button>

      <div class="login-bottom-help">
        Não tem uma conta ou precisa de ajuda? Fale com o administrador.
      </div>
    </div>
  `);

  attachLoginEvents();
}

function renderLoginCampoVazio(emailValue = '', senhaValue = '') {
  const app = document.getElementById('app');

  app.innerHTML = getLoginLayout(`
    <div class="login-form-wrap">
      <div class="login-title">Acesse sua conta</div>

      <div class="login-field">
        <label class="login-field-label">Endereço de E-mail</label>
        <div class="login-input-wrap">
          <input
            id="email"
            class="login-input login-input-error"
            type="email"
            placeholder="nome@instituicao.org"
            value="${emailValue}"
          />
          <div class="login-icon-right-error"></div>
        </div>
        ${!emailValue ? `<div class="login-feedback-inline">Este campo é obrigatório.</div>` : ''}
      </div>

      <div class="login-field">
        <div class="login-row-between">
          <label class="login-field-label">Senha</label>
          <a href="#" id="forgot-password-link" class="login-link">Esqueci a senha</a>
        </div>
        <div class="login-input-wrap">
          <input
            id="password"
            class="login-input login-input-error"
            type="password"
            placeholder="••••••••"
            value="${senhaValue}"
          />
          <div class="login-icon-right-error"></div>
        </div>
        ${!senhaValue ? `<div class="login-feedback-inline">Por favor, informe sua senha institucional.</div>` : ''}
      </div>

      <div class="login-checkbox-row">
        <div class="login-checkbox-box"></div>
        <div class="login-checkbox-label">Manter conectado neste dispositivo</div>
      </div>

      <button id="btn-entrar" class="login-button">Entrar</button>

      <div class="login-bottom-help">
        Não tem uma conta ou precisa de ajuda? Fale com o administrador.
      </div>
    </div>
  `);

  attachLoginEvents();
}

function renderLoginUsuarioNaoEncontrado(emailValue = '', senhaValue = '') {
  const app = document.getElementById('app');

  app.innerHTML = getLoginLayout(`
    <div class="login-form-wrap">
      <div class="login-alert-box">
        Autenticação falhou. Usuário não encontrado. Por favor, verifique suas credenciais e tente novamente.
      </div>

      <div class="login-title">Acesse sua conta</div>

      <div class="login-field">
        <label class="login-field-label">Endereço de E-mail</label>
        <div class="login-input-wrap">
          <input
            id="email"
            class="login-input login-input-error"
            type="email"
            placeholder="nome@instituicao.org"
            value="${emailValue}"
          />
          <div class="login-icon-right-error"></div>
        </div>
        <div class="login-feedback-inline">Usuário não encontrado.</div>
      </div>

      <div class="login-field">
        <div class="login-row-between">
          <label class="login-field-label">Senha</label>
          <a href="#" id="forgot-password-link" class="login-link">Esqueci a senha</a>
        </div>
        <div class="login-input-wrap">
          <input
            id="password"
            class="login-input"
            type="password"
            placeholder="••••••••"
            value="${senhaValue}"
          />
        </div>
      </div>

      <div class="login-checkbox-row">
        <div class="login-checkbox-box"></div>
        <div class="login-checkbox-label">Manter conectado neste dispositivo</div>
      </div>

      <button id="btn-entrar" class="login-button">Entrar</button>

      <div class="login-bottom-help">
        Não tem uma conta ou precisa de ajuda? Fale com o administrador.
      </div>
    </div>
  `);

  attachLoginEvents();
}

function renderLoginSenhaIncorreta(emailValue = '', senhaValue = '') {
  const app = document.getElementById('app');

  app.innerHTML = getLoginLayout(`
    <div class="login-form-wrap">
      <div class="login-title">Acesse sua conta</div>

      <div class="login-field">
        <label class="login-field-label">Endereço de E-mail</label>
        <div class="login-input-wrap">
          <input
            id="email"
            class="login-input"
            type="email"
            placeholder="nome@instituicao.org"
            value="${emailValue}"
          />
        </div>
      </div>

      <div class="login-field">
        <div class="login-row-between">
          <label class="login-field-label">Senha</label>
          <a href="#" id="forgot-password-link" class="login-link">Esqueci a senha</a>
        </div>
        <div class="login-input-wrap">
          <input
            id="password"
            class="login-input login-input-error"
            type="password"
            placeholder="••••••••"
            value="${senhaValue}"
          />
          <div class="login-icon-right-error"></div>
        </div>
        <div class="login-feedback-inline">Senha invalida.</div>
      </div>

      <div class="login-checkbox-row">
        <div class="login-checkbox-box"></div>
        <div class="login-checkbox-label">Manter conectado neste dispositivo</div>
      </div>

      <button id="btn-entrar" class="login-button">Entrar</button>

      <div class="login-bottom-help">
        Não tem uma conta ou precisa de ajuda? Fale com o administrador.
      </div>
    </div>
  `);

  attachLoginEvents();
}

function renderLoginProcessando(emailValue = '') {
  const app = document.getElementById('app');

  app.innerHTML = getLoginLayout(`
    <div class="login-form-wrap">
      <div class="login-title">Acesse sua conta</div>

      <div class="login-field">
        <label class="login-field-label">Endereço de E-mail</label>
        <div class="login-input-wrap">
          <div class="login-icon-left"></div>
          <input
            id="email"
            class="login-input"
            type="email"
            value="${emailValue}"
            readonly
          />
        </div>
      </div>

      <div class="login-field">
        <div class="login-row-between">
          <label class="login-field-label">Senha</label>
          <a href="#" id="forgot-password-link" class="login-link">Esqueci a senha</a>
        </div>
        <div class="login-input-wrap">
          <div class="login-icon-left password"></div>
          <input
            id="password"
            class="login-input"
            type="password"
            value="1234"
            readonly
          />
        </div>
      </div>

      <div class="login-checkbox-row">
        <div class="login-checkbox-box"></div>
        <div class="login-checkbox-label">Manter conectado neste dispositivo</div>
      </div>

      <button class="login-button login-button-processing">Entrando</button>

      <div class="login-bottom-help">
        Não tem uma conta ou precisa de ajuda? Fale com o administrador.
      </div>
    </div>
  `);

  setTimeout(() => {
    if (typeof renderDashboard === 'function') {
      renderDashboard();
    }
  }, 1200);
}
function renderRecoverPassword(emailValue = '') {
  const app = document.getElementById('app');

  app.innerHTML = getLoginLayout(`
    <div class="login-form-wrap recover-mode">
      <div class="recover-title">Recuperar Senha</div>
      <div class="recover-subtitle">
        Informe seu e-mail institucional para receber o link de redefinição.
      </div>

      <div class="login-field">
        <label class="recover-label">E-mail institucional</label>
        <div class="recover-input-wrap">
          <input
            id="recover-email"
            class="recover-input"
            type="email"
            placeholder="exemplo@jurisdoc.com.br"
            value="${emailValue}"
          />
        </div>
      </div>

      <button id="btn-recuperar" class="recover-button">
        Recuperar
      </button>

      <div class="recover-back-wrap">
        <a href="#" id="back-to-login" class="recover-back-link">← Voltar para login</a>
      </div>

      <div class="recover-help">
        Não tem uma conta ou precisa de ajuda? Fale com o administrador.
      </div>
    </div>
  `);

  document.getElementById('back-to-login').onclick = (e) => {
    e.preventDefault();
    renderLogin();
  };

  document.getElementById('btn-recuperar').onclick = () => {
    const email = document.getElementById('recover-email').value.toLowerCase().trim();

    if (!email || !email.endsWith('@jurisdoc.com.br')) {
      renderRecoverPasswordInvalid(email);
      return;
    }

    renderRecoverPasswordSuccess(email);
  };
}

function renderRecoverPasswordInvalid(emailValue = '') {
  const app = document.getElementById('app');

  app.innerHTML = getLoginLayout(`
    <div class="login-form-wrap recover-mode">
      <div class="recover-title">Recuperar Senha</div>
      <div class="recover-subtitle">
        Informe seu e-mail institucional para receber o link de redefinição.
      </div>

      <div class="login-field">
        <label class="recover-label">E-mail institucional</label>

        <div class="recover-input-wrap recover-input-wrap-error">
          <input
            id="recover-email"
            class="recover-input recover-input-error"
            type="email"
            placeholder="exemplo@lexdocs.com.br"
            value="${emailValue}"
          />
          <div class="recover-input-error-icon"></div>
        </div>

        <div class="recover-error-box">
          E-mail inválido ou não cadastrado.
        </div>
      </div>

      <button id="btn-recuperar" class="recover-button">
        Recuperar
      </button>

      <div class="recover-back-wrap">
        <a href="#" id="back-to-login-invalid" class="recover-back-link">← Voltar para login</a>
      </div>

      <div class="recover-help">
        Não tem uma conta ou precisa de ajuda? Fale com o administrador.
      </div>
    </div>
  `);

  document.getElementById('back-to-login-invalid').onclick = (e) => {
    e.preventDefault();
    renderLogin();
  };

  document.getElementById('btn-recuperar').onclick = () => {
    const email = document.getElementById('recover-email').value.toLowerCase().trim();

    if (!email || !email.endsWith('@jurisdoc.com.br')) {
      renderRecoverPasswordInvalid(email);
      return;
    }

    renderRecoverPasswordSuccess(email);
  };
}

function renderRecoverPasswordSuccess(emailValue = '') {
  const app = document.getElementById('app');

  app.innerHTML = getLoginLayout(`
    <div class="recover-success-shell">
      <div class="recover-success-card">
        <div class="recover-success-banner">
          <div class="recover-success-banner-icon"></div>
          <div class="recover-success-banner-text">
            Solicitação registrada com sucesso.
          </div>
        </div>

        <div class="recover-success-content">
          <div class="recover-success-message">
            Se o e-mail informado estiver em nossa base de dados, você receberá instruções para redefinir sua senha em instantes.
          </div>

          <div class="recover-success-field">
            <label class="recover-success-field-label">E-mail</label>
            <div class="recover-success-input-wrap">
              <input
                class="recover-success-input"
                type="email"
                value="${emailValue}"
                readonly
              />
              <div class="recover-success-lock"></div>
            </div>
          </div>

          <div class="recover-success-actions">
            <button id="btn-open-email" class="recover-success-primary">
              Abrir e-mail
            </button>

            <a href="#" id="back-to-login-success" class="recover-success-secondary">
              ← Voltar para login
            </a>
          </div>
        </div>
      </div>

      <div class="recover-help recover-help-success">
        Não tem uma conta ou precisa de ajuda? Fale com o administrador.
      </div>
    </div>
  `);

  document.getElementById('back-to-login-success').onclick = (e) => {
    e.preventDefault();
    renderLogin();
  };

  document.getElementById('btn-open-email').onclick = () => {
    alert('Simulação: abrir aplicativo de e-mail.');
  };
}

