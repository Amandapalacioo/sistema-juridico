document.addEventListener('DOMContentLoaded', () => {
  if (typeof renderLogin === 'function') {
    renderLogin();
  } else {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = `
        <div style="padding:40px-family:Manrope,sans-serif">
          <h1>Erro de inicialização</h1>
          <p>A função <strong>renderLogin()</strong> não foi encontrada.</p>
        </div>
      `;
    }
    console.error('renderLogin() não foi encontrada.');
  }
});

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderSimpleSuccessModal(title, text) {
  const existingModal = document.querySelector('.doc-modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  const overlay = document.createElement('div');
  overlay.className = 'doc-modal-overlay';

  overlay.innerHTML = `
    <div class="doc-modal-card success">
      <div class="doc-modal-success-icon"></div>
      <div class="doc-modal-title center">${escapeHtml(title)}</div>
      <div class="doc-modal-text center">${escapeHtml(text)}</div>
      <div class="doc-modal-actions center">
        <button id="simple-success-ok" class="doc-modal-btn primary full">Entendido</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const okBtn = document.getElementById('simple-success-ok');
  if (okBtn) {
    okBtn.addEventListener('click', () => {
      overlay.remove();
    });
  }

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.remove();
    }
  });
}

function renderConfiguracoesPage() {
  const content = `
    <main class="config-main">
      <section class="config-hero">
        <h1 class="config-title">Configurações</h1>
        <p class="config-subtitle">
          Gerencie preferências gerais do sistema. Esta área está disponível para expansões futuras.
        </p>
      </section>

      <section class="config-grid">
        <div class="config-card">
          <div class="config-card-title">Perfil do sistema</div>
          <div class="config-card-text">
            Defina informações institucionais e preferências gerais da operação.
          </div>
        </div>

        <div class="config-card">
          <div class="config-card-title">Integrações</div>
          <div class="config-card-text">
            Área reservada para conexões futuras com ERP, serviços externos e automações.
          </div>
        </div>

        <div class="config-card">
          <div class="config-card-title">Segurança e acesso</div>
          <div class="config-card-text">
            Gerencie permissões, perfis de usuário e regras internas de acesso.
          </div>
        </div>
      </section>

      <div class="config-actions">
        <button id="config-save-btn" class="config-btn">Salvar preferências</button>
      </div>
    </main>
  `;

  const app = document.getElementById('app');
  if (!app) return;

  if (typeof renderDashboardShell === 'function') {
    app.innerHTML = renderDashboardShell('configuracoes', content);
  } else {
    app.innerHTML = content;
  }

  if (typeof attachGlobalNavigationEvents === 'function') {
    attachGlobalNavigationEvents();
  }

  const saveBtn = document.getElementById('config-save-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      renderSimpleSuccessModal(
        'Configurações salvas',
        'As preferências gerais foram atualizadas com sucesso.'
      );
    });
  }
}


window.escapeHtml = escapeHtml;
window.renderSimpleSuccessModal = renderSimpleSuccessModal;
window.renderConfiguracoesPage = renderConfiguracoesPage;
