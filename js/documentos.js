function renderDocuments() {
    app.innerHTML = `
    <div class="dashboard-page">
        ${renderSidebar('docs')}
        <main class="main-canvas">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2>Documentos Jurídicos</h2>
                <button class="btn-primary" onclick="renderCadastro()">+ Novo Cadastro</button>
            </div>
            <div class="table-container" style="margin-top:32px; padding:20px;">
                <p>Lista de Documentos (Tabela em construção)</p>
            </div>
        </main>
    </div>`;
}

function renderCadastro() {
    app.innerHTML = `
    <div class="dashboard-page">
        ${renderSidebar('docs')}
        <main class="main-canvas">
            <h2>Novo Cadastro de Documento</h2>
            <div class="form-grid">
                <div class="card-cadastro">
                    <div class="input-group">
                        <label class="input-label">CLIENTE / PROCESSO *</label>
                        <input type="text" class="form-input" placeholder="Pesquisar cliente...">
                    </div>
                    <label class="input-label">ANEXAR DOCUMENTO</label>
                    <div class="upload-zone" onclick="document.getElementById('file-upload').click()">
                        Clique ou arraste Arquivos (PDF, PNG, JPG)
                        <input type="file" id="file-upload" style="display:none">
                    </div>
                </div>
                <div class="card-cadastro">
                    <h3>Fluxo</h3>
                    <button class="btn-primary" style="width:100%; margin-top:20px;" onclick="openSaveConfirmModal()">SALVAR</button>
                    <button class="btn-secondary" style="width:100%; margin-top:10px;" onclick="openCancelModal()">CANCELAR</button>
                </div>
            </div>
        </main>
    </div>`;
}

function openSaveConfirmModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
    <div class="modal-card">
        <h3>Registrar documento?</h3>
        <button class="btn-primary" onclick="renderSuccess()">Confirmar Salvamento</button>
        <button class="btn-secondary" onclick="this.closest('.modal-overlay').remove()">Voltar</button>
    </div>`;
    document.body.appendChild(modal);
}

function renderSuccess() {
    document.querySelector('.modal-overlay').remove();
    app.innerHTML = `
    <div class="dashboard-page">
        ${renderSidebar('docs')}
        <main class="main-canvas" style="display:flex; justify-content:center; align-items:center;">
            <div class="modal-card"><h2>Registrado com Sucesso!</h2>
            <button class="btn-primary" onclick="renderDocuments()">OK</button></div>
        </main>
    </div>`;
}

function renderDocuments() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div style="padding:40px;font-family:Manrope,sans-serif">
      <h1>Documentos</h1>
      <p>Página de documentos ainda será implementada.</p>
      <button onclick="renderDashboard()">Voltar</button>
    </div>
  `;
}


