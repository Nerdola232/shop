async function comprarItem(itemId, quantidadeDesejada, nomeDiscord) {
    // 1. Mensagem de aviso de segurança
    const termoAceito = confirm(
        "⚠️ AVISO IMPORTANTE DE SEGURANÇA ⚠️\n\n" +
        "• Assim que receber os dados, altere a SENHA e o E-MAIL imediatamente.\n" +
        "• Grave a tela do processo para sua própria segurança.\n" +
        "• NÃO realizamos reembolso caso você alegue 'que não gostou da conta'.\n\n" +
        "Clique em 'OK' para concordar e prosseguir."
    );

    if (!termoAceito) return;

    // 2. Escolha do pagamento restrito e seguro
    const pagamentoEscolhido = prompt(
        "Escolha a forma de pagamento (digite o número):\n\n" +
        "1 - Gift Card\n" +
        "2 - Bitcoin\n" +
        "3 - Outras moedas não rastreáveis"
    );

    if (!pagamentoEscolhido) return;

    let metodoStr = "";
    if (pagamentoEscolhido === "1") {
        metodoStr = "Gift Card";
    } else if (pagamentoEscolhido === "2") {
        metodoStr = "Bitcoin";
    } else if (pagamentoEscolhido === "3") {
        metodoStr = "Outras moedas não rastreáveis";
    } else {
        alert("Opção inválida! Escolha 1, 2 ou 3.");
        return;
    }

    // 3. Nova opção extra salva (Ex: Nickname no jogo, ID ou contato)
    const opcaoExtra = prompt("Digite a sua informação adicional (ex: seu Nick no jogo ou ID para entrega):");
    if (!opcaoExtra) return;

    const URL_DO_SERVIDOR = "https://astral-shop-backend.onrender.com/comprar";

    try {
        // 4. Envia tudo para o backend disparar no Webhook do Discord
        const resposta = await fetch(URL_DO_SERVIDOR, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                itemId: itemId,
                quantidade: quantidadeDesejada,
                discordUser: nomeDiscord,
                formaPagamento: metodoStr,
                infoExtra: opcaoExtra
            })
        });

        const resultado = await resposta.json();

        if (resposta.ok) {
            const linkServidor = "https://discord.gg/SEU_LINK";
            
            const irParaServidor = confirm(
                "✅ Pedido enviado com sucesso para a staff!\n\n" +
                `Método: ${metodoStr}\n` +
                `Info salva: ${opcaoExtra}\n\n` +
                "Clique em 'OK' para entrar no servidor do Discord e finalizar."
            );

            if (irParaServidor) {
                window.location.href = linkServidor;
            }
        } else {
            alert("Erro: " + (resultado.erro || "Não foi possível realizar a compra."));
        }
    } catch (erro) {
        console.error("Erro de conexão:", erro);
        alert("Erro ao conectar com o servidor de pagamentos.");
    }
}
