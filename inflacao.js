async function fetchInflacaoRate() {
    try {
      const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/1?formato=json');
      const data = await response.json();
      
      // Extrai a inflação mais recente (IPCA)
      const inflacaoAtual = data[0].valor;

      document.getElementById('inflacao-rate').innerText = `Inflação atual (IPCA): ${parseFloat(inflacaoAtual).toFixed(2)}%`;
    } catch (error) {
      document.getElementById('inflacao-rate').innerText = 'Erro ao carregar a inflação';
      console.error('Erro ao buscar a inflação:', error);
    }
  }

  // Chama a função quando a página carrega
  fetchInflacaoRate();