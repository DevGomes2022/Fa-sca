async function fetchDollarRate() {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
      const data = await response.json();
      const dollarRate = data.USDBRL.bid;

      document.getElementById('dollar-rate').innerText = `R$ ${parseFloat(dollarRate).toFixed(2)}`;
    } catch (error) {
      document.getElementById('dollar-rate').innerText = 'Erro ao carregar a cotação';
      console.error('Erro ao buscar a cotação:', error);
    }
  }

  // Chama a função quando a página carrega
  fetchDollarRate();
  // Atualiza a cada 5 minutos (opcional)
  setInterval(fetchDollarRate, 5 * 60 * 1000);