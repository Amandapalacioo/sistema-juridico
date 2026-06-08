// Sidebar padronizada para manter o destaque da página selecionada
function renderSidebar(active) {
    return `
    <aside class="sidebar">
        <div class="logo-title">JurisDoc</div>
        <div style="font-size: 10px; color: #64748B; margin-top:4px;">GESTÃO JURÍDICA INTELIGENTE</div>
        
        <div class="nav-section">
            <div class="nav-link ${active === 'dashboard' ? 'nav-active' : ''}" onclick="renderDashboard()">Dashboard</div>
            <div class="nav-link ${active === 'docs' ? 'nav-active' : ''}" onclick="renderDocuments()">Documentos Jurídicos</div>
        </div>
    </aside>`;
}

function renderDashboard() {
    app.innerHTML = `
    <div class="dashboard-page">
        ${renderSidebar('dashboard')}
        <main class="main-canvas">
            <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                <div>
                    <h1>Olá, Amanda Palacio</h1>
                    <p>Resumo das atividades</p>
                </div>
                <div style="background:#E3E9EC; padding: 6px 12px; border-radius:4px;">10 DE MAIO, 2026</div>
            </div>

            <div class="bento-grid">
                <div class="stat-card"><h3>12</h3><p>Pendentes de Análise</p></div>
                <div class="stat-card"><h3>05</h3><p>Aguardando Complemento</p></div>
                <div class="stat-card"><h3>08</h3><p>Concluídos hoje</p></div>
            </div>
        </main>
    </div>`;
}

