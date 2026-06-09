if (typeof window.documentsStore === 'undefined') {
  window.documentsStore = [
    { id: 1, clienteId: 1, clienteNome: 'Larissa Souza', clienteIniciais: 'LS', avatar: 'avatar-1', tipo: 'Carta Convite', data: '2026-06-08', status: 'Pendente', recebimento: 'E-mail', observacoes: '', arquivoNome: 'larissa-carta-convite.pdf', arquivoUrl: '', processo: '0801234-56.2026.5.09.0012', analise: null },
    { id: 2, clienteId: 2, clienteNome: 'João Fernando Pereira', clienteIniciais: 'JP', avatar: 'avatar-2', tipo: 'Procuração', data: '2026-06-08', status: 'Análise', recebimento: 'Portal', observacoes: '', arquivoNome: 'joao-procuracao.pdf', arquivoUrl: '', processo: '0802234-56.2026.5.09.0012', analise: null },
    { id: 3, clienteId: 3, clienteNome: 'Odete Maria da Silva', clienteIniciais: 'OS', avatar: 'avatar-3', tipo: 'CNIS', data: '2026-06-07', status: 'Complemento', recebimento: 'WhatsApp', observacoes: '', arquivoNome: 'odete-cnis.pdf', arquivoUrl: '', processo: '0803234-56.2026.5.09.0012', analise: null },
    { id: 4, clienteId: 4, clienteNome: 'Tiago Oliveira', clienteIniciais: 'TO', avatar: 'avatar-4', tipo: 'Declaração de Hipossuficiência', data: '2026-06-07', status: 'Pendente', recebimento: 'E-mail', observacoes: '', arquivoNome: 'tiago-hipossuficiencia.pdf', arquivoUrl: '', processo: '0804234-56.2026.5.09.0012', analise: null },
    { id: 5, clienteId: 5, clienteNome: 'Amanda Castro', clienteIniciais: 'AC', avatar: 'avatar-1', tipo: 'RG', data: '2026-06-06', status: 'Concluído', recebimento: 'Portal', observacoes: '', arquivoNome: 'amanda-rg.jpg', arquivoUrl: '', processo: '0805234-56.2026.5.09.0012', analise: { pertinencia: 'Essencial', fase: 'Instrução', notas: 'Documento legível e compatível com o cadastro.', ultimaAtualizacao: '06 de maio 2026, 09:12' } },
    { id: 6, clienteId: 6, clienteNome: 'Bruno Martins', clienteIniciais: 'BM', avatar: 'avatar-2', tipo: 'CPF', data: '2026-06-06', status: 'Análise', recebimento: 'Presencial', observacoes: '', arquivoNome: 'bruno-cpf.png', arquivoUrl: '', processo: '0806234-56.2026.5.09.0012', analise: null },
    { id: 7, clienteId: 7, clienteNome: 'Camila Rocha', clienteIniciais: 'CR', avatar: 'avatar-3', tipo: 'Comprovante de Residência', data: '2026-06-05', status: 'Pendente', recebimento: 'E-mail', observacoes: '', arquivoNome: 'camila-residencia.pdf', arquivoUrl: '', processo: '0807234-56.2026.5.09.0012', analise: null },
    { id: 8, clienteId: 8, clienteNome: 'Daniel Lima', clienteIniciais: 'DL', avatar: 'avatar-4', tipo: 'Contrato Social', data: '2026-06-05', status: 'Concluído', recebimento: 'Portal', observacoes: '', arquivoNome: 'daniel-contrato-social.pdf', arquivoUrl: '', processo: '0808234-56.2026.5.09.0012', analise: { pertinencia: 'Complementar', fase: 'Instrução', notas: 'Documento auxiliar para composição do dossiê.', ultimaAtualizacao: '06 de maio 2026, 09:12' } },
    { id: 9, clienteId: 9, clienteNome: 'Eduarda Nunes', clienteIniciais: 'EN', avatar: 'avatar-1', tipo: 'Petição Inicial', data: '2026-06-04', status: 'Análise', recebimento: 'E-mail', observacoes: '', arquivoNome: 'eduarda-peticao.pdf', arquivoUrl: '', processo: '0809234-56.2026.5.09.0012', analise: null },
    { id: 10, clienteId: 10, clienteNome: 'Felipe Gomes', clienteIniciais: 'FG', avatar: 'avatar-2', tipo: 'Laudo Médico', data: '2026-06-04', status: 'Complemento', recebimento: 'WhatsApp', observacoes: '', arquivoNome: 'felipe-laudo.pdf', arquivoUrl: '', processo: '0810234-56.2026.5.09.0012', analise: null },
    { id: 11, clienteId: 11, clienteNome: 'Gabriela Teixeira', clienteIniciais: 'GT', avatar: 'avatar-3', tipo: 'CTPS', data: '2026-06-03', status: 'Pendente', recebimento: 'Portal', observacoes: '', arquivoNome: 'gabriela-ctps.pdf', arquivoUrl: '', processo: '0811234-56.2026.5.09.0012', analise: null },
    { id: 12, clienteId: 12, clienteNome: 'Henrique Alves', clienteIniciais: 'HA', avatar: 'avatar-4', tipo: 'Holerite', data: '2026-06-03', status: 'Concluído', recebimento: 'E-mail', observacoes: '', arquivoNome: 'henrique-holerite.pdf', arquivoUrl: '', processo: '0812234-56.2026.5.09.0012', analise: { pertinencia: 'Essencial', fase: 'Instrução', notas: 'Comprovação suficiente para a etapa atual.', ultimaAtualizacao: '06 de maio 2026, 09:12' } },
    { id: 13, clienteId: 13, clienteNome: 'Isabela Moraes', clienteIniciais: 'IM', avatar: 'avatar-1', tipo: 'Extrato Bancário', data: '2026-06-02', status: 'Análise', recebimento: 'Portal', observacoes: '', arquivoNome: 'isabela-extrato.pdf', arquivoUrl: '', processo: '0813234-56.2026.5.09.0012', analise: null },
    { id: 14, clienteId: 14, clienteNome: 'José Ricardo', clienteIniciais: 'JR', avatar: 'avatar-2', tipo: 'Comprovante INSS', data: '2026-06-02', status: 'Pendente', recebimento: 'WhatsApp', observacoes: '', arquivoNome: 'jose-inss.pdf', arquivoUrl: '', processo: '0814234-56.2026.5.09.0012', analise: null },
    { id: 15, clienteId: 15, clienteNome: 'Karen Dias', clienteIniciais: 'KD', avatar: 'avatar-3', tipo: 'Ata Notarial', data: '2026-06-01', status: 'Complemento', recebimento: 'Presencial', observacoes: '', arquivoNome: 'karen-ata-notarial.pdf', arquivoUrl: '', processo: '0815234-56.2026.5.09.0012', analise: null },
    { id: 16, clienteId: 16, clienteNome: 'Lucas Prado', clienteIniciais: 'LP', avatar: 'avatar-4', tipo: 'Certidão de Nascimento', data: '2026-06-01', status: 'Concluído', recebimento: 'E-mail', observacoes: '', arquivoNome: 'lucas-nascimento.pdf', arquivoUrl: '', processo: '0816234-56.2026.5.09.0012', analise: { pertinencia: 'Essencial', fase: 'Instrução', notas: 'Documento principal conferido e validado.', ultimaAtualizacao: '06 de maio 2026, 09:12' } },
    { id: 17, clienteId: 17, clienteNome: 'Marina Pires', clienteIniciais: 'MP', avatar: 'avatar-1', tipo: 'Certidão de Casamento', data: '2026-06-08', status: 'Pendente', recebimento: 'Portal', observacoes: '', arquivoNome: 'marina-casamento.pdf', arquivoUrl: '', processo: '0817234-56.2026.5.09.0012', analise: null },
    { id: 18, clienteId: 18, clienteNome: 'Nathan Vieira', clienteIniciais: 'NV', avatar: 'avatar-2', tipo: 'Documentos Trabalhistas', data: '2026-06-07', status: 'Análise', recebimento: 'WhatsApp', observacoes: '', arquivoNome: 'nathan-trabalhistas.pdf', arquivoUrl: '', processo: '0818234-56.2026.5.09.0012', analise: null },
    { id: 19, clienteId: 19, clienteNome: 'Olivia Santana', clienteIniciais: 'OS', avatar: 'avatar-3', tipo: 'Comprovante de Endereço', data: '2026-06-06', status: 'Pendente', recebimento: 'E-mail', observacoes: '', arquivoNome: 'olivia-endereco.pdf', arquivoUrl: '', processo: '0819234-56.2026.5.09.0012', analise: null },
    { id: 20, clienteId: 20, clienteNome: 'Paulo Henrique', clienteIniciais: 'PH', avatar: 'avatar-4', tipo: 'Carteira de Trabalho', data: '2026-06-05', status: 'Concluído', recebimento: 'Portal', observacoes: '', arquivoNome: 'paulo-ctps.pdf', arquivoUrl: '', processo: '0820234-56.2026.5.09.0012', analise: { pertinencia: 'Complementar', fase: 'Instrução', notas: 'Utilizado para cruzamento de dados do vínculo.', ultimaAtualizacao: '06 de maio 2026, 09:12' } },
    { id: 21, clienteId: 21, clienteNome: 'Queila Ramos', clienteIniciais: 'QR', avatar: 'avatar-1', tipo: 'Procuração Particular', data: '2026-06-04', status: 'Análise', recebimento: 'E-mail', observacoes: '', arquivoNome: 'queila-procuracao.pdf', arquivoUrl: '', processo: '0821234-56.2026.5.09.0012', analise: null },
    { id: 22, clienteId: 22, clienteNome: 'Rafael Melo', clienteIniciais: 'RM', avatar: 'avatar-2', tipo: 'Petição Intermediária', data: '2026-06-03', status: 'Complemento', recebimento: 'WhatsApp', observacoes: '', arquivoNome: 'rafael-peticao.pdf', arquivoUrl: '', processo: '0822234-56.2026.5.09.0012', analise: null },
    { id: 23, clienteId: 23, clienteNome: 'Sandra Luz', clienteIniciais: 'SL', avatar: 'avatar-3', tipo: 'Sentença', data: '2026-06-02', status: 'Concluído', recebimento: 'Portal', observacoes: '', arquivoNome: 'sandra-sentenca.pdf', arquivoUrl: '', processo: '0823234-56.2026.5.09.0012', analise: { pertinencia: 'Essencial', fase: 'Julgamento', notas: 'Sentença consolidada e apta para uso na etapa posterior.', ultimaAtualizacao: '06 de maio 2026, 09:12' } },
    { id: 24, clienteId: 24, clienteNome: 'Tatiane Costa', clienteIniciais: 'TC', avatar: 'avatar-4', tipo: 'RG Atualizado', data: '2026-06-01', status: 'Pendente', recebimento: 'Presencial', observacoes: '', arquivoNome: 'tatiane-rg.pdf', arquivoUrl: '', processo: '0824234-56.2026.5.09.0012', analise: null }
  ];
}

