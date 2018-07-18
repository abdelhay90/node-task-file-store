const Command = require('./Command');

/**
 * Get record from the store by key command
 */
class GetCommand extends Command {
    constructor(store) {
        super(store);
    }

    /**
     * execute get record by key from the store
     * @param args
     * @returns {*}
     */
    execute(args) {
        return this._store.get(args);
    }
}

module.exports = GetCommand;