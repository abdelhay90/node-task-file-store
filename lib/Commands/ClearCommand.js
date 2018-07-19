const Command = require('./Command');

/**
 * Clear all data in the store command
 */
class ClearCommand extends Command {
    constructor(store) {
        super(store);
    }

    /**
     * execute command of clear data in the store
     * @param args
     * @returns {*}
     */
    execute(args) {
        return this._store.clear(true);
    }
}

module.exports = ClearCommand;