let documentosSearchTerm = '';
let documentosStatusFilters = ['Pendente'];
let documentosTipoFilter = '';
let documentosDateStart = '';
let documentosDateEnd = '';
let documentosCurrentPage = 1;
const DOCUMENTOS_ITEMS_PER_PAGE = 4;

let documentoDraft = {
  clienteNome: '',
  tipo: '',
  data: '',
  recebimento: '',
  observacoes: '',
  arquivo: null,
  arquivoUrl: '',
  statusInicial: 'Pendente'
};

let documentosCurrentAnalysisId = null;
let documentosAnalysisDraft = {
  pertinencia: '',
  fase: '',
  notas: '',
  changed: false
};

function getDocumentsClients() {
  if (typeof dashboardClients !== 'undefined') return dashboardClients;
  return [];
}

function getDocumentsTiposDisponiveis() {
  return [...new Set(window.documentsStore.map(d => d.tipo))].sort();
}

function formatDateBR(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

function getDocumentoStatusClass(status) {
  if (status === 'Pendente') return 'status-pendente';
  if (status === 'Análise') return 'status-analise';
  if (status === 'Complemento') return 'status-complemento';
  if (status === 'Concluído') return 'status-concluido';
  return 'status-analise';
}

function getFilteredDocuments() {
  return window.documentsStore.filter(doc => {
    const matchesSearch =
      !documentosSearchTerm ||
      doc.clienteNome.toLowerCase().includes(documentosSearchTerm.toLowerCase()) ||
      doc.tipo.toLowerCase().includes(documentosSearchTerm.toLowerCase()) ||
      doc.arquivoNome.toLowerCase().includes(documentosSearchTerm.toLowerCase()) ||
      (doc.processo || '').toLowerCase().includes(documentosSearchTerm.toLowerCase());

    const matchesStatus =
      documentosStatusFilters.length === 0 ||
      documentosStatusFilters.includes(doc.status);

    const matchesTipo =
      !documentosTipoFilter || doc.tipo === documentosTipoFilter;

    const matchesStart =
      !documentosDateStart || doc.data >= documentosDateStart;

    const matchesEnd =
      !documentosDateEnd || doc.data <= documentosDateEnd;

    return matchesSearch && matchesStatus && matchesTipo && matchesStart && matchesEnd;
  });
}

function getDocumentsTotalPages() {
  return Math.max(1, Math.ceil(getFilteredDocuments().length / DOCUMENTOS_ITEMS_PER_PAGE));
}

function getDocumentsPaginated() {
  const filtered = getFilteredDocuments();
  const start = (documentosCurrentPage - 1) * DOCUMENTOS_ITEMS_PER_PAGE;
  return filtered.slice(start, start + DOCUMENTOS_ITEMS_PER_PAGE);
}

function toggleStatusFilter(status) {
  if (documentosStatusFilters.includes(status)) {
    documentosStatusFilters = documentosStatusFilters.filter(s => s !== status);
  } else {
    documentosStatusFilters.push(status);
  }
  documentosCurrentPage = 1;
  renderDocuments();
}

function clearDocumentFilters() {
  documentosSearchTerm = '';
  documentosStatusFilters = [];
  documentosTipoFilter = '';
  documentosDateStart = '';
  documentosDateEnd = '';
  documentosCurrentPage = 1;
  renderDocuments();
}

function bindDocsNav() {
  document.querySelectorAll('[data-nav="dashboard"]').forEach(el => {
    el.addEventListener('click', () => renderDashboard());
  });

  document.querySelectorAll('[data-nav="docs"]').forEach(el => {
    el.addEventListener('click', () => renderDocuments());
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
}

function renderDocumentsRows() {
  const docs = getDocumentsPaginated();

  if (!docs.length) {
    return `
      <div class="documents-empty-state figma-empty-state">
        <div class="documents-empty-illustration"></div>
        <div class="documents-empty-title">Nenhum resultado encontrado</div>
        <div class="documents-empty-text">
          Não encontramos registros com os filtros selecionados.
        </div>
        <div class="documents-empty-suggestions">
          <div class="documents-empty-card blue">
            <div class="documents-empty-card-title">Refine sua busca</div>
            <div class="documents-empty-card-text">
              Tente termos mais genéricos ou verifique se há erros de digitação no número do processo.
            </div>
          </div>
          <div class="documents-empty-card gold">
            <div class="documents-empty-card-title">Remova os filtros</div>
            <div class="documents-empty-card-text">
              Alguns dos filtros ativos podem estar restringindo demais os resultados.
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return docs.map(doc => `
    <div class="documents-table-row">
      <div class="documents-client-cell">
        <div class="client-avatar ${doc.avatar}">${doc.clienteIniciais}</div>
        <div class="documents-client-name">${doc.clienteNome}</div>
      </div>

      <div class="documents-table-cell">${doc.tipo}</div>
      <div class="documents-table-cell">${formatDateBR(doc.data)}</div>
      <div class="documents-table-cell">
        <span class="status-badge ${getDocumentoStatusClass(doc.status)}">${doc.status}</span>
      </div>

      <div class="documents-table-actions">
        <button class="documents-icon-btn" title="Abrir análise" data-doc-action="view" data-doc-id="${doc.id}">👁</button>
        <button class="documents-icon-btn danger" title="Excluir" data-doc-action="delete" data-doc-id="${doc.id}">🗑</button>
      </div>
    </div>
  `).join('');
}

function renderDocumentsPagination() {
  const totalPages = getDocumentsTotalPages();
  let html = `<div class="page-btn" data-doc-page-action="prev">‹</div>`;

  for (let i = 1; i <= totalPages; i++) {
    html += `<div class="page-btn ${i === documentosCurrentPage ? 'active' : ''}" data-doc-page="${i}">${i}</div>`;
  }

  html += `<div class="page-btn" data-doc-page-action="next">›</div>`;
  return html;
}

function renderDocuments() {
  const app = document.getElementById('app');
  const filtered = getFilteredDocuments();
  const start = filtered.length ? ((documentosCurrentPage - 1) * DOCUMENTOS_ITEMS_PER_PAGE) + 1 : 0;
  const end = Math.min(documentosCurrentPage * DOCUMENTOS_ITEMS_PER_PAGE, filtered.length);
  const tipos = getDocumentsTiposDisponiveis();

  app.innerHTML = `
    <div class="dashboard-page">
      ${renderSidebar('docs')}

      <div class="main-shell">
        <header class="topbar">
          <div class="topbar-search">
            <input id="docs-global-search" class="topbar-search-input" type="text" placeholder="Buscar no JurisDoc..." value="${documentosSearchTerm}">
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
          <main class="main-canvas documentos-main">
            <section class="documentos-header">
              <div class="page-header-left">
                <div class="page-title">Documentos Jurídicos</div>
              </div>

              <button id="btn-novo-documento" class="documentos-new-btn">+ Novo Cadastro</button>
            </section>

            <section class="documentos-layout">
              <aside class="documentos-filters">
                <div class="documentos-filters-top">
                  <div class="documentos-filters-title">Filtros</div>
                  <button id="btn-clear-filters" class="documentos-clear-btn">Limpar</button>
                </div>

                <div class="documentos-local-search">
                  <input id="docs-local-search" type="text" placeholder="Pesquisar..." value="${documentosSearchTerm}">
                </div>

                <div class="documentos-filter-group">
                  <div class="documentos-filter-label">Status do Fluxo</div>

                  <label class="documentos-check-row">
                    <input type="checkbox" ${documentosStatusFilters.includes('Pendente') ? 'checked' : ''} data-status-filter="Pendente">
                    <span>Pendente</span>
                  </label>

                  <label class="documentos-check-row">
                    <input type="checkbox" ${documentosStatusFilters.includes('Análise') ? 'checked' : ''} data-status-filter="Análise">
                    <span>Aguardando Análise</span>
                  </label>

                  <label class="documentos-check-row">
                    <input type="checkbox" ${documentosStatusFilters.includes('Complemento') ? 'checked' : ''} data-status-filter="Complemento">
                    <span>Complemento</span>
                  </label>

                  <label class="documentos-check-row">
                    <input type="checkbox" ${documentosStatusFilters.includes('Concluído') ? 'checked' : ''} data-status-filter="Concluído">
                    <span>Concluído</span>
                  </label>
                </div>

                <div class="documentos-filter-group">
                  <div class="documentos-filter-label">Tipo do Documento</div>
                  <select id="docs-tipo-filter" class="documentos-select">
                    <option value="">Todos</option>
                    ${tipos.map(tipo => `<option value="${tipo}" ${documentosTipoFilter === tipo ? 'selected' : ''}>${tipo}</option>`).join('')}
                  </select>
                </div>

                <div class="documentos-filter-group">
                  <div class="documentos-filter-label">Intervalo Temporal</div>
                  <input id="docs-date-start" class="documentos-date-input" type="date" value="${documentosDateStart}">
                  <input id="docs-date-end" class="documentos-date-input" type="date" value="${documentosDateEnd}">
                </div>

                <button id="btn-aplicar-filtros" class="documentos-apply-btn">Aplicar filtros</button>
              </aside>

              <section class="documentos-content">
                <div class="documentos-stats">
                  <div class="documents-stat-card border-blue">
                    <div class="documents-stat-label">Total Recebido</div>
                    <div class="documents-stat-value">${window.documentsStore.length}</div>
                  </div>

                  <div class="documents-stat-card border-gray">
                    <div class="documents-stat-label">Aguardando Análise</div>
                    <div class="documents-stat-value">${window.documentsStore.filter(d => d.status === 'Análise').length}</div>
                  </div>

                  <div class="documents-stat-card border-red">
                    <div class="documents-stat-label">Revisões Urgentes</div>
                    <div class="documents-stat-value">${window.documentsStore.filter(d => d.status === 'Complemento').length}</div>
                  </div>
                </div>

                <div class="documents-table-box">
                  <div class="documents-table-header">
                    <div>Identidade do Cliente</div>
                    <div>Tipo de Documento</div>
                    <div>Data de Registro</div>
                    <div>Status</div>
                    <div>Ação</div>
                  </div>

                  <div id="documents-table-body">
                    ${renderDocumentsRows()}
                  </div>

                  <div class="table-pagination">
                    <div class="pagination-info">
                      EXIBINDO ${start} A ${end} DE ${filtered.length} ENTRADAS
                    </div>

                    <div id="documents-pagination-controls" class="pagination-controls">
                      ${renderDocumentsPagination()}
                    </div>
                  </div>
                </div>
              </section>
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

  attachDocumentsEvents();
}

function attachDocumentsEvents() {
  const globalSearch = document.getElementById('docs-global-search');
  const localSearch = document.getElementById('docs-local-search');

  [globalSearch, localSearch].forEach(input => {
    if (input) {
      input.addEventListener('input', (e) => {
        documentosSearchTerm = e.target.value.trim();
        documentosCurrentPage = 1;
        renderDocuments();
      });
    }
  });

  document.querySelectorAll('[data-status-filter]').forEach(el => {
    el.addEventListener('change', () => {
      toggleStatusFilter(el.dataset.statusFilter);
    });
  });

  const tipoFilter = document.getElementById('docs-tipo-filter');
  if (tipoFilter) {
    tipoFilter.addEventListener('change', () => {
      documentosTipoFilter = tipoFilter.value;
      documentosCurrentPage = 1;
      renderDocuments();
    });
  }

  const dateStart = document.getElementById('docs-date-start');
  const dateEnd = document.getElementById('docs-date-end');

  if (dateStart) {
    dateStart.addEventListener('change', () => {
      documentosDateStart = dateStart.value;
    });
  }

  if (dateEnd) {
    dateEnd.addEventListener('change', () => {
      documentosDateEnd = dateEnd.value;
    });
  }

  const applyBtn = document.getElementById('btn-aplicar-filtros');
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      documentosCurrentPage = 1;
      renderDocuments();
    });
  }

  const clearBtn = document.getElementById('btn-clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearDocumentFilters);
  }

  const novoBtn = document.getElementById('btn-novo-documento');
  if (novoBtn) {
    novoBtn.addEventListener('click', () => renderDocumentNew());
  }

  document.querySelectorAll('[data-doc-page]').forEach(el => {
    el.addEventListener('click', () => {
      documentosCurrentPage = Number(el.dataset.docPage);
      renderDocuments();
    });
  });

  document.querySelectorAll('[data-doc-page-action="prev"]').forEach(el => {
    el.addEventListener('click', () => {
      if (documentosCurrentPage > 1) {
        documentosCurrentPage--;
        renderDocuments();
      }
    });
  });

  document.querySelectorAll('[data-doc-page-action="next"]').forEach(el => {
    el.addEventListener('click', () => {
      if (documentosCurrentPage < getDocumentsTotalPages()) {
        documentosCurrentPage++;
        renderDocuments();
      }
    });
  });

  document.querySelectorAll('[data-doc-action="view"]').forEach(el => {
    el.addEventListener('click', () => {
      renderDocumentAnalysis(Number(el.dataset.docId));
    });
  });

  document.querySelectorAll('[data-doc-action="delete"]').forEach(el => {
    el.addEventListener('click', () => {
      renderDeleteConfirmModal(Number(el.dataset.docId));
    });
  });

  bindDocsNav();
}

function renderDocumentNew() {
  const clientes = getDocumentsClients();
  const tipos = getDocumentsTiposDisponiveis();
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="dashboard-page">
      ${renderSidebar('docs')}

      <div class="main-shell">
        <header class="topbar">
          <div class="topbar-search">
            <input class="topbar-search-input" type="text" placeholder="Buscar no JurisDoc...">
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
          <main class="main-canvas documentos-main">
            <section class="documentos-header">
              <div class="page-header-left">
                <div class="page-title">Novo Cadastro de Documento</div>
                <div class="page-subtitle">Preencha as informações abaixo para registrar um novo documento.</div>
              </div>
              <div class="page-date">08 DE JUNHO, 2026</div>
            </section>

            <section class="cadastro-layout">
              <div class="cadastro-left">
                <div class="cadastro-card">
                  <div class="cadastro-card-title">Informações Primárias</div>

                  <div class="cadastro-grid">
                    <div class="cadastro-field">
                      <label>Cliente / Processo *</label>
                      <select id="doc-cliente-search">
                        <option value="">Selecione um cliente</option>
                        ${clientes.map(c => `<option value="${c.nome}" ${documentoDraft.clienteNome === c.nome ? 'selected' : ''}>${c.nome}</option>`).join('')}
                      </select>
                      <small>Selecione um cliente já sincronizado com o ERP</small>
                    </div>

                    <div class="cadastro-field">
                      <label>Tipo de Documento *</label>
                      <input id="doc-tipo" list="tipos-lista" type="text" placeholder="Tipo do documento" value="${documentoDraft.tipo}">
                      <datalist id="tipos-lista">
                        ${tipos.map(t => `<option value="${t}"></option>`).join('')}
                      </datalist>
                    </div>

                    <div class="cadastro-field">
                      <label>Data de Recebimento *</label>
                      <input id="doc-data" type="date" value="${documentoDraft.data}">
                    </div>

                    <div class="cadastro-field">
                      <label>Forma de Recebimento *</label>
                      <div class="recebimento-options">
                        <button type="button" class="recebimento-btn ${documentoDraft.recebimento === 'E-mail' ? 'active' : ''}" data-recebimento="E-mail">E-mail</button>
                        <button type="button" class="recebimento-btn ${documentoDraft.recebimento === 'Portal' ? 'active' : ''}" data-recebimento="Portal">Portal</button>
                        <button type="button" class="recebimento-btn ${documentoDraft.recebimento === 'WhatsApp' ? 'active' : ''}" data-recebimento="WhatsApp">WhatsApp</button>
                        <button type="button" class="recebimento-btn ${documentoDraft.recebimento === 'Presencial' ? 'active' : ''}" data-recebimento="Presencial">Presencial</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="cadastro-card">
                  <div class="cadastro-card-title">Arquivo do Documento</div>

                  <div class="cadastro-grid cadastro-grid-upload">
                    <div class="cadastro-field full">
                      <label>Upload *</label>
                      <div class="cadastro-upload-box">
                        <input id="doc-arquivo" type="file" accept=".pdf,.png,.jpg,.jpeg">
                        <div id="doc-arquivo-nome" class="cadastro-upload-name">
                          ${documentoDraft.arquivo ? documentoDraft.arquivo.name : 'Nenhum arquivo selecionado'}
                        </div>
                      </div>
                    </div>

                    <div class="cadastro-file-preview-box">
                      <div class="cadastro-file-preview-title">Prévia do arquivo</div>
                      <div id="cadastro-file-preview" class="cadastro-file-preview-empty">
                        ${documentoDraft.arquivo ? documentoDraft.arquivo.name : 'Selecione um arquivo para visualizar informações básicas'}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="cadastro-card">
                  <div class="cadastro-card-title">Observações</div>
                  <div class="cadastro-field full">
                    <label>Notas Técnicas</label>
                    <textarea id="doc-observacoes" placeholder="Descreva possíveis falhas de imagem, rasuras ou divergências de conteúdo...">${documentoDraft.observacoes}</textarea>
                  </div>
                </div>
              </div>

              <div class="cadastro-right">
                <div class="cadastro-side-card">
                  <div class="cadastro-side-title">Fluxo de Trabalho</div>

                  <div class="cadastro-side-field">
                    <label>Status Inicial</label>
                    <select id="doc-status">
                      <option value="Pendente" ${documentoDraft.statusInicial === 'Pendente' ? 'selected' : ''}>Pendente</option>
                      <option value="Análise" ${documentoDraft.statusInicial === 'Análise' ? 'selected' : ''}>Análise</option>
                      <option value="Complemento" ${documentoDraft.statusInicial === 'Complemento' ? 'selected' : ''}>Complemento</option>
                      <option value="Concluído" ${documentoDraft.statusInicial === 'Concluído' ? 'selected' : ''}>Concluído</option>
                    </select>
                  </div>

                  <div class="cadastro-actions">
                    <button id="btn-confirmar-salvar" class="cadastro-save-btn">Salvar Cadastro</button>
                    <button id="btn-confirmar-cancelar" class="cadastro-cancel-btn">Cancelar</button>
                  </div>
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

function attachDocumentNewEvents() {
  const fileInput = document.getElementById('doc-arquivo');
  const fileName = document.getElementById('doc-arquivo-nome');
  const filePreview = document.getElementById('cadastro-file-preview');
  const statusSelect = document.getElementById('doc-status');
  const clienteSelect = document.getElementById('doc-cliente-search');
  const tipoInput = document.getElementById('doc-tipo');
  const dataInput = document.getElementById('doc-data');
  const obsInput = document.getElementById('doc-observacoes');

  if (fileInput) {
    fileInput.addEventListener('change', () => {
      const file = fileInput.files && fileInput.files[0] ? fileInput.files[0] : null;
      documentoDraft.arquivo = file;

      if (file) {
        documentoDraft.arquivoUrl = URL.createObjectURL(file);
      } else {
        documentoDraft.arquivoUrl = '';
      }

      if (fileName) {
        fileName.textContent = file ? file.name : 'Nenhum arquivo selecionado';
      }

      if (filePreview) {
        filePreview.textContent = file
          ? `${file.name} • ${(file.size / 1024).toFixed(1)} KB`
          : 'Selecione um arquivo para visualizar informações básicas';
      }
    });
  }

  if (statusSelect) {
    statusSelect.addEventListener('change', () => {
      documentoDraft.statusInicial = statusSelect.value;
    });
  }

  if (clienteSelect) {
    clienteSelect.addEventListener('change', () => {
      documentoDraft.clienteNome = clienteSelect.value;
    });
  }

  if (tipoInput) {
    tipoInput.addEventListener('input', () => {
      documentoDraft.tipo = tipoInput.value;
    });
  }

  if (dataInput) {
    dataInput.addEventListener('change', () => {
      documentoDraft.data = dataInput.value;
    });
  }

  if (obsInput) {
    obsInput.addEventListener('input', () => {
      documentoDraft.observacoes = obsInput.value;
    });
  }

  document.querySelectorAll('.recebimento-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      documentoDraft.recebimento = btn.dataset.recebimento;
      renderDocumentNew();
    });
  });

  const saveBtn = document.getElementById('btn-confirmar-salvar');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      documentoDraft.clienteNome = document.getElementById('doc-cliente-search').value.trim();
      documentoDraft.tipo = document.getElementById('doc-tipo').value.trim();
      documentoDraft.data = document.getElementById('doc-data').value;
      documentoDraft.observacoes = document.getElementById('doc-observacoes').value.trim();
      documentoDraft.statusInicial = document.getElementById('doc-status').value;
      renderDocumentSaveConfirmModal();
    });
  }

  const cancelBtn = document.getElementById('btn-confirmar-cancelar');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      documentoDraft.clienteNome = document.getElementById('doc-cliente-search').value.trim();
      documentoDraft.tipo = document.getElementById('doc-tipo').value.trim();
      documentoDraft.data = document.getElementById('doc-data').value;
      documentoDraft.observacoes = document.getElementById('doc-observacoes').value.trim();
      documentoDraft.statusInicial = document.getElementById('doc-status').value;
      renderDocumentCancelModal();
    });
  }

  bindDocsNav();
}

