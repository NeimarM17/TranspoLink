document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const truckIcon = document.getElementById('truck-icon');

    // Restaurar estado do menu
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState === 'true') {
        sidebar.classList.add('collapsed');
        document.documentElement.style.setProperty('--sidebar-width', '70px');
    }

    // Controle da Sidebar
    truckIcon.addEventListener('click', () => {
        const isCollapsed = sidebar.classList.toggle('collapsed');
        document.documentElement.style.setProperty(
            '--sidebar-width', 
            isCollapsed ? '70px' : '250px'
        );
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    });

    // Exportar para CSV
    document.getElementById('exportButton')?.addEventListener('click', () => {
        const table = document.querySelector('.data-table');
        const rows = Array.from(table.querySelectorAll('tr'));
        const csvContent = rows.map(row => 
            Array.from(row.querySelectorAll('th, td'))
                .map(cell => {
                    let text = cell.innerText;
                    if (cell.querySelector('.efficiency')) {
                        text = cell.querySelector('.efficiency').innerText;
                    }
                    return `"${text.replace(/"/g, '""')}"`;
                })
                .join(';')
        ).join('\n');

        const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `relatorio_${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
    });
});