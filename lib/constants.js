/**
 * having all constants used in the application
 * @type {string}
 */

module.exports = {
    DELIMITER: ";",
    DELIMITER_CONSOLE: ";",
    MESSAGES: {
        INVALID_COMMAND: `Please enter valid command\n commands: (get|list|clear|remove|add).`,
        MISSING_ARG: `Missing arguments.`,
        SUCCESSFULLY_CLEARED: 'The store was cleared successfully...',
        ADDED_SUCCESSFULLY: (key, value) => `${key} -> ${value} was added successfully.`,
        REMOVED_SUCCESSFULLY: "Key removed successfully.",
        EMPTY_STORE: "The store is empty",
        NOT_EXISTING_KEY: "This key is ont existed"
    },
    COMMANDS: {
        ADD: "add",
        REMOVE: "remove",
        GET: "get",
        CLEAR_ALL: "clear",
        LIST_ALL: "list",
    }
};