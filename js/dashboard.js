function renderDashboard() {
    app.innerHTML = `
    <div class="dashboard-page">
        <aside class="sidebar">
            <div>
                <div class="jurisdoc-title">JurisDoc</div>
                <div class="sub-title">GESTÃO JURÍDICA INTELIGENTE</div>
            </div>
            
            <nav>
                <div class="nav-link active">Dashboard</div>
                <div class="nav-link">Documentos</div>
            </nav>
        </aside>

        <main class="main-canvas">
            <header class="header-top">
                <div>
                    <div class="title-text">Dashboard</div>
                    <div style="color:#586064">Resumo das atividades</div>
                </div>
                <div style="background:#E3E9EC; padding: 6px 12px; border-radius:4px; font-weight:700; font-size:12px;">10 DE MAIO, 2026</div>
            </header>

            <div class="bento-grid">
                <div class="stat-card"><div class="stat-value">12</div><div class="stat-label">Pendentes de Análise</div></div>
                <div class="stat-card"><div class="stat-value">05</div><div class="stat-label">Aguardando Complemento</div></div>
                <div class="stat-card"><div class="stat-value">08</div><div class="stat-label">Concluídos hoje</div></div>
            </div>

            <div class="table-container">
                <div class="table-row">
                    <div>CLIENTE</div><div>TIPO</div><div>DATA</div><div>STATUS</div><div>AÇÕES</div>
                </div>
                <div class="table-row">
                    <div>João Silva</div><div>Contratual</div><div>10/05/2026</div><div>Análise</div><div>...</div>
                </div>
            </div>
        </main>
    </div>`;
}
