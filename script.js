// Obtendo o contexto do canvas para desenhar o gráfico
const ctx = document.getElementById('gastosChart').getContext('2d');

// Inicializando os dados do gráfico
const chartData = {
    labels: [], // Meses (inicialmente vazio)
    datasets: [
        {
            label: 'Gastos Mensais',
            data: [], // Dados de gastos mensais (inicialmente vazio)
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Gastos Anuais',
            data: [], // Dados de gastos anuais (inicialmente vazio)
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
};

// Criando o gráfico com dados iniciais vazios
const gastosChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico (barras)
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Função para adicionar novos dados ao gráfico
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Captura os dados inseridos pelo usuário
    const month = document.getElementById('month').value;
    const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
    const annualExpenses = parseFloat(document.getElementById('annualExpenses').value);

    // Adiciona os dados ao gráfico
    chartData.labels.push(month); // Adiciona o mês
    chartData.datasets[0].data.push(monthlyExpenses); // Adiciona os gastos mensais
    chartData.datasets[1].data.push(annualExpenses); // Adiciona os gastos anuais

    // Atualiza o gráfico com os novos dados
    gastosChart.update();

    // Limpa os campos do formulário
    document.getElementById('month').value = '';
    document.getElementById('monthlyExpenses').value = '';
    document.getElementById('annualExpenses').value = '';
});
