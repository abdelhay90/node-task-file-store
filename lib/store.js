/**
 * Store is singleton as representing the functionality of add, remove, get, list, clear data from and to the store
 */
const fs = require('fs');
const Pair = require('./Models/Pair');
const {MESSAGES, DELIMITER_CONSOLE, DELIMITER} = require('./constants');
/**
 * used to enforce singleton implementation
 * @type {symbol}
 */
let singleton = Symbol();
let singletonEnforcer = Symbol();

class Store {

    /**
     * @param enforcer
     */
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw "Cannot construct singleton";
        }
        this._filePath = './lib/store.data'
    }

    /**
     * @returns Store
     */
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new Store(singletonEnforcer);
        }
        return this[singleton];
    }

    /**
     * add new pairs to the
     * @param pair
     * @returns {string}
     */
    add(args) {
        fs.appendFileSync(this._filePath, `${args[0]}${DELIMITER}${args[1]}\n`);
        return MESSAGES.ADDED_SUCCESSFULLY(args[0], args[1]);
    }

    /**
     * get entry by key
     * @param key
     * @returns {string}
     */
    get(key) {
        if (!key[0]) {
            throw new Error(MESSAGES.MISSING_KEY);
        }
        const result = fs
            .readFileSync(this._filePath, 'utf8')
            .split('\n')
            .map(keyValue => {
                let temp = keyValue.split(`${DELIMITER}`);
                return new Pair(temp ? temp[0] : '', temp ? temp[1] : '');
            }).find((pair) => pair.key == key);
        return result ? result.toString() : MESSAGES.NOT_EXISTING_KEY;
    }

    /**
     * remove key from store
     * @param key
     * @returns {string}
     */
        remove(key) {
        if (!key[0]) {
            throw new Error(MESSAGES.MISSING_KEY);
        }
        const result = fs
            .readFileSync(this._filePath, 'utf8')
            .split('\n').filter((value) => {
                let temp = value.split(`${DELIMITER}`);
                return key[0] != temp[0];
            });
        let str = '';
        result.forEach((value) => {
            let temp = value.split(';');
            if (temp[0] !== '') {
                str += (`${temp[0]}${DELIMITER}${temp[1]}\n`);
            }
        });
        fs.writeFileSync(this._filePath, str);
        return MESSAGES.REMOVED_SUCCESSFULLY;
    }

    /**
     * clear all data in the store
     * @returns {string}
     */
    clear() {
        fs.writeFileSync(this._filePath, '');
        return MESSAGES.SUCCESSFULLY_CLEARED;
    }

    /**
     * list all key pairs
     * @returns {string}
     */
    list() {
        let str = '';
        fs.readFileSync(this._filePath, 'utf8').split('\n').forEach((value) => {
            let temp = value.split(';');
            if (temp[0] !== '') {
                str += (`${temp[0]} ${DELIMITER_CONSOLE} ${temp[1]}\n`);
            }
        });
        return str;
    }
}

module.exports = Store.instance;