let clientesSearchTerm = '';
let clienteSelecionadoId = null;

function getClientInitials(nome) {
  if (!nome) return 'CL';
  const parts = String(nome).trim().split(' ').filter(Boolean);
  return parts.slice(0, 2).map(p => p[0].toUpperCase()).join('');
}

function formatDocumentDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Data não informada';

  return `${date.toLocaleDateString('pt-BR')} • ${date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })}`;
}

function getClientesData() {
  if (Array.isArray(window.clientesData)) return window.clientesData;
  if (Array.isArray(window.mockClientes)) return window.mockClientes;
  if (Array.isArray(window.clientsData)) return window.clientsData;
  return [];
}

function getDocumentosData() {
  if (Array.isArray(window.documentosData)) return window.documentosData;
  if (Array.isArray(window.docsData)) return window.docsData;
  if (Array.isArray(window.mockDocumentos)) return window.mockDocumentos;
  return [];
}

function getDocumentosByCliente(cliente) {
  const documentos = getDocumentosData();
  if (!cliente) return [];

  return documentos.filter(doc => {
    if (doc.clienteId != null && cliente.id != null) {
      return String(doc.clienteId) === String(cliente.id);
    }

    return String(doc.clienteNome || '')
      .toLowerCase()
      .trim() === String(cliente.nome || '')
      .toLowerCase()
      .trim();
  });
}

/* mantém compatibilidade se algum lugar ainda chamar a função antiga */
function renderClientsList() {
  renderClientesPage();
}

function renderClientesPage() {
  const clientes = getClientesData();

  const filtrados = clientes.filter(cliente => {
    const texto = `${cliente.nome || ''} ${cliente.cpf || ''}`.toLowerCase();
    return texto.includes(clientesSearchTerm.toLowerCase());
  });

  if (!filtrados.length) {
    clienteSelecionadoId = null;
  } else if (
    !clienteSelecionadoId ||
    !filtrados.some(c => String(c.id) === String(clienteSelecionadoId))
  ) {
    clienteSelecionadoId = filtrados[0].id;
  }

  const clienteSelecionado =
    filtrados.find(c => String(c.id) === String(clienteSelecionadoId)) || null;

  const documentosCliente = clienteSelecionado
    ? getDocumentosByCliente(clienteSelecionado)
    : [];

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
                placeholder="Pesquisar cliente por nome ou CPF."
                value="${clientesSearchTerm}"
              />
              <span class="clientes-search-icon">🔎</span>
            </div>

            <div class="clientes-list">
              ${
                filtrados.length
                  ? filtrados.map(cliente => {
                      const docsCount = getDocumentosByCliente(cliente).length;

                      return `
                        <div class="cliente-row ${String(cliente.id) === String(clienteSelecionadoId) ? 'active' : ''}" data-cliente-id="${cliente.id}">
                          <div class="cliente-row-left">
                            <div class="cliente-avatar">${getClientInitials(cliente.nome)}</div>
                            <div class="cliente-meta">
                              <div class="cliente-nome">${cliente.nome || 'Cliente'}</div>
                              <div class="cliente-info">
                                <span class="cliente-info-item">${cliente.cpf || 'CPF não informado'}</span>
                                <span class="cliente-info-item">${docsCount} documento(s) vinculado(s)</span>
                              </div>
                            </div>
                          </div>
                          <div class="cliente-row-arrow">›</div>
                        </div>
                      `;
                    }).join('')
                  : `<div class="clientes-empty">Nenhum cliente encontrado para esta busca.</div>`
              }
            </div>

            <div class="clientes-pagination">
              <div class="clientes-pagination-info">
                Mostrando ${filtrados.length} cliente(s)
              </div>

              <div class="clientes-pagination-controls">
                <button type="button" class="clientes-page-btn">‹</button>
                <button type="button" class="clientes-page-btn active">1</button>
                <button type="button" class="clientes-page-btn">2</button>
                <button type="button" class="clientes-page-btn">3</button>
                <button type="button" class="clientes-page-btn">›</button>
              </div>
            </div>

            <button type="button" id="clientes-sync-erp" class="clientes-erp-btn">
              <span>⟳</span>
              <span>
                Sincronizar ERP
                <span class="clientes-erp-sub">Atualiza clientes e vínculos documentais</span>
              </span>
            </button>
          </div>
        </section>

        <aside class="clientes-right">
          <div class="clientes-side-card">
            <div class="clientes-side-title">Histórico documental do cliente</div>

            ${
              clienteSelecionado
                ? documentosCliente.length
                  ? `
                    <div class="clientes-docs">
                      ${documentosCliente.map((doc, index) => `
                        <div class="clientes-doc-item ${index === 0 ? 'primary' : ''}">
                          <div class="clientes-doc-title">${doc.titulo || doc.tipo || 'Documento salvo'}</div>
                          <div class="clientes-doc-date">${formatDocumentDate(doc.dataCadastro || doc.data || new Date())}</div>
                          <div class="clientes-doc-file">${doc.nomeArquivo || 'arquivo.pdf'}</div>
                        </div>
                      `).join('')}
                    </div>
                  `
                  : `<div class="clientes-empty">Este cliente ainda não possui documentos vinculados.</div>`
                : `<div class="clientes-empty">Selecione um cliente para visualizar os documentos.</div>`
            }
          </div>
        </aside>
      </div>
    </main>
  `;

  const app = document.getElementById('app');

  if (typeof renderDashboardShell === 'function') {
    app.innerHTML = renderDashboardShell('clientes', content);
  } else {
    app.innerHTML = content;
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

  document.querySelectorAll('.cliente-row').forEach(row => {
    row.addEventListener('click', () => {
      clienteSelecionadoId = row.dataset.clienteId;
      renderClientesPage();
    });
  });

  const syncBtn = document.getElementById('clientes-sync-erp');
  if (syncBtn) {
    syncBtn.addEventListener('click', () => {
      if (typeof renderSimpleSuccessModal === 'function') {
        renderSimpleSuccessModal(
          'Sincronização concluída',
          'Os dados do ERP foram atualizados com sucesso.'
        );
      } else {
        alert('Os dados do ERP foram atualizados com sucesso.');
      }
    });
  }
}