function renderDocumentSaveConfirmModal() {
  const modal = document.createElement('div');
  modal.className = 'doc-modal-overlay';
  modal.innerHTML = `
    <div class="doc-modal-card">
      <div class="doc-modal-header">
        <div class="doc-modal-title">Confirmar salvamento</div>
      </div>
      <div class="doc-modal-body">
        <div class="doc-modal-text">
          Deseja salvar este cadastro de documento?
        </div>
      </div>
      <div class="doc-modal-footer">
        <button id="doc-modal-cancel" class="doc-modal-btn secondary">Voltar</button>
        <button id="doc-modal-confirm" class="doc-modal-btn primary">Confirmar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('doc-modal-cancel').onclick = () => modal.remove();
  document.getElementById('doc-modal-confirm').onclick = () => {
    modal.remove();
    saveDocumentDraft();
  };
}

function saveDocumentDraft() {
  const clientes = getDocumentsClients();
  const cliente = clientes.find(c => c.nome.toLowerCase() === documentoDraft.clienteNome.toLowerCase());

  if (!cliente || !documentoDraft.tipo || !documentoDraft.data || !documentoDraft.recebimento || !documentoDraft.arquivo) {
    alert('Preencha cliente, tipo, data, forma de recebimento e selecione um arquivo.');
    return;
  }

  window.documentsStore.unshift({
    id: Date.now(),
    clienteId: cliente.id,
    clienteNome: cliente.nome,
    clienteIniciais: cliente.iniciais,
    avatar: cliente.tipoAvatar,
    tipo: documentoDraft.tipo,
    data: documentoDraft.data,
    status: documentoDraft.statusInicial || 'Pendente',
    recebimento: documentoDraft.recebimento,
    observacoes: documentoDraft.observacoes,
    arquivoNome: documentoDraft.arquivo.name,
    arquivoUrl: documentoDraft.arquivoUrl || '',
    processo: `08${Math.floor(Math.random() * 9000 + 1000)}-56.2026.5.09.0012`,
    analise: null
  });

  documentoDraft = {
    clienteNome: '',
    tipo: '',
    data: '',
    recebimento: '',
    observacoes: '',
    arquivo: null,
    arquivoUrl: '',
    statusInicial: 'Pendente'
  };

  renderDocumentSavedSuccess();
}

function renderDocumentSavedSuccess() {
  const modal = document.createElement('div');
  modal.className = 'doc-modal-overlay';
  modal.innerHTML = `
    <div class="doc-modal-card success">
      <div class="doc-modal-success-icon"></div>
      <div class="doc-modal-title center">Registrado com Sucesso</div>
      <div class="doc-modal-text center">O documento foi cadastrado com sucesso no sistema.</div>
      <div class="doc-modal-actions center">
        <button id="doc-success-list" class="doc-modal-btn soft">Ir para lista</button>
        <button id="doc-success-new" class="doc-modal-btn primary">Novo cadastro</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('doc-success-list').onclick = () => {
    modal.remove();
    renderDocuments();
  };

  document.getElementById('doc-success-new').onclick = () => {
    modal.remove();
    renderDocumentNew();
  };
}

