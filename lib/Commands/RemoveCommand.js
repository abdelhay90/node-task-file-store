const Command = require('./Command');

/**
 * Remove record from the store by key command
 */
class RemoveCommand extends Command {
    constructor(store) {
        super(store);
    }

    /**
     * execute the remove by key from the store
     * @param args
     * @returns {*}
     */
    execute(args) {
        return this._store.remove(args);
    }
}

module.exports = RemoveCommand;