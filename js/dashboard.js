const dashboardClients = [
  { id: 1, nome: 'Larissa Souza', iniciais: 'LS', tipoAvatar: 'avatar-1', documento: 'Carta Convite', data: '08/06/2026', status: 'Pendente' },
  { id: 2, nome: 'João Fernando Pereira', iniciais: 'JP', tipoAvatar: 'avatar-2', documento: 'Procuração', data: '08/06/2026', status: 'Análise' },
  { id: 3, nome: 'Odete Maria da Silva', iniciais: 'OS', tipoAvatar: 'avatar-3', documento: 'CNIS', data: '07/06/2026', status: 'Complemento' },
  { id: 4, nome: 'Tiago Oliveira', iniciais: 'TO', tipoAvatar: 'avatar-4', documento: 'Declaração de Hipossuficiência', data: '07/06/2026', status: 'Pendente' },
  { id: 5, nome: 'Amanda Castro', iniciais: 'AC', tipoAvatar: 'avatar-1', documento: 'RG', data: '06/06/2026', status: 'Concluído' },
  { id: 6, nome: 'Bruno Martins', iniciais: 'BM', tipoAvatar: 'avatar-2', documento: 'CPF', data: '06/06/2026', status: 'Análise' },
  { id: 7, nome: 'Camila Rocha', iniciais: 'CR', tipoAvatar: 'avatar-3', documento: 'Comprovante de Residência', data: '05/06/2026', status: 'Pendente' },
  { id: 8, nome: 'Daniel Lima', iniciais: 'DL', tipoAvatar: 'avatar-4', documento: 'Contrato Social', data: '05/06/2026', status: 'Concluído' },
  { id: 9, nome: 'Eduarda Nunes', iniciais: 'EN', tipoAvatar: 'avatar-1', documento: 'Petição Inicial', data: '04/06/2026', status: 'Análise' },
  { id: 10, nome: 'Felipe Gomes', iniciais: 'FG', tipoAvatar: 'avatar-2', documento: 'Laudo Médico', data: '04/06/2026', status: 'Complemento' },
  { id: 11, nome: 'Gabriela Teixeira', iniciais: 'GT', tipoAvatar: 'avatar-3', documento: 'CTPS', data: '03/06/2026', status: 'Pendente' },
  { id: 12, nome: 'Henrique Alves', iniciais: 'HA', tipoAvatar: 'avatar-4', documento: 'Holerite', data: '03/06/2026', status: 'Concluído' },
  { id: 13, nome: 'Isabela Moraes', iniciais: 'IM', tipoAvatar: 'avatar-1', documento: 'Extrato Bancário', data: '02/06/2026', status: 'Análise' },
  { id: 14, nome: 'José Ricardo', iniciais: 'JR', tipoAvatar: 'avatar-2', documento: 'Comprovante INSS', data: '02/06/2026', status: 'Pendente' },
  { id: 15, nome: 'Karen Dias', iniciais: 'KD', tipoAvatar: 'avatar-3', documento: 'Ata Notarial', data: '01/06/2026', status: 'Complemento' },
  { id: 16, nome: 'Lucas Prado', iniciais: 'LP', tipoAvatar: 'avatar-4', documento: 'Certidão de Nascimento', data: '01/06/2026', status: 'Concluído' },
  { id: 17, nome: 'Marina Pires', iniciais: 'MP', tipoAvatar: 'avatar-1', documento: 'Certidão de Casamento', data: '08/06/2026', status: 'Pendente' },
  { id: 18, nome: 'Nathan Vieira', iniciais: 'NV', tipoAvatar: 'avatar-2', documento: 'Documentos Trabalhistas', data: '07/06/2026', status: 'Análise' },
  { id: 19, nome: 'Olivia Santana', iniciais: 'OS', tipoAvatar: 'avatar-3', documento: 'Comprovante de Endereço', data: '06/06/2026', status: 'Pendente' },
  { id: 20, nome: 'Paulo Henrique', iniciais: 'PH', tipoAvatar: 'avatar-4', documento: 'Carteira de Trabalho', data: '05/06/2026', status: 'Concluído' },
  { id: 21, nome: 'Queila Ramos', iniciais: 'QR', tipoAvatar: 'avatar-1', documento: 'Procuração Particular', data: '04/06/2026', status: 'Análise' },
  { id: 22, nome: 'Rafael Melo', iniciais: 'RM', tipoAvatar: 'avatar-2', documento: 'Petição Intermediária', data: '03/06/2026', status: 'Complemento' },
  { id: 23, nome: 'Sandra Luz', iniciais: 'SL', tipoAvatar: 'avatar-3', documento: 'Sentença', data: '02/06/2026', status: 'Concluído' },
  { id: 24, nome: 'Tatiane Costa', iniciais: 'TC', tipoAvatar: 'avatar-4', documento: 'RG Atualizado', data: '01/06/2026', status: 'Pendente' }
];