function renderDocumentCancelModal() {
  const modal = document.createElement('div');
  modal.className = 'doc-modal-overlay';
  modal.innerHTML = `
    <div class="doc-modal-card">
      <div class="doc-modal-header danger">
        <div class="doc-modal-title">Descartar alterações</div>
      </div>
      <div class="doc-modal-body">
        <div class="doc-modal-text">
          Você possui alterações não salvas no cadastro deste documento. Deseja realmente sair sem salvar os dados preenchidos?
        </div>
      </div>
      <div class="doc-modal-footer tinted">
        <button id="doc-cancel-back" class="doc-modal-btn secondary">Voltar</button>
        <button id="doc-cancel-confirm" class="doc-modal-btn primary">Sair sem salvar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('doc-cancel-back').onclick = () => modal.remove();
  document.getElementById('doc-cancel-confirm').onclick = () => {
    modal.remove();
    documentoDraft = {
      clienteNome: '',
      tipo: '',
      data: '',
      recebimento: '',
      observacoes: '',
      arquivo: null,
      arquivoUrl: '',
      statusInicial: 'Pendente'
    };
    renderDocuments();
  };
}

function renderDocumentAnalysis(docId) {
  const doc = window.documentsStore.find(d => d.id === docId);
  if (!doc) return;

  documentosCurrentAnalysisId = docId;
  documentosAnalysisDraft = {
    pertinencia: doc.analise?.pertinencia || '',
    fase: doc.analise?.fase || '',
    notas: doc.analise?.notas || '',
    changed: false
  };

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="dashboard-page">
      ${renderSidebar('docs')}

      <div class="main-shell">
        <header class="topbar">
          <div class="topbar-search">
            <input class="topbar-search-input" type="text" placeholder="Buscar no JurisDoc...">
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
          <main class="main-canvas documentos-analysis-main">
            <section class="documentos-analysis-header">
              <div class="page-title">Análise de Documento</div>
            </section>

            <section class="document-analysis-layout">
              <section class="document-analysis-preview">
                <div class="document-preview-topbar">
                  <div class="document-preview-filename">${doc.arquivoNome}</div>
                  <div class="document-preview-actions">
                    ${doc.arquivoUrl ? `<a href="${doc.arquivoUrl}" target="_blank" class="document-preview-action">Abrir</a>` : ''}
                    <button type="button" class="document-preview-action" id="btn-download-doc">Baixar</button>
                  </div>
                </div>

                <div class="document-preview-body">
                  ${
                    doc.arquivoUrl && doc.arquivoNome.match(/\.(jpg|jpeg|png)$/i)
                      ? `<img src="${doc.arquivoUrl}" alt="${doc.arquivoNome}" class="document-preview-image">`
                      : doc.arquivoUrl && doc.arquivoNome.match(/\.pdf$/i)
                        ? `<iframe src="${doc.arquivoUrl}" class="document-preview-iframe"></iframe>`
                        : `
                          <div class="document-placeholder-page">
                            <div class="document-placeholder-badge">${doc.status}</div>
                            <div class="document-placeholder-line w-40"></div>
                            <div class="document-placeholder-block">
                              <div class="document-placeholder-line w-100"></div>
                              <div class="document-placeholder-line w-72"></div>
                            </div>
                            <div class="document-placeholder-text-group">
                              <div class="document-placeholder-line w-100"></div>
                              <div class="document-placeholder-line w-100"></div>
                              <div class="document-placeholder-line w-100"></div>
                              <div class="document-placeholder-line w-84"></div>
                              <div class="document-placeholder-line w-68"></div>
                            </div>
                            <div class="document-placeholder-text-group">
                              <div class="document-placeholder-line w-100"></div>
                              <div class="document-placeholder-line w-100"></div>
                              <div class="document-placeholder-line w-100"></div>
                              <div class="document-placeholder-line w-100"></div>
                            </div>
                          </div>
                        `
                  }
                </div>
              </section>

              <section class="document-analysis-form-side">
                <div class="analysis-case-header">
                  <div class="analysis-case-label">Autos do processo</div>
                  <div class="analysis-case-number">${doc.processo || '0801234-56.2026.5.09.0012'}</div>
                  <div class="analysis-case-tags">
                    <span class="analysis-tag primary">${doc.tipo}</span>
                    <span class="analysis-tag neutral">${doc.status}</span>
                  </div>
                </div>

                <div class="analysis-form-card">
                  <div class="analysis-block">
                    <div class="analysis-block-title">Classificação de Pertinência</div>

                    <label class="analysis-radio-card ${documentosAnalysisDraft.pertinencia === 'Essencial' ? 'active' : ''}">
                      <input type="radio" name="pertinencia" value="Essencial" ${documentosAnalysisDraft.pertinencia === 'Essencial' ? 'checked' : ''}>
                      <div>
                        <strong>Essencial</strong>
                        <small>Documento central para a análise do caso</small>
                      </div>
                    </label>

                    <label class="analysis-radio-card ${documentosAnalysisDraft.pertinencia === 'Complementar' ? 'active' : ''}">
                      <input type="radio" name="pertinencia" value="Complementar" ${documentosAnalysisDraft.pertinencia === 'Complementar' ? 'checked' : ''}>
                      <div>
                        <strong>Complementar</strong>
                        <small>Serve como apoio ou validação</small>
                      </div>
                    </label>

                    <label class="analysis-radio-card ${documentosAnalysisDraft.pertinencia === 'Descartável' ? 'active' : ''}">
                      <input type="radio" name="pertinencia" value="Descartável" ${documentosAnalysisDraft.pertinencia === 'Descartável' ? 'checked' : ''}>
                      <div>
                        <strong>Descartável / Redundante</strong>
                        <small>Não agrega valor à fase atual</small>
                      </div>
                    </label>
                  </div>

                  <div class="analysis-block">
                    <div class="analysis-block-title">Fase Processual</div>
                    <select id="analysis-fase" class="analysis-select">
                      <option value="">Selecione</option>
                      <option value="Instrução" ${documentosAnalysisDraft.fase === 'Instrução' ? 'selected' : ''}>Instrução</option>
                      <option value="Julgamento" ${documentosAnalysisDraft.fase === 'Julgamento' ? 'selected' : ''}>Julgamento</option>
                      <option value="Execução" ${documentosAnalysisDraft.fase === 'Execução' ? 'selected' : ''}>Execução</option>
                      <option value="Recurso" ${documentosAnalysisDraft.fase === 'Recurso' ? 'selected' : ''}>Recurso</option>
                    </select>
                  </div>

                  <div class="analysis-block">
                    <div class="analysis-block-title row">
                      <span>Notas Técnicas</span>
                      <small>Opcional</small>
                    </div>
                    <textarea id="analysis-notas" class="analysis-textarea" placeholder="Insira análise acadêmica ou precedentes legais identificados nesta peça...">${documentosAnalysisDraft.notas}</textarea>
                  </div>

                  <div class="analysis-actions">
                    <button id="btn-save-analysis" class="analysis-save-btn">SALVAR ANÁLISE</button>
                    <button id="btn-back-analysis" class="analysis-back-btn">VOLTAR PARA LISTA</button>
                  </div>
                </div>

                <div class="analysis-meta-card">
                  <div class="analysis-meta-title">Metadados do documento</div>
                  <div class="analysis-meta-row">
                    <div>
                      <strong>Cadastro</strong>
                      <small>Secretaria</small>
                    </div>
                    <span>${doc.analise?.ultimaAtualizacao || '06 de maio 2026, 09:12'}</span>
                  </div>
                </div>
              </section>
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

  attachDocumentAnalysisEvents();
}

function attachDocumentAnalysisEvents() {
  const doc = window.documentsStore.find(d => d.id === documentosCurrentAnalysisId);
  if (!doc) return;

  document.querySelectorAll('input[name="pertinencia"]').forEach(input => {
    input.addEventListener('change', () => {
      documentosAnalysisDraft.pertinencia = input.value;
      documentosAnalysisDraft.changed = true;
      renderDocumentAnalysis(documentosCurrentAnalysisId);
    });
  });

  const fase = document.getElementById('analysis-fase');
  if (fase) {
    fase.addEventListener('change', () => {
      documentosAnalysisDraft.fase = fase.value;
      documentosAnalysisDraft.changed = true;
    });
  }

  const notas = document.getElementById('analysis-notas');
  if (notas) {
    notas.addEventListener('input', () => {
      documentosAnalysisDraft.notas = notas.value;
      documentosAnalysisDraft.changed = true;
    });
  }

  const saveBtn = document.getElementById('btn-save-analysis');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      documentosAnalysisDraft.fase = document.getElementById('analysis-fase').value;
      documentosAnalysisDraft.notas = document.getElementById('analysis-notas').value;
      renderAnalysisSaveConfirmModal();
    });
  }

  const backBtn = document.getElementById('btn-back-analysis');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      const original = doc.analise || {};
      const hasUnsaved =
        documentosAnalysisDraft.pertinencia !== (original.pertinencia || '') ||
        documentosAnalysisDraft.fase !== (original.fase || '') ||
        documentosAnalysisDraft.notas !== (original.notas || '');

      if (hasUnsaved) {
        renderAnalysisBackConfirmModal();
      } else {
        renderDocuments();
      }
    });
  }

  const downloadBtn = document.getElementById('btn-download-doc');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (doc.arquivoUrl) {
        const a = document.createElement('a');
        a.href = doc.arquivoUrl;
        a.download = doc.arquivoNome;
        a.click();
      } else {
        alert(`Arquivo: ${doc.arquivoNome}`);
      }
    });
  }

  bindDocsNav();
}

function renderAnalysisSaveConfirmModal() {
  const modal = document.createElement('div');
  modal.className = 'doc-modal-overlay';
  modal.innerHTML = `
    <div class="doc-modal-card">
      <div class="doc-modal-header">
        <div class="doc-modal-title">Confirmar salvamento</div>
      </div>
      <div class="doc-modal-body">
        <div class="doc-modal-text">
          Deseja salvar a análise deste documento?
        </div>
      </div>
      <div class="doc-modal-footer">
        <button id="analysis-save-cancel" class="doc-modal-btn secondary">Voltar</button>
        <button id="analysis-save-confirm" class="doc-modal-btn primary">Confirmar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('analysis-save-cancel').onclick = () => modal.remove();
  document.getElementById('analysis-save-confirm').onclick = () => {
    modal.remove();
    saveDocumentAnalysis();
  };
}

