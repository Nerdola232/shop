const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Tabela de preços trancada no servidor
const produtos = {
    "id_01": { nome: "Conta Roblox Básica", preco: 15.00 },
    "id_02": { nome: "Conta Roblox Premium", preco: 50.00 },
    "id_03": { nome: "Conta Roblox VIP", preco: 120.00 }
};

const ultimaTentativa = new Map();
const COOLDOWN_SEGUNDOS = 3 * 1000;

app.post('/comprar', async (req, res) => {
    const ipCliente = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const agora = Date.now();

    if (ultimaTentativa.has(ipCliente)) {
        if (agora - ultimaTentativa.get(ipCliente) < COOLDOWN_SEGUNDOS) {
            return res.status(429).json({ erro: "Calma aí! Aguarde 3 segundos." });
        }
    }
    ultimaTentativa.set(ipCliente, agora);

    // Recebe o item, a quantidade e o discord do cliente que o site mandou
    const { itemId, quantidade, discordUser } = req.body;
    const produtoReal = produtos[itemId];

    if (!produtoReal || !quantidade || quantidade <= 0) {
        return res.status(400).json({ erro: "Dados inválidos ou tentativa de fraude." });
    }

    const valorTotal = produtoReal.preco * quantidade;

    // Webhooks separados que você vai configurar nas variáveis do Render
    const webhookVendas = process.env.WEBHOOK_VENDAS; 

    const mensagemDiscord = {
        content: `🛒 **NOVA SOLICITAÇÃO DE COMPRA!** 🛒\n` +
                 `👤 **Cliente (Discord):** ${discordUser || "Não informado"}\n` +
                 `📦 **Produto:** ${produtoReal.nome}\n` +
                 `🔢 **Quantidade:** ${quantidade}x\n` +
                 `💰 **Preço Total:** R$ ${valorTotal.toFixed(2)}\n` +
                 `*(Protegido e calculado pelo Servidor)*`
    };

    try {
        await fetch(webhookVendas, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mensagemDiscord)
        });
        
        res.json({ sucesso: true, mensagem: "Pedido enviado com segurança para a staff!" });
    } catch (error) {
        res.status(500).json({ erro: "Erro interno ao contatar o Discord." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
