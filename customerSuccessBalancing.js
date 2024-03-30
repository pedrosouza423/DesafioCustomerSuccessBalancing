// customerSuccessBalancing.js
const validarLimitesEUnicidade = require('./validarLimitesEUnicidade');

function customerSuccessBalancing(csList, clientsList, unavailableCsIds) {
    validarLimitesEUnicidade(csList, clientsList);

    const availableCs = csList.filter(cs => !unavailableCsIds.includes(cs.id));
    
    const sortedCs = availableCs.sort((a, b) => a.level - b.level);
    const sortedClients = clientsList.sort((a, b) => a.size - b.size);

    csList.forEach(cs => cs.customers = []);

    sortedClients.forEach(client => {
        const suitableCs = sortedCs.find(cs => cs.level >= client.size);
        if (suitableCs) {
            suitableCs.assignCustomer(client);
        }
    });

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

    if (csIdWithMostClients.length > 1) {
        return 0; 
    }
    return csIdWithMostClients.length === 1 ? csIdWithMostClients[0] : 0;
}

module.exports = customerSuccessBalancing;