let dashboardSearchTerm = '';
let dashboardCurrentPage = 1;
const DASHBOARD_ITEMS_PER_PAGE = 5;

function getStatusBadgeClass(status) {
  if (status === 'Pendente') return 'status-pendente';
  if (status === 'Análise') return 'status-analise';
  if (status === 'Complemento') return 'status-complemento';
  if (status === 'Concluído') return 'status-concluido';
  return 'status-analise';
}

function getFilteredDashboardClients() {
  if (!dashboardSearchTerm) return dashboardClients;

  const term = dashboardSearchTerm.toLowerCase();

  return dashboardClients.filter((cliente) =>
    cliente.nome.toLowerCase().includes(term) ||
    cliente.documento.toLowerCase().includes(term) ||
    cliente.status.toLowerCase().includes(term) ||
    cliente.data.toLowerCase().includes(term)
  );
}

function getDashboardTotalPages() {
  const total = getFilteredDashboardClients().length;
  return Math.max(1, Math.ceil(total / DASHBOARD_ITEMS_PER_PAGE));
}

function getPaginatedDashboardClients() {
  const filtered = getFilteredDashboardClients();
  const start = (dashboardCurrentPage - 1) * DASHBOARD_ITEMS_PER_PAGE;
  const end = start + DASHBOARD_ITEMS_PER_PAGE;
  return filtered.slice(start, end);
}

function renderSidebar(active = 'dashboard') {
  return `
    <aside class="sidebar">
      <div class="sidebar-top">
        <div class="sidebar-brand-wrap">
          <div class="sidebar-brand">JurisDoc</div>
          <div class="sidebar-subbrand">GESTÃO JURÍDICA INTELIGENTE</div>
        </div>

        <div class="sidebar-nav">
          <div class="nav-link ${active === 'dashboard' ? 'active' : ''}" data-nav="dashboard">Dashboard</div>
          <div class="nav-link ${active === 'docs' ? 'active' : ''}" data-nav="docs">Documentos</div>
          <div class="nav-link" data-nav="clientes">Clientes</div>
          <div class="nav-link" data-nav="financeiro">Financeiro</div>
        </div>
      </div>

      <div class="sidebar-bottom">
        <div class="sidebar-bottom-link" data-nav="config">Configurações</div>
        <div class="sidebar-bottom-link" data-nav="sair">Sair</div>
      </div>
    </aside>
  `;
}

function renderDashboardRows() {
  const clients = getPaginatedDashboardClients();

  if (!clients.length) {
    return `<div class="table-empty">Nenhum documento encontrado para a busca informada.</div>`;
  }

  return clients.map((cliente) => `
    <div class="table-row dashboard-row-click" data-client-id="${cliente.id}">
      <div class="client-cell">
        <div class="client-avatar ${cliente.tipoAvatar}">${cliente.iniciais}</div>
        <div class="client-name">${cliente.nome}</div>
      </div>
      <div class="table-cell">${cliente.documento}</div>
      <div class="table-cell">${cliente.data}</div>
      <div class="table-cell">
        <span class="status-badge ${getStatusBadgeClass(cliente.status)}">${cliente.status}</span>
      </div>
      <div class="table-actions">⋮</div>
    </div>
  `).join('');
}

