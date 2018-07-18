/**
 * Pair represents the record in the store
 * @type {Pair}
 */
module.exports = class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString(){
        return `${this.key} -> ${this.value}`;
    }
};