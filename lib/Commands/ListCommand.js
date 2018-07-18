const Command = require('./Command');

/**
 * List all record in the store command
 */
class ClearCommand extends Command {
    constructor(store) {
        super(store);
    }

    /**
     * execute the list all record from the store
     * @param args
     * @returns {*}
     */
    execute(args) {
        return this._store.list(args);
    }
}

module.exports = ClearCommand;