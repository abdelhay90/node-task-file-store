const Command = require('./Command');

/**
 * Add new record to the store command
 */
class AddCommand extends Command {
    constructor(store) {
        super(store);
    }

    /**
     * execute the function of adding new record to the store
     * @param args
     * @returns {*}
     */
    execute(args) {
        return this._store.add(args);
    }
}

module.exports = AddCommand;