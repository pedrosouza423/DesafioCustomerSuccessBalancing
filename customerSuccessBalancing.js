// customerSuccessBalancing.js
const validarLimitesEUnicidade = require('./validarLimitesEUnicidade');

function customerSuccessBalancing(csList, clientsList, unavailableCsIds) {
    // Validação de limites e unicidade para CSs e clientes.
    validarLimitesEUnicidade(csList, clientsList);

    // Filtra os CSs disponíveis, excluindo os CSs indisponíveis.
    const availableCs = csList.filter(cs => !unavailableCsIds.includes(cs.id));
    
    // Ordena os CSs disponíveis pelo nível de experiência e os clientes pelo tamanho.
    const sortedCs = availableCs.sort((a, b) => a.level - b.level);
    const sortedClients = clientsList.sort((a, b) => a.size - b.size);

    // Reinicia a lista de clientes atendidos por cada CS para a nova rodada de atribuição.
    csList.forEach(cs => cs.customers = []);

    // Atribui cada cliente ao primeiro CS disponível que pode atendê-lo.
    sortedClients.forEach(client => {
        const suitableCs = sortedCs.find(cs => cs.level >= client.size);
        if (suitableCs) {
            suitableCs.assignCustomer(client);
        }
    });

    // Calcula o número de clientes atendidos por cada CS e determina o(s) CS(s) que atendeu/atenderam mais clientes.
    let maxClientsServed = 0;
    let csIdWithMostClients = [];
    sortedCs.forEach(cs => {
        const count = cs.getCustomerCount();
        if (count > maxClientsServed) {
            maxClientsServed = count;
            csIdWithMostClients = [cs.id];
        } else if (count === maxClientsServed && count > 0) {
            csIdWithMostClients.push(cs.id);
        }
    });

    // Retorna 0 em caso de empate, ou o ID do CS que atendeu mais clientes.
    if (csIdWithMostClients.length > 1) {
        return 0; // Indica empate.
    }
    return csIdWithMostClients.length === 1 ? csIdWithMostClients[0] : 0;
}

module.exports = customerSuccessBalancing;
