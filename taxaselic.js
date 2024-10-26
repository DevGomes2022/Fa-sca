async function fetchSelicRate() {
    try {
      const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json');
      const data = await response.json();
      
      // Extrai a taxa Selic mais recente
      const selicRate = data[0].valor;

      document.getElementById('selic-rate').innerText = `${parseFloat(selicRate).toFixed(2)}%`;
    } catch (error) {
      document.getElementById('selic-rate').innerText = 'Erro ao carregar a taxa Selic';
      console.error('Erro ao buscar a taxa Selic:', error);
    }
  }

  // Chama a função quando a página carrega
  fetchSelicRate();