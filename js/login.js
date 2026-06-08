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
  if (!btn) return;

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

  const forgot = document.getElementById('forgot-password-link');
  if (forgot) {
    forgot.onclick = (e) => {
      e.preventDefault();
      if (typeof renderRecoverPassword === 'function') {
        renderRecoverPassword();
      }
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
          <a href="#" class="login-link">Esqueci a senha</a>
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
