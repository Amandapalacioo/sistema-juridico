if (typeof window.documentsStore === 'undefined') {
  window.documentsStore = [
    { id: 1, clienteId: 1, clienteNome: 'Larissa Souza', clienteIniciais: 'LS', avatar: 'avatar-1', tipo: 'Carta Convite', data: '2026-06-08', status: 'Pendente', recebimento: 'E-mail', observacoes: '', arquivoNome: 'larissa-carta-convite.pdf', arquivoUrl: '', analise: null, processo: '0801234-56.2026.5.09.0012' },
    { id: 2, clienteId: 2, clienteNome: 'João Fernando Pereira', clienteIniciais: 'JP', avatar: 'avatar-2', tipo: 'Procuração', data: '2026-06-08', status: 'Análise', recebimento: 'Portal', observacoes: '', arquivoNome: 'joao-procuracao.pdf', arquivoUrl: '', analise: null, processo: '0802234-56.2026.5.09.0012' },
    { id: 3, clienteId: 3, clienteNome: 'Odete Maria da Silva', clienteIniciais: 'OS', avatar: 'avatar-3', tipo: 'CNIS', data: '2026-06-07', status: 'Complemento', recebimento: 'WhatsApp', observacoes: '', arquivoNome: 'odete-cnis.pdf', arquivoUrl: '', analise: null, processo: '0803234-56.2026.5.09.0012' },
    { id: 4, clienteId: 4, clienteNome: 'Tiago Oliveira', clienteIniciais: 'TO', avatar: 'avatar-4', tipo: 'Declaração de Hipossuficiência', data: '2026-06-07', status: 'Pendente', recebimento: 'E-mail', observacoes: '', arquivoNome: 'tiago-hipossuficiencia.pdf', arquivoUrl: '', analise: null, processo: '0804234-56.2026.5.09.0012' },
    { id: 5, clienteId: 5, clienteNome: 'Amanda Castro', clienteIniciais: 'AC', avatar: 'avatar-1', tipo: 'RG', data: '2026-06-06', status: 'Concluído', recebimento: 'Portal', observacoes: '', arquivoNome: 'amanda-rg.jpg', arquivoUrl: '', analise: { pertinencia: 'Essencial', fase: 'Instrução', notas: 'Documento legível e compatível com o cadastro.', ultimaAtualizacao: '06 de maio 2026, 09:12' }, processo: '0805234-56.2026.5.09.0012' },
    { id: 6, clienteId: 6, clienteNome: 'Bruno Martins', clienteIniciais: 'BM', avatar: 'avatar-2', tipo: 'CPF', data: '2026-06-06', status: 'Análise', recebimento: 'Presencial', observacoes: '', arquivoNome: 'bruno-cpf.png', arquivoUrl: '', analise: null, processo: '0806234-56.2026.5.09.0012' },
    { id: 7, clienteId: 7, clienteNome: 'Camila Rocha', clienteIniciais: 'CR', avatar: 'avatar-3', tipo: 'Comprovante de Residência', data: '2026-06-05', status: 'Pendente', recebimento: 'E-mail', observacoes: '', arquivoNome: 'camila-residencia.pdf', arquivoUrl: '', analise: null, processo: '0807234-56.2026.5.09.0012' },
    { id: 8, clienteId: 8, clienteNome: 'Daniel Lima', clienteIniciais: 'DL', avatar: 'avatar-4', tipo: 'Contrato Social', data: '2026-06-05', status: 'Concluído', recebimento: 'Portal', observacoes: '', arquivoNome: 'daniel-contrato-social.pdf', arquivoUrl: '', analise: { pertinencia: 'Complementar', fase: 'Instrução', notas: 'Documento auxiliar para composição do dossiê.', ultimaAtualizacao: '06 de maio 2026, 09:12' }, processo: '0808234-56.2026.5.09.0012' },
    { id: 9, clienteId: 9, clienteNome: 'Eduarda Nunes', clienteIniciais: 'EN', avatar: 'avatar-1', tipo: 'Petição Inicial', data: '2026-06-04', status: 'Análise', recebimento: 'E-mail', observacoes: '', arquivoNome: 'eduarda-peticao.pdf', arquivoUrl: '', analise: null, processo: '0809234-56.2026.5.09.0012' },
    { id: 10, clienteId: 10, clienteNome: 'Felipe Gomes', clienteIniciais: 'FG', avatar: 'avatar-2', tipo: 'Laudo Médico', data: '2026-06-04', status: 'Complemento', recebimento: 'WhatsApp', observacoes: '', arquivoNome: 'felipe-laudo.pdf', arquivoUrl: '', analise: null, processo: '0810234-56.2026.5.09.0012' },
    { id: 11, clienteId: 11, clienteNome: 'Gabriela Teixeira', clienteIniciais: 'GT', avatar: 'avatar-3', tipo: 'CTPS', data: '2026-06-03', status: 'Pendente', recebimento: 'Portal', observacoes: '', arquivoNome: 'gabriela-ctps.pdf', arquivoUrl: '', analise: null, processo: '0811234-56.2026.5.09.0012' },
    { id: 12, clienteId: 12, clienteNome: 'Henrique Alves', clienteIniciais: 'HA', avatar: 'avatar-4', tipo: 'Holerite', data: '2026-06-03', status: 'Concluído', recebimento: 'E-mail', observacoes: '', arquivoNome: 'henrique-holerite.pdf', arquivoUrl: '', analise: { pertinencia: 'Essencial', fase: 'Instrução', notas: 'Comprovação suficiente para a etapa atual.', ultimaAtualizacao: '06 de maio 2026, 09:12' }, processo: '0812234-56.2026.5.09.0012' },
    { id: 13, clienteId: 13, clienteNome: 'Isabela Moraes', clienteIniciais: 'IM', avatar: 'avatar-1', tipo: 'Extrato Bancário', data: '2026-06-02', status: 'Análise', recebimento: 'Portal', observacoes: '', arquivoNome: 'isabela-extrato.pdf', arquivoUrl: '', analise: null, processo: '0813234-56.2026.5.09.0012' },
    { id: 14, clienteId: 14, clienteNome: 'José Ricardo', clienteIniciais: 'JR', avatar: 'avatar-2', tipo: 'Comprovante INSS', data: '2026-06-02', status: 'Pendente', recebimento: 'WhatsApp', observacoes: '', arquivoNome: 'jose-inss.pdf', arquivoUrl: '', analise: null, processo: '0814234-56.2026.5.09.0012' },
    { id: 15, clienteId: 15, clienteNome: 'Karen Dias', clienteIniciais: 'KD', avatar: 'avatar-3', tipo: 'Ata Notarial', data: '2026-06-01', status: 'Complemento', recebimento: 'Presencial', observacoes: '', arquivoNome: 'karen-ata-notarial.pdf', arquivoUrl: '', analise: null, processo: '0815234-56.2026.5.09.0012' },
    { id: 16, clienteId: 16, clienteNome: 'Lucas Prado', clienteIniciais: 'LP', avatar: 'avatar-4', tipo: 'Certidão de Nascimento', data: '2026-06-01', status: 'Concluído', recebimento: 'E-mail', observacoes: '', arquivoNome: 'lucas-nascimento.pdf', arquivoUrl: '', analise: { pertinencia: 'Essencial', fase: 'Instrução', notas: 'Documento principal conferido e validado.', ultimaAtualizacao: '06 de maio 2026, 09:12' }, processo: '0816234-56.2026.5.09.0012' },
    { id: 17, clienteId: 17, clienteNome: 'Marina Pires', clienteIniciais: 'MP', avatar: 'avatar-1', tipo: 'Certidão de Casamento', data: '2026-06-08', status: 'Pendente', recebimento: 'Portal', observacoes: '', arquivoNome: 'marina-casamento.pdf', arquivoUrl: '', analise: null, processo: '0817234-56.2026.5.09.0012' },
    { id: 18, clienteId: 18, clienteNome: 'Nathan Vieira', clienteIniciais: 'NV', avatar: 'avatar-2', tipo: 'Documentos Trabalhistas', data: '2026-06-07', status: 'Análise', recebimento: 'WhatsApp', observacoes: '', arquivoNome: 'nathan-trabalhistas.pdf', arquivoUrl: '', analise: null, processo: '0818234-56.2026.5.09.0012' },
    { id: 19, clienteId: 19, clienteNome: 'Olivia Santana', clienteIniciais: 'OS', avatar: 'avatar-3', tipo: 'Comprovante de Endereço', data: '2026-06-06', status: 'Pendente', recebimento: 'E-mail', observacoes: '', arquivoNome: 'olivia-endereco.pdf', arquivoUrl: '', analise: null, processo: '0819234-56.2026.5.09.0012' },
    { id: 20, clienteId: 20, clienteNome: 'Paulo Henrique', clienteIniciais: 'PH', avatar: 'avatar-4', tipo: 'Carteira de Trabalho', data: '2026-06-05', status: 'Concluído', recebimento: 'Portal', observacoes: '', arquivoNome: 'paulo-ctps.pdf', arquivoUrl: '', analise: { pertinencia: 'Complementar', fase: 'Instrução', notas: 'Utilizado para cruzamento de dados do vínculo.', ultimaAtualizacao: '06 de maio 2026, 09:12' }, processo: '0820234-56.2026.5.09.0012' },
    { id: 21, clienteId: 21, clienteNome: 'Queila Ramos', clienteIniciais: 'QR', avatar: 'avatar-1', tipo: 'Procuração Particular', data: '2026-06-04', status: 'Análise', recebimento: 'E-mail', observacoes: '', arquivoNome: 'queila-procuracao.pdf', arquivoUrl: '', analise: null, processo: '0821234-56.2026.5.09.0012' },
    { id: 22, clienteId: 22, clienteNome: 'Rafael Melo', clienteIniciais: 'RM', avatar: 'avatar-2', tipo: 'Petição Intermediária', data: '2026-06-03', status: 'Complemento', recebimento: 'WhatsApp', observacoes: '', arquivoNome: 'rafael-peticao.pdf', arquivoUrl: '', analise: null, processo: '0822234-56.2026.5.09.0012' },
    { id: 23, clienteId: 23, clienteNome: 'Sandra Luz', clienteIniciais: 'SL', avatar: 'avatar-3', tipo: 'Sentença', data: '2026-06-02', status: 'Concluído', recebimento: 'Portal', observacoes: '', arquivoNome: 'sandra-sentenca.pdf', arquivoUrl: '', analise: { pertinencia: 'Essencial', fase: 'Julgamento', notas: 'Sentença consolidada e apta para uso na etapa posterior.', ultimaAtualizacao: '06 de maio 2026, 09:12' }, processo: '0823234-56.2026.5.09.0012' },
    { id: 24, clienteId: 24, clienteNome: 'Tatiane Costa', clienteIniciais: 'TC', avatar: 'avatar-4', tipo: 'RG Atualizado', data: '2026-06-01', status: 'Pendente', recebimento: 'Presencial', observacoes: '', arquivoNome: 'tatiane-rg.pdf', arquivoUrl: '', analise: null, processo: '0824234-56.2026.5.09.0012' }
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
  clienteId: '',
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
            <input
              id="docs-global-search"
              class="topbar-search-input"
              type="text"
              placeholder="Buscar no JurisDoc..."
              value="${documentosSearchTerm}"
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
                  <input
                    id="docs-local-search"
                    type="text"
                    placeholder="Pesquisar..."
                    value="${documentosSearchTerm}"
                  />
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
                    <label>Notas Técnicas</>
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
                      <option value="Complemento" ${documentoDraft.statusInicial === 'o' ? 'selected' : ''}>Complemento</option>
                      <option value="Concluído" ${documentoDraft.statusInicial === 'Concluído' ? 'selected' : ''}>Concluído</option>
                    </select>
                  </div>

                  <div class="cadastro-actions">
                    <button id="btn-confirmar-salvar" class="cadastro-save-btn">Salvar Cadastro</>
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
        </footer
