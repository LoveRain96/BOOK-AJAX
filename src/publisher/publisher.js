class Publisher {

    /**
     *
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    getId() {
        return this.id;
    }
    /**
     *
     * @return {string}
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @return {string}
     */
    getAddress() {
        return this.address;
    }

    /**
     *
     * @return {string}
     */
    getPhone() {
        return this.phone;
    }

    /**
     *
     * @param {string} address
     */
    setAddress(address) {
        this.address = address;
    }

    /**
     *
     * @param {string} phone
     */
    setPhone(phone) {
        this.phone = phone;
    }

    /**
     *
     * @param {INT} id
     */
    setId(id) {
        this.id = id;
    }

    toJson() {
        return {
            id       :this.getId(),
            name     :this.getName(),
            address  :this.getAddress(),
            phone    :this.getPhone(),
        }
    }
}

module.exports = Publisher;
