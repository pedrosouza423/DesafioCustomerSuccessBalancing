function validarLimitesEUnicidade(csList, clientsList) {
    const csIds = new Set();
    const clientIds = new Set();
    const csLevels = new Set();

    for (const cs of csList) {
        if (cs.id <= 0 || cs.id >= 1000 || cs.level <= 0 || cs.level >= 10000) {
            throw new Error("Erro: Customer Success com ID ou nível fora dos limites permitidos.");
        }
        if (csIds.has(cs.id) || csLevels.has(cs.level)) {
            throw new Error("Erro: IDs ou níveis de Customer Success duplicados detectados.");
        }
        csIds.add(cs.id);
        csLevels.add(cs.level);
    }

    for (const client of clientsList) {
        if (client.id <= 0 || client.id >= 1000000 || client.size <= 0 || client.size >= 100000) {
            throw new Error("Erro: Cliente com ID ou tamanho fora dos limites permitidos.");
        }
        if (clientIds.has(client.id)) {
            throw new Error("Erro: IDs de Clientes duplicados detectados.");
        }
        clientIds.add(client.id);
    }
}

module.exports = validarLimitesEUnicidade;