function saveDocumentAnalysis() {
  const doc = window.documentsStore.find(d => d.id === documentosCurrentAnalysisId);
  if (!doc) return;

  if (!documentosAnalysisDraft.pertinencia || !documentosAnalysisDraft.fase) {
    alert('Selecione a pertinência e a fase processual.');
    return;
  }

  doc.analise = {
    pertinencia: documentosAnalysisDraft.pertinencia,
    fase: documentosAnalysisDraft.fase,
    notas: documentosAnalysisDraft.notas,
    ultimaAtualizacao: '06 de maio 2026, 09:12'
  };

  if (doc.status !== 'Concluído') {
    doc.status = 'Concluído';
  }

  documentosAnalysisDraft.changed = false;
  renderAnalysisSavedSuccessModal();
}

function renderAnalysisSavedSuccessModal() {
  const modal = document.createElement('div');
  modal.className = 'doc-modal-overlay';
  modal.innerHTML = `
    <div class="doc-modal-card success">
      <div class="doc-modal-success-icon"></div>
      <div class="doc-modal-title center">Análise salva com sucesso</div>
      <div class="doc-modal-text center">As informações do documento foram atualizadas.</div>
      <div class="doc-modal-actions center">
        <button id="analysis-success-list" class="doc-modal-btn primary">Voltar para lista</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('analysis-success-list').onclick = () => {
    modal.remove();
    renderDocuments();
  };
}

function renderAnalysisBackConfirmModal() {
  const modal = document.createElement('div');
  modal.className = 'doc-modal-overlay';
  modal.innerHTML = `
    <div class="doc-modal-card">
      <div class="doc-modal-header danger">
        <div class="doc-modal-title">Descartar alterações</div>
      </div>
      <div class="doc-modal-body">
        <div class="doc-modal-text">
          Existem edições não salvas neste documento. Se você sair agora, todas as informações inseridas nesta sessão serão permanentemente perdidas. Deseja continuar?
        </div>
      </div>
      <div class="doc-modal-footer tinted">
        <button id="analysis-back-cancel" class="doc-modal-btn secondary">Continuar editando</button>
        <button id="analysis-back-confirm" class="doc-modal-btn primary">Sair sem salvar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('analysis-back-cancel').onclick = () => modal.remove();
  document.getElementById('analysis-back-confirm').onclick = () => {
    modal.remove();
    renderDocuments();
  };
}