function renderDashboardPagination() {
  const totalPages = getDashboardTotalPages();
  let pagesHtml = '';

  for (let i = 1; i <= totalPages; i++) {
    pagesHtml += `
      <div class="page-btn ${i === dashboardCurrentPage ? 'active' : ''}" data-page="${i}">
        ${i}
      </div>
    `;
  }

  return `
    <div class="page-btn" data-page-action="prev">‹</div>
    ${pagesHtml}
    <div class="page-btn" data-page-action="next">›</div>
  `;
}

function updateDashboardTable() {
  const tbody = document.getElementById('dashboard-table-body');
  const count = document.getElementById('dashboard-results-count');
  const pagination = document.getElementById('dashboard-pagination-controls');

  const filtered = getFilteredDashboardClients();
  const start = filtered.length === 0 ? 0 : ((dashboardCurrentPage - 1) * DASHBOARD_ITEMS_PER_PAGE) + 1;
  const end = Math.min(dashboardCurrentPage * DASHBOARD_ITEMS_PER_PAGE, filtered.length);

  if (tbody) tbody.innerHTML = renderDashboardRows();
  if (count) count.textContent = `EXIBINDO ${start} A ${end} DE ${filtered.length} RESULTADOS`;
  if (pagination) pagination.innerHTML = renderDashboardPagination();

  attachDashboardRowEvents();
  attachDashboardPaginationEvents();
}

function attachDashboardPaginationEvents() {
  const totalPages = getDashboardTotalPages();

  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      dashboardCurrentPage = Number(btn.dataset.page);
      updateDashboardTable();
    });
  });

  document.querySelectorAll('[data-page-action="prev"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (dashboardCurrentPage > 1) {
        dashboardCurrentPage--;
        updateDashboardTable();
      }
    });
  });

  document.querySelectorAll('[data-page-action="next"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (dashboardCurrentPage < totalPages) {
        dashboardCurrentPage++;
        updateDashboardTable();
      }
    });
  });
}

function attachDashboardRowEvents() {
  document.querySelectorAll('.dashboard-row-click').forEach(row => {
    row.addEventListener('click', () => {
      const id = Number(row.dataset.clientId);
      const cliente = dashboardClients.find(c => c.id === id);
      if (!cliente) return;

      alert(
        `Cliente: ${cliente.nome}\nDocumento: ${cliente.documento}\nData: ${cliente.data}\nStatus: ${cliente.status}`
      );
    });
  });
}

function attachDashboardEvents() {
  const searchInput = document.getElementById('dashboard-search');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      dashboardSearchTerm = e.target.value.trim();
      dashboardCurrentPage = 1;
      updateDashboardTable();
    });
  }

  document.querySelectorAll('[data-nav="dashboard"]').forEach(el => {
    el.addEventListener('click', () => renderDashboard());
  });

  document.querySelectorAll('[data-nav="docs"]').forEach(el => {
    el.addEventListener('click', () => {
      if (typeof renderDocuments === 'function') renderDocuments();
      else alert('Página de documentos ainda não implementada.');
    });
  });

  document.querySelectorAll('[data-nav="clientes"]').forEach(el => {
    el.addEventListener('click', () => {
      if (typeof renderClientsList === 'function') renderClientsList();
      else alert('Página de clientes ainda não implementada.');
    });
  });

  document.querySelectorAll('[data-nav="sair"]').forEach(el => {
    el.addEventListener('click', () => renderLogin());
  });

  attachDashboardRowEvents();
  attachDashboardPaginationEvents();
}

function renderDashboard() {
  const app = document.getElementById('app');
  const filtered = getFilteredDashboardClients();
  const start = filtered.length === 0 ? 0 : ((dashboardCurrentPage - 1) * DASHBOARD_ITEMS_PER_PAGE) + 1;
  const end = Math.min(dashboardCurrentPage * DASHBOARD_ITEMS_PER_PAGE, filtered.length);

  app.innerHTML = `
    <div class="dashboard-page">
      ${renderSidebar('dashboard')}

      <div class="main-shell">
        <header class="topbar">
          <div class="topbar-search">
            <input
              id="dashboard-search"
              class="topbar-search-input"
              type="text"
              placeholder="Buscar no JurisDoc..."
              value="${dashboardSearchTerm}"
            />
          </div>

          <div class="topbar-user">
            <div class="topbar-divider"></div>
            <div class="topbar-user-info">
              <div class="topbar-user-role">Administrador Financeiro</div>
              <div class="topbar-user-name">Amanda Palacio</div>
            </div>
            <div class="topbar-avatar"></div>
          </div>
        </header>

        <div class="main-canvas-margin">
          <main class="main-canvas">
            <section class="page-header">
              <div class="page-header-left">
                <div class="page-title">Dashboard</div>
                <div class="page-subtitle">Visualize o resumo geral da operação jurídica.</div>
              </div>
              <div class="page-date">08 DE JUNHO, 2026</div>
            </section>

            <section class="bento-grid">
              <div class="stat-card stat-card-1">
                <div class="stat-top">
                  <div class="stat-badge">
                    <div class="stat-icon stat-icon-1"></div>
                    <div class="stat-top-label stat-top-label-1">PENDENTES</div>
                  </div>
                </div>
                <div class="stat-value">12</div>
                <div class="stat-description">Pendentes de Análise</div>
                <div class="stat-footer stat-footer-1">+3 DESDE ONTEM</div>
              </div>

              <div class="stat-card stat-card-2">
                <div class="stat-top">
                  <div class="stat-badge">
                    <div class="stat-icon stat-icon-2"></div>
                    <div class="stat-top-label stat-top-label-2">COMPLEMENTO</div>
                  </div>
                </div>
                <div class="stat-value">05</div>
                <div class="stat-description">Aguardando Complemento</div>
                <div class="stat-footer stat-footer-2">2 COM PRAZO HOJE</div>
              </div>

              <div class="stat-card stat-card-3">
                <div class="stat-top">
                  <div class="stat-badge">
                    <div class="stat-icon stat-icon-3"></div>
                    <div class="stat-top-label stat-top-label-3">FINALIZADOS</div>
                  </div>
                </div>
                <div class="stat-value">08</div>
                <div class="stat-description">Concluídos hoje</div>
                <div class="stat-footer stat-footer-3">META DE HOJE</div>
              </div>
            </section>

            <section class="table-exhibit">
              <div class="table-top">
                <div class="table-top-left">
                  <div class="table-top-accent"></div>
                  <div class="table-title">Documentos recentes</div>
                </div>

                <div class="table-top-right">
                  <div class="table-top-btn table-top-btn-muted">Hoje</div>
                  <div class="table-top-btn table-top-btn-active">Últimos 7 dias</div>
                </div>
              </div>

              <div class="table">
                <div class="table-header">
                  <div class="table-header-cell">Cliente</div>
                  <div class="table-header-cell">Documento</div>
                  <div class="table-header-cell">Data</div>
                  <div class="table-header-cell">Status</div>
                  <div class="table-header-cell table-header-cell-right">Ações</div>
                </div>

                <div id="dashboard-table-body">
                  ${renderDashboardRows()}
                </div>
              </div>

              <div class="table-pagination">
                <div id="dashboard-results-count" class="pagination-info">
                  EXIBINDO ${start} A ${end} DE ${filtered.length} RESULTADOS
                </div>

                <div id="dashboard-pagination-controls" class="pagination-controls">
                  ${renderDashboardPagination()}
                </div>
              </div>
            </section>
          </main>
        </div>

        <footer class="dashboard-footer">
          <div class="dashboard-footer-text">JurisDoc</div>
          <div class="dashboard-footer-text">© 2026 JURISDOC - BY AMANDA PALACIO</div>
        </footer>
      </div>
    </div>
  `;

  attachDashboardEvents();
}
