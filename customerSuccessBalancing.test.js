// customerSuccessBalancing.test.js
const customerSuccessBalancing = require('./customerSuccessBalancing');
const Cliente = require('./Cliente');
const CustomerSuccess = require('./CustomerSuccess');

describe('Testes para CustomerSuccessBalancing', () => {
    test('Deve retornar o id do CS que atendeu mais clientes', () => {
        const csList = [
            new CustomerSuccess(1, 60),
            new CustomerSuccess(2, 20),
            new CustomerSuccess(3, 95),
            new CustomerSuccess(4, 75)
        ];
        const clientsList = [
            new Cliente(1, 10),
            new Cliente(2, 20),
            new Cliente(3, 30),
            new Cliente(4, 70),
            new Cliente(5, 65),
            new Cliente(6, 70),
            new Cliente(7, 70)
        ];
        const unavailableCsIds = [2, 3];

        const result = customerSuccessBalancing(csList, clientsList, unavailableCsIds);
        
        expect(result).toBe(4);
    });

    test('Deve retornar 0 em caso de empate', () => {
        const csList = [
            new CustomerSuccess(1, 50),
            new CustomerSuccess(2, 60)
        ];
        const clientsList = [
            new Cliente(1, 10),
            new Cliente(2, 60)
        ];
        const unavailableCsIds = []; 

        const result = customerSuccessBalancing(csList, clientsList, unavailableCsIds);
        
        expect(result).toBe(0);
    });

    test('CS indisponíveis não devem atender clientes', () => {
        const csList = [
            new CustomerSuccess(1, 10),
            new CustomerSuccess(2, 20),
            new CustomerSuccess(3, 30)
        ];
        const clientsList = [
            new Cliente(1, 5),
            new Cliente(2, 15),
            new Cliente(3, 25)
        ];
        const unavailableCsIds = [1, 3];

        const result = customerSuccessBalancing(csList, clientsList, unavailableCsIds);

        
        expect(result).toBe(2);
    });

    test('IDs e níveis de CSs e IDs de clientes dentro dos limites e únicos', () => {
        const csList = [
            new CustomerSuccess(1, 3000),
            new CustomerSuccess(2, 6000)
        ];
        const clientsList = [
            new Cliente(500000, 50000),
            new Cliente(500001, 50000) 
        ];
        const unavailableCsIds = [2];
        
        expect(() => customerSuccessBalancing(csList, clientsList, unavailableCsIds)).not.toThrow();
    });

    test('CSs com níveis diferentes não devem lançar erro', () => {
        const csList = [
            new CustomerSuccess(1, 3000),
            new CustomerSuccess(2, 6000)
        ];
        const clientsList = [
            new Cliente(1, 2000),
            new Cliente(2, 4000)
        ];
        const unavailableCsIds = [];
        
        expect(() => customerSuccessBalancing(csList, clientsList, unavailableCsIds)).not.toThrow();
    });

    test('Clientes com mesmo tamanho podem não ser atendidos se não houver CS disponível', () => {
        const csList = [
            new CustomerSuccess(1, 100)
        ];
        const clientsList = [
            new Cliente(1, 200),
            new Cliente(2, 200)
        ];
        const unavailableCsIds = [];

        const result = customerSuccessBalancing(csList, clientsList, unavailableCsIds);
        expect(result).not.toBeUndefined();
    });

});
