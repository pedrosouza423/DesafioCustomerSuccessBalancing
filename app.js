// app.js
const Cliente = require('./Cliente');
const CustomerSuccess = require('./CustomerSuccess');
const customerSuccessBalancing = require('./customerSuccessBalancing');

try {
    const csList = [
        new CustomerSuccess(1, 100),
        new CustomerSuccess(2, 50),
        new CustomerSuccess(3, 60),
        new CustomerSuccess(4, 70)
    ];
    const clientsList = [
        new Cliente(1, 20),
        new Cliente(2, 45),
        new Cliente(3, 55),
        new Cliente(4, 55),
        new Cliente(5, 70),
        new Cliente(6, 80)
    ];
    const unavailableCsIds = [];

    const result = customerSuccessBalancing(csList, clientsList, unavailableCsIds);

    if (Array.isArray(result) && result.length === 1) {
        console.log(`O CS que atendeu mais clientes é: CS ${result[0]} com ${csList.find(cs => cs.id === result[0]).getCustomerCount()} clientes`);
    } else if (result === 0 || (Array.isArray(result) && result.length > 1)) {
        console.log("O resultado é um empate entre os CSs.");
        
        // Extra: Mostrar detalhes dos CSs em caso de empate
        if (Array.isArray(result) && result.length > 1) {
            console.log("Os CSs que empataram atendendo mais clientes são:");
            result.forEach(id => {
                console.log(`CS ${id}: ${csList.find(cs => cs.id === id).getCustomerCount()} clientes`);
            });
        }
    } else {
        console.log(`O CS que atendeu mais clientes é: CS ${result} com ${csList.find(cs => cs.id === result).getCustomerCount()} clientes`);
    }
    
    console.log("\nDetalhamento do atendimento de todos os CSs:");
    csList.forEach(cs => {
        console.log(`CS ${cs.id}: ${cs.getCustomerCount()} clientes`);
    });
} catch (e) {
    console.error(e.message);
}