function renderDeleteConfirmModal(docId) {
  const doc = window.documentsStore.find(d => d.id === docId);
  if (!doc) return;

  const modal = document.createElement('div');
  modal.className = 'doc-modal-overlay';
  modal.innerHTML = `
    <div class="doc-modal-card delete">
      <div class="doc-modal-header delete">
        <div class="doc-modal-title">Confirmar exclusão</div>
      </div>

      <div class="doc-modal-body">
        <div class="doc-modal-text">
          Tem certeza que deseja excluir este registro? Esta ação não poderá ser desfeita.
        </div>

        <div class="doc-delete-file-box">
          <span class="doc-delete-file-name">${doc.arquivoNome}</span>
        </div>
      </div>

      <div class="doc-modal-footer">
        <button id="doc-delete-cancel" class="doc-modal-btn secondary-text">Cancelar</button>
        <button id="doc-delete-confirm" class="doc-modal-btn danger">Excluir</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('doc-delete-cancel').onclick = () => modal.remove();
  document.getElementById('doc-delete-confirm').onclick = () => {
    modal.remove();
    deleteDocumentById(docId);
  };
}

function deleteDocumentById(docId) {
  const index = window.documentsStore.findIndex(d => d.id === docId);
  if (index === -1) return;

  window.documentsStore.splice(index, 1);
  renderDeleteSuccessModal();
}

function renderDeleteSuccessModal() {
  const modal = document.createElement('div');
  modal.className = 'doc-modal-overlay';
  modal.innerHTML = `
    <div class="doc-modal-card success delete-success">
      <div class="doc-modal-success-icon"></div>
      <div class="doc-modal-title center">Documento excluído com sucesso</div>
      <div class="doc-modal-text center">O arquivo foi removido permanentemente.</div>
      <div class="doc-modal-actions center">
        <button id="doc-delete-success-ok" class="doc-modal-btn primary full">Entendido</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('doc-delete-success-ok').onclick = () => {
    modal.remove();
    renderDocuments();
  };
}
