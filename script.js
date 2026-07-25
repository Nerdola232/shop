// ==========================================
// CONTROLE DA TELA DE CARREGAMENTO E ROLAGEM
// ==========================================
window.addEventListener('load', () => {
    const telaCarregamento = document.getElementById('loading-screen');
    
    // Força a liberação da rolagem no HTML e Body diretamente
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';

    // Esconde a tela de carregamento
    if (telaCarregamento) {
        telaCarregamento.style.opacity = '0';
        telaCarregamento.style.visibility = 'hidden';
        setTimeout(() => {
            telaCarregamento.style.display = 'none';
        }, 500);
    }
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
