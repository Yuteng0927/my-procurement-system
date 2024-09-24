// Function to show the selected table in the Inventory section
function showTable(tableId) {
    const tables = document.querySelectorAll('.inventory-table');
    tables.forEach(table => {
        table.style.display = 'none';
    });
    document.getElementById(tableId).style.display = 'block';
}

// Function to show the selected dashboard in the Spend Dashboard section
function showDashboard(dashboardId) {
    const dashboards = document.querySelectorAll('.dashboard');
    dashboards.forEach(dashboard => {
        dashboard.style.display = 'none';
    });
    document.getElementById(dashboardId).style.display = 'block';
}

// Initially show the Culture dashboard on the Spend Dashboard page or Culture table on Inventory page
document.addEventListener('DOMContentLoaded', () => {
    const spendDashboard = document.querySelectorAll('.dashboard');
    if (spendDashboard.length) {
        // If it's the Spend Dashboard page
        showDashboard('culture-dashboard');
        createCharts();
    } else {
        // If it's the Inventory page
        showTable('culture-table');
    }
});

// Create pie charts for the Spend Dashboard
function createCharts() {
    // Pie Chart Data
    const pieLabels = ['Reagents', 'Consumables', 'Equipment'];
    const culturePieData = [40, 35, 25]; 
    const biopPieData = [30, 40, 30];
    const qcPieData = [25, 45, 30];
    const operationsPieData = [35, 30, 35];

    // Create Pie Chart for Culture
    createPieChart('culturePieChart', pieLabels, culturePieData);

    // Create Pie Chart for Biop
    createPieChart('biopPieChart', pieLabels, biopPieData);

    // Create Pie Chart for QC
    createPieChart('qcPieChart', pieLabels, qcPieData);

    // Create Pie Chart for Operations
    createPieChart('operationsPieChart', pieLabels, operationsPieData);
}

// Function to create Pie Chart for the Spend Dashboard
function createPieChart(canvasId, labels, data) {
    const canvas = document.getElementById(canvasId);

    if (!canvas) {
        console.error(`Canvas with id ${canvasId} not found.`);
        return;
    }

    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
        console.error(`Failed to get context for canvas: ${canvasId}`);
        return;
    }

    // Create the pie chart
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',   // Reagents
                    'rgba(54, 162, 235, 0.9)',   // Consumables
                    'rgba(255, 206, 86, 0.9)'    // Equipment
                ]
            }]
        },
        options: {
            maintainAspectRatio: false
        }
    });
    console.log(`Pie chart created for ${canvasId}`);
}
