async function comprarItem(itemId, quantidadeDesejada, nomeDiscord) {
    // Link exato do seu servidor seguro no Render com a rota /comprar
    const URL_DO_SERVIDOR = "https://astral-shop-backend.onrender.com/comprar";

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
            alert(resultado.mensagem); // "Pedido enviado com segurança para a staff!"
        } else {
            alert("Erro: " + resultado.erro);
        }
    } catch (erro) {
        alert("Erro ao conectar com o servidor de pagamentos.");
    }
}
