document.addEventListener('DOMContentLoaded', () => {
  renderLogin();
});
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

  if (typeof renderDashboardShell === 'function') {
    app.innerHTML = renderDashboardShell('configuracoes', content);
  } else {
    app.innerHTML = content;
  }

  const saveBtn = document.getElementById('config-save-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      alert('As preferências foram salvas com sucesso.');
    });
  }
}
