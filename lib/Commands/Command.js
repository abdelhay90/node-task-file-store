/**
 * Command Class working and abstraction class for command pattern
 */
class Command {
    constructor(store) {
        this._store = store;
    }

    execute() {
    }
}

module.exports = Command;