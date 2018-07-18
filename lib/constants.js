/**
 * having all constants used in the application
 * @type {string}
 */
const commandPattern = 'command <Key> <Value>';
module.exports = {
    DELIMITER: ";",
    DELIMITER_CONSOLE: ";",
    MESSAGES: {
        INVALID_COMMAND: `Please enter valid command\n commands: (set|get|list|clear|remove|add).`,
        MISSING_KEY: `Please enter key: ${commandPattern}`,
        MISSING_VALUE: `Please enter value: ${commandPattern}`,
        MISSING_KEY_VALUE: `Please enter missing key Or value: ${commandPattern}`,
        SUCCESSFULLY_CLEARED: 'The store was cleared successfully...',
        ADDED_SUCCESSFULLY: (key, value) => `${key} -> ${value} was added successfully...`,
        EXISTING_KEY: 'The key is already existed...',
        NOT_EXISTING_KEY: 'The key is not found.',
        REMOVED_SUCCESSFULLY: "Key removed successfully..."
    },
    COMMANDS: {
        ADD: "add",
        REMOVE: "remove",
        GET: "get",
        CLEAR_ALL: "clear",
        LIST_ALL: "list",
    }
};