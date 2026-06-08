function renderSidebar(active = 'dashboard') {
  return `
    <aside class="sidebar">
      <div class="sidebar-top">
        <div class="sidebar-brand-wrap">
          <div class="sidebar-brand">JurisDoc</div>
          <div class="sidebar-subbrand">GESTÃO JURÍDICA INTELIGENTE</div>
        </div>

        <div class="sidebar-nav">
          <div class="nav-link ${active === 'dashboard' ? 'active' : ''}" onclick="renderDashboard()">
            Dashboard
          </div>
          <div class="nav-link ${active === 'docs' ? 'active' : ''}" onclick="renderDocuments()">
            Documentos
          </div>
          <div class="nav-link">
            Processos
          </div>
          <div class="nav-link">
            Financeiro
          </div>
        </div>
      </div>

      <div class="sidebar-bottom">
        <div class="sidebar-bottom-link">Configurações</div>
        <div class="sidebar-bottom-link" onclick="renderLogin()">Sair</div>
      </div>
    </aside>
  `;
}

function renderDashboard() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="dashboard-page">
      ${renderSidebar('dashboard')}

      <div class="main-shell">
        <header class="topbar">
          <div class="topbar-search">Buscar no JurisDoc...</div>

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

              <div class="page-date">10 DE MAIO, 2026</div>
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
                  <div class="table-header-cell" style="text-align:right;">Ações</div>
                </div>

                <div class="table-row">
                  <div class="client-cell">
                    <div class="client-avatar avatar-1">JS</div>
                    <div class="client-name">João Silva</div>
                  </div>
                  <div class="table-cell">Contrato Social</div>
                  <div class="table-cell">10/05/2026</div>
                  <div class="table-cell">
                    <span class="status-badge status-analise">Análise</span>
                  </div>
                  <div class="table-actions">⋮</div>
                </div>

                <div class="table-row">
                  <div class="client-cell">
                    <div class="client-avatar avatar-2">MS</div>
                    <div class="client-name">Maria Souza</div>
                  </div>
                  <div class="table-cell">Petição Inicial</div>
                  <div class="table-cell">09/05/2026</div>
                  <div class="table-cell">
                    <span class="status-badge status-concluido">Concluído</span>
                  </div>
                  <div class="table-actions">⋮</div>
                </div>

                <div class="table-row">
                  <div class="client-cell">
                    <div class="client-avatar avatar-3">AC</div>
                    <div class="client-name">Ana Carolina</div>
                  </div>
                  <div class="table-cell">Procuração Atualizada</div>
                  <div class="table-cell">08/05/2026</div>
                  <div class="table-cell">
                    <span class="status-badge status-complemento">Complemento</span>
                  </div>
                  <div class="table-actions">⋮</div>
                </div>

                <div class="table-row">
                  <div class="client-cell">
                    <div class="client-avatar avatar-4">RP</div>
                    <div class="client-name">Rafael Prado</div>
                  </div>
                  <div class="table-cell">Comprovante Residencial</div>
                  <div class="table-cell">08/05/2026</div>
                  <div class="table-cell">
                    <span class="status-badge status-analise">Análise</span>
                  </div>
                  <div class="table-actions">⋮</div>
                </div>
              </div>

              <div class="table-pagination">
                <div class="pagination-info">EXIBINDO 1 A 4 DE 24 RESULTADOS</div>

                <div class="pagination-controls">
                  <div class="page-btn">‹</div>
                  <div class="page-btn active">1</div>
                  <div class="page-btn">2</div>
                  <div class="page-btn">3</div>
                  <div class="page-btn">›</div>
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
}
