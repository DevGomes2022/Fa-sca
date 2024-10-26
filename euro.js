async function fetchEuroRate() {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL');
      const data = await response.json();
      const euroRate = data.EURBRL.bid;

      document.getElementById('euro-rate').innerText = `R$ ${parseFloat(euroRate).toFixed(2)}`;
    } catch (error) {
      document.getElementById('euro-rate').innerText = 'Erro ao carregar a cotação';
      console.error('Erro ao buscar a cotação:', error);
    }
  }

  // Chama a função quando a página carrega
  fetchEuroRate();
  // Atualiza a cada 5 minutos (opcional)
  setInterval(fetchEuroRate, 5 * 60 * 1000);