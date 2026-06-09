if (typeof window.documentsStore === 'undefined') {
  window.documentsStore = [
    {
      id: 1,
      clienteId: 1,
      clienteNome: 'Larissa Souza',
      clienteIniciais: 'LS',
      avatar: 'avatar-1',
      tipo: 'Carta Convite',
      data: '2026-06-08',
      status: 'Pendente',
      recebimento: 'E-mail',
      observacoes: '',
      arquivoNome: 'larissa-carta-convite.pdf'
    },
    {
      id: 2,
      clienteId: 2,
      clienteNome: 'João Fernando Pereira',
      clienteIniciais: 'JP',
      avatar: 'avatar-2',
      tipo: 'Procuração',
      data: '2026-06-08',
      status: 'Análise',
      recebimento: 'Portal',
      observacoes: '',
      arquivoNome: 'joao-procuracao.pdf'
    },
    {
      id: 3,
      clienteId: 3,
      clienteNome: 'Odete Maria da Silva',
      clienteIniciais: 'OS',
      avatar: 'avatar-3',
      tipo: 'CNIS',
      data: '2026-06-07',
      status: 'Complemento',
      recebimento: 'WhatsApp',
      observacoes: '',
      arquivoNome: 'odete-cnis.pdf'
    },
    {
      id: 4,
      clienteId: 4,
      clienteNome: 'Tiago Oliveira',
      clienteIniciais: 'TO',
      avatar: 'avatar-4',
      tipo: 'Declaração de Hipossuficiência',
      data: '2026-06-07',
      status: 'Pendente',
      recebimento: 'E-mail',
      observacoes: '',
      arquivoNome: 'tiago-hipossuficiencia.pdf'
    },
    {
      id: 5,
      clienteId: 5,
      clienteNome: 'Amanda Castro',
      clienteIniciais: 'AC',
      avatar: 'avatar-1',
      tipo: 'RG',
      data: '2026-06-06',
      status: 'Concluído',
      recebimento: 'Portal',
      observacoes: '',
      arquivoNome: 'amanda-rg.jpg'
    },
    {
      id: 6,
      clienteId: 6,
      clienteNome: 'Bruno Martins',
      clienteIniciais: 'BM',
      avatar: 'avatar-2',
      tipo: 'CPF',
      data: '2026-06-06',
      status: 'Análise',
      recebimento: 'Presencial',
      observacoes: '',
      arquivoNome: 'bruno-cpf.png'
    },
    {
      id: 7,
      clienteId: 7,
      clienteNome: 'Camila Rocha',
      clienteIniciais: 'CR',
      avatar: 'avatar-3',
      tipo: 'Comprovante de Residência',
      data: '2026-06-05',
      status: 'Pendente',
      recebimento: 'E-mail',
      observacoes: '',
      arquivoNome: 'camila-residencia.pdf'
    },
    {
      id: 8,
      clienteId: 8,
      clienteNome: 'Daniel Lima',
      clienteIniciais: 'DL',
      avatar: 'avatar-4',
      tipo: 'Contrato Social',
      data: '2026-06-05',
      status: 'Concluído',
      recebimento: 'Portal',
      observacoes: '',
      arquivoNome: 'daniel-contrato-social.pdf'
    },
    {
      id: 9,
      clienteId: 9,
      clienteNome: 'Eduarda Nunes',
      clienteIniciais: 'EN',
      avatar: 'avatar-1',
      tipo: 'Petição Inicial',
      data: '2026-06-04',
      status: 'Análise',
      recebimento: 'E-mail',
      observacoes: '',
      arquivoNome: 'eduarda-peticao.pdf'
    },
    {
      id: 10,
      clienteId: 10,
      clienteNome: 'Felipe Gomes',
      clienteIniciais: 'FG',
      avatar: 'avatar-2',
      tipo: 'Laudo Médico',
      data: '2026-06-04',
      status: 'Complemento',
      recebimento: 'WhatsApp',
      observacoes: '',
      arquivoNome: 'felipe-laudo.pdf'
    }
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
  arquivo: null
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

function parseDateBRToISO(value) {
  if (!value) return '';
  if (value.includes('-')) return value;
  const parts = value.split('/');
  if (parts.length !== 3) return '';
  return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
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
      doc.arquivoNome.toLowerCase().includes(documentosSearchTerm.toLowerCase());

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
      <div class="documents-empty-state">
        <div class="documents-empty-title">Nenhum resultado encontrado</div>
        <div class="documents-empty-text">
          Não encontramos registros com os filtros selecionados.
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
        <button class="documents-action-btn" data-doc-action="view" data-doc-id="${doc.id}">Ver</button>
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
              <div>
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
      const id = Number(el.dataset.docId);
      const doc = window.documentsStore.find(d => d.id === id);
      if (!doc) return;
      alert(`Documento: ${doc.tipo}\nCliente: ${doc.clienteNome}\nArquivo: ${doc.arquivoNome}`);
    });
  });

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
              <div>
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
                      <input id="doc-cliente-search" list="clientes-lista" type="text" placeholder="Pesquisar cliente..." value="${documentoDraft.clienteNome}">
                      <datalist id="clientes-lista">
                        ${clientes.map(c => `<option value="${c.nome}"></option>`).join('')}
                      </datalist>
                      <small>Digite o nome de um cliente já sincronizado com o ERP</small>
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
                        <button class="recebimento-btn ${documentoDraft.recebimento === 'E-mail' ? 'active' : ''}" data-recebimento="E-mail">E-mail</button>
                        <button class="recebimento-btn ${documentoDraft.recebimento === 'Portal' ? 'active' : ''}" data-recebimento="Portal">Portal</button>
                        <button class="recebimento-btn ${documentoDraft.recebimento === 'WhatsApp' ? 'active' : ''}" data-recebimento="WhatsApp">WhatsApp</button>
                        <button class="recebimento-btn ${documentoDraft.recebimento === 'Presencial' ? 'active' : ''}" data-recebimento="Presencial">Presencial</button>
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

                <div class="cadastro-card">
                  <div class="cadastro-card-title">Arquivo</div>
                  <div class="cadastro-upload-box">
                    <input id="doc-arquivo" type="file" accept=".pdf,.png,.jpg,.jpeg">
                    <div id="doc-arquivo-nome" class="cadastro-upload-name">
                      ${documentoDraft.arquivo ? documentoDraft.arquivo.name : 'Nenhum arquivo selecionado'}
                    </div>
                  </div>
                </div>
              </div>

              <div class="cadastro-right">
                <div class="cadastro-side-card">
                  <div class="cadastro-side-title">Fluxo de Trabalho</div>

                  <div class="cadastro-side-field">
                    <label>Status Inicial</label>
                    <select id="doc-status">
                      <option value="Pendente">Pendente</option>
                      <option value="Análise">Análise</option>
                      <option value="Complemento">Complemento</option>
                      <option value="Concluído">Concluído</option>
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

  attachDocumentNewEvents();
}

function attachDocumentNewEvents() {
  const fileInput = document.getElementById('doc-arquivo');
  const fileName = document.getElementById('doc-arquivo-nome');

  if (fileInput) {
    fileInput.addEventListener('change', () => {
      const file = fileInput.files && fileInput.files[0] ? fileInput.files[0] : null;
      documentoDraft.arquivo = file;
      if (fileName) fileName.textContent = file ? file.name : 'Nenhum arquivo selecionado';
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
      renderDocumentCancelModal();
    });
  }
}

function renderDocumentSaveConfirmModal() {
  const modal = document.createElement('div');
  modal.className = 'doc-modal-overlay';
  modal.innerHTML = `
    <div class="doc-modal-card">
      <div class="doc-modal-title">Confirmar salvamento</div>
      <div class="doc-modal-text">Deseja salvar este cadastro de documento?</div>
      <div class="doc-modal-actions">
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
    status: 'Pendente',
    recebimento: documentoDraft.recebimento,
    observacoes: documentoDraft.observacoes,
    arquivoNome: documentoDraft.arquivo.name
  });

  documentoDraft = {
    clienteId: '',
    clienteNome: '',
    tipo: '',
    data: '',
    recebimento: '',
    observacoes: '',
    arquivo: null
  };

  renderDocumentSavedSuccess();
}

function renderDocumentSavedSuccess() {
  const modal = document.createElement('div');
  modal.className = 'doc-modal-overlay';
  modal.innerHTML = `
    <div class="doc-modal-card success">
      <div class="doc-modal-title">Registrado com Sucesso</div>
      <div class="doc-modal-text">O documento foi cadastrado com sucesso no sistema.</div>
      <div class="doc-modal-actions">
        <button id="doc-success-list" class="doc-modal-btn secondary">Ir para lista</button>
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
      <div class="doc-modal-title">Descartar alterações</div>
      <div class="doc-modal-text">Você possui alterações não salvas. Deseja realmente sair sem salvar?</div>
      <div class="doc-modal-actions">
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
      clienteId: '',
      clienteNome: '',
      tipo: '',
      data: '',
      recebimento: '',
      observacoes: '',
      arquivo: null
    };
    renderDocuments();
  };
}
