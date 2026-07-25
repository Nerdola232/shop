app.post('/comprar', async (req, res) => {
    try {
        const { itemId, quantidade, discordUser, formaPagamento, infoExtra } = req.body;

        if (!itemId || !quantidade || !discordUser || !formaPagamento) {
            return res.status(400).json({ erro: "Dados incompletos para a compra." });
        }

        const mensagemDiscord = {
            embeds: [{
                title: "🚨 NOVO PEDIDO DE COMPRA REALIZADO! 🚨",
                color: 16711680,
                fields: [
                    { name: "👤 Cliente (Discord)", value: `\`${discordUser}\``, inline: false },
                    { name: "📦 Item Desejado ID", value: `\`${itemId}\``, inline: true },
                    { name: "🔢 Quantidade", value: `\`${quantidade}\``, inline: true },
                    { name: "💳 Forma de Pagamento", value: `\`${formaPagamento}\``, inline: false },
                    { name: "📝 Informação Adicional / Salva", value: `\`${infoExtra || "Nenhuma"}\``, inline: false },
                    { name: "⚠️ TERMOS E AVISOS ACEITOS:", value: "• Cliente ciente de alterar senha e e-mail imediatamente.\n• Sem reembolso por arrependimento ou por 'não gostar da conta'.", inline: false }
                ],
                timestamp: new Date().toISOString()
            }]
        };

        await fetch(WEBHOOK_DISCORD_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mensagemDiscord)
        });

        return res.status(200).json({ 
            sucesso: true, 
            mensagem: "Pedido enviado com segurança para a staff!" 
        });

    } catch (erro) {
        console.error("Erro no servidor:", erro);
        return res.status(500).json({ erro: "Erro interno no servidor de pagamentos." });
    }
});
