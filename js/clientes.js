let clientesSearchTerm = '';
let clienteSelecionadoId = null;

function getClientesBase() {
  if (Array.isArray(window.dashboardClients)) {
    return window.dashboardClients;
  }
  return [];
}

function renderClientsList() {
  renderClientesPage();
}

function renderClientesPage() {
  const base = getClientesBase();

  const clientes = base.filter((cliente) => {
    const texto = `${cliente.nome || ''} ${cliente.documento || ''} ${cliente.status || ''}`.toLowerCase();
    return texto.includes(clientesSearchTerm.toLowerCase());
  });

  if (!clientes.length) {
    clienteSelecionadoId = null;
  } else if (
    clienteSelecionadoId === null ||
    !clientes.some((cliente) => String(cliente.id) === String(clienteSelecionadoId))
  ) {
    clienteSelecionadoId = clientes[0].id;
  }

  const clienteSelecionado =
    clientes.find((cliente) => String(cliente.id) === String(clienteSelecionadoId)) || null;

  const app = document.getElementById('app');
  if (!app) return;

  const content = `
    <main class="clientes-main">
      <div class="clientes-layout">
        <section class="clientes-left">
          <div class="clientes-card">
            <div class="clientes-header-block">
              <h1 class="clientes-title">Consulta de Clientes</h1>
              <p class="clientes-subtitle">
                Selecione um registro para visualizar o histórico completo de documentos.
              </p>
            </div>

            <div class="clientes-search">
              <input
                id="clientes-search-input"
                type="text"
                placeholder="Pesquisar cliente por nome."
                value="${clientesSearchTerm}"
              />
              <span class="clientes-search-icon">🔎</span>
            </div>

            <div class="clientes-list">
              ${
                clientes.length
                  ? clientes.map((cliente) => `
                    <div class="cliente-row ${String(cliente.id) === String(clienteSelecionadoId) ? 'active' : ''}" data-cliente-id="${cliente.id}">
                      <div class="cliente-row-left">
                        <div class="cliente-avatar">${cliente.iniciais || 'CL'}</div>
                        <div class="cliente-meta">
                          <div class="cliente-nome">${cliente.nome || 'Cliente'}</div>
                          <div class="cliente-info">
                            <span class="cliente-info-item">${cliente.documento || 'Sem documento'}</span>
                            <span class="cliente-info-item">${cliente.status || 'Sem status'}</span>
                          </div>
                        </div>
                      </div>
                      <div class="cliente-row-arrow">›</div>
                    </div>
                  `).join('')
                  : `<div class="clientes-empty">Nenhum cliente encontrado.</div>`
              }
            </div>
          </div>
        </section>

        <aside class="clientes-right">
          <div class="clientes-side-card">
            <div class="clientes-side-title">Histórico documental do cliente</div>

            ${
              clienteSelecionado
                ? `
                  <div class="clientes-docs">
                    <div class="clientes-doc-item primary">
                      <div class="clientes-doc-title">${clienteSelecionado.documento || 'Documento salvo'}</div>
                      <div class="clientes-doc-date">${clienteSelecionado.data || 'Sem data'}</div>
                      <div class="clientes-doc-file">${(clienteSelecionado.documento || 'arquivo').toLowerCase().replace(/\s+/g, '-')}.pdf</div>
                    </div>
                  </div>
                `
                : `<div class="clientes-empty">Nenhum histórico disponível.</div>`
            }
          </div>

          <div class="clientes-sync-wrap">
            <button type="button" id="clientes-sync-erp" class="clientes-erp-btn">
              <span>⟳</span>
              <span>
                Sincronizar ERP
                <span class="clientes-erp-sub">Atualiza clientes e vínculos documentais</span>
              </span>
            </button>
          </div>
        </aside>
      </div>
    </main>
  `;

  if (typeof window.renderDashboardShell === 'function') {
    app.innerHTML = window.renderDashboardShell('clientes', content);
  } else {
    app.innerHTML = content;
  }

  if (typeof window.attachGlobalNavigationEvents === 'function') {
    window.attachGlobalNavigationEvents();
  }

  attachClientesEvents();
}

function attachClientesEvents() {
  const searchInput = document.getElementById('clientes-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      clientesSearchTerm = event.target.value || '';
      renderClientesPage();
    });
  }

  document.querySelectorAll('.cliente-row').forEach((row) => {
    row.addEventListener('click', () => {
      clienteSelecionadoId = row.dataset.clienteId;
      renderClientesPage();
    });
  });

  const syncBtn = document.getElementById('clientes-sync-erp');
  if (syncBtn) {
    syncBtn.addEventListener('click', () => {
      if (typeof window.renderSimpleSuccessModal === 'function') {
        window.renderSimpleSuccessModal(
          'Sincronização concluída',
          'Os dados do ERP foram atualizados com sucesso.'
        );
      } else {
        alert('Os dados do ERP foram atualizados com sucesso.');
      }
    });
  }
}

window.renderClientesPage = renderClientesPage;
window.renderClientsList = renderClientsList;
