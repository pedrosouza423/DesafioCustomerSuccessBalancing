class CustomerSuccess {
    constructor(id, level) {
        this.id = id;
        this.level = level;
        this.customers = []; // Para armazenar os clientes atribuídos a este CS
    }

    // Método para atribuir um cliente a este CS
    assignCustomer(customer) {
        this.customers.push(customer);
    }

    // Retorna o número de clientes atribuídos a este CS
    getCustomerCount() {
        return this.customers.length;
    }
}

module.exports = CustomerSuccess;