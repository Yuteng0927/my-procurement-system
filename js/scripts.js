function showDashboard(dashboardId) {
    const dashboards = document.querySelectorAll('.dashboard');
    dashboards.forEach(dashboard => {
        dashboard.classList.remove('active');
    });
    document.getElementById(dashboardId).classList.add('active');
}

// Initially show the Culture dashboard
document.addEventListener('DOMContentLoaded', () => {
    showDashboard('culture-dashboard');
});
