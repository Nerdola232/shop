// ==========================================
// CONTROLE DA TELA DE CARREGAMENTO E ROLAGEM
// ==========================================
window.addEventListener('load', () => {
    const telaCarregamento = document.getElementById('loading-screen');
    
    // Força o desbloqueio total da rolagem no HTML e Body
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';

    // Se a tela de carregamento existir, remove ela do caminho
    if (telaCarregamento) {
        telaCarregamento.style.opacity = '0';
        telaCarregamento.style.visibility = 'hidden';
        telaCarregamento.style.pointerEvents = 'none'; // Impede que ela bloqueie toques na tela
        
        setTimeout(() => {
            telaCarregamento.style.display = 'none';
        }, 300);
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
