// Remove o travamento da tela e oculta o loading assim que a página termina de carregar
window.addEventListener('load', () => {
    document.body.style.overflow = 'auto'; // Libera a rolagem da página
    const telaCarregamento = document.getElementById('loading-screen');
    if (telaCarregamento) {
        telaCarregamento.style.opacity = '0';
        telaCarregamento.style.visibility = 'hidden';
        setTimeout(() => {
            telaCarregamento.style.display = 'none';
        }, 500); // Espera a animação de fade sumir
    }
});

// Função principal de compra integrada ao seu servidor no Render
async function comprarItem(itemId, quantidadeDesejada, nomeDiscord) {
    // Link exato do seu servidor seguro no Render com a rota /comprar
    const URL_DO_SERVIDOR = "https://astral-shop-backend.onrender.com/comprar";

    // Validação básica antes de enviar
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
