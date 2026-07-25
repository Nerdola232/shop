// ==========================================
// CONTROLE DA TELA DE CARREGAMENTO E ROLAGEM
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const telaCarregamento = document.getElementById('loading-screen');

    function liberarInterface() {
        // 1. Libera a rolagem do body perfeitamente
        body.style.overflow = 'auto';
        
        // 2. Esconde a tela de carregamento com fade suave
        if (telaCarregamento) {
            telaCarregamento.style.opacity = '0';
            telaCarregamento.style.visibility = 'hidden';
            setTimeout(() => {
                telaCarregamento.style.display = 'none';
            }, 500);
        }
    }

    // Segurança de 8 segundos caso algo demore a carregar
    const timerSeguranca = setTimeout(() => {
        liberarInterface();
    }, 8000);

    // Libera assim que tudo carregar por completo
    window.addEventListener('load', () => {
        clearTimeout(timerSeguranca);
        liberarInterface();
    });
});


// ==========================================
// FUNÇÃO DE COMPRA (INTEGRADA AO RENDER)
// ==========================================
async function comprarItem(itemId, quantidadeDesejada, nomeDiscord) {
    const URL_DO_SERVIDOR = "https://astral-shop-backend.onrender.com/comprar";

    if (!quantidadeDesejada || quantidadeDesejada <= 0) {
        alert("Por favor, selecione uma quantidade válida.");
        return;
    }

    try {
        const resposta = await fetch(URL_DO_SERVIDOR, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                itemId: itemId,
                quantidade: quantidadeDesejada,
                discordUser: nomeDiscord
            })
        });

        const resultado = await resposta.json();

        if (resposta.ok) {
            alert(resultado.mensagem || "Pedido enviado com segurança para a staff!");
        } else {
            alert("Erro: " + (resultado.erro || "Não foi possível realizar a compra."));
        }
    } catch (erro) {
        console.error("Erro de conexão:", erro);
        alert("Erro ao conectar com o servidor de pagamentos.");
    }
}
