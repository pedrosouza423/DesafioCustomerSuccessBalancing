class CustomerSuccess {
    constructor(id, level) {
        this.id = id;
        this.level = level;
        this.customers = []; 
    }

    assignCustomer(customer) {
        this.customers.push(customer);
    }

    getCustomerCount() {
        return this.customers.length;
    }
}

module.exports = CustomerSuccess;