const {COMMANDS} = require('../constants');
const AddCommand = require('./AddCommand');
const RemoveCommand = require('./RemoveCommand');
const GetCommand = require('./GetCommand');
const ListCommand = require('./ListCommand');
const ClearCommand = require('./ClearCommand');
const Store = require('../store');
/**
 * Command Factory Model
 */
class CommandFactory {
    /**
     * generate a command with its specified key
     * @param key
     * @returns Command
     */
    static getCommand(key) {
        switch (key) {
            case COMMANDS.ADD:
                return new AddCommand(Store.instance);
            case COMMANDS.REMOVE:
                return new RemoveCommand(Store.instance);
            case COMMANDS.GET:
                return new GetCommand(Store.instance);
            case COMMANDS.LIST_ALL:
                return new ListCommand(Store.instance);
            case COMMANDS.CLEAR_ALL:
                return new ClearCommand(Store.instance);
        }
        throw new Error('Invalid command.');
    }
}

module.exports = CommandFactory;