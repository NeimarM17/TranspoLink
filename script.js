document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const truckIcon = document.getElementById('truck-icon');

    truckIcon.addEventListener('click', () => {
        // Animação do caminhão
        truckIcon.style.transform = sidebar.classList.contains('collapsed') 
            ? 'rotate(0deg) scale(1)' 
            : 'rotate(-20deg) scale(0.8)';
        
        // Alternar menu
        sidebar.classList.toggle('collapsed');
        
        // Ajustar grid
        document.documentElement.style.setProperty(
            '--sidebar-width', 
            sidebar.classList.contains('collapsed') ? '70px' : '250px'
        );
    });
});