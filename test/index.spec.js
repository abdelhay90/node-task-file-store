const assert = require('chai').assert;
const expect = require('chai').expect;
const {COMMANDS} = require ('../lib/constants');
const CommandFactory = require('../lib/Commands/CommandFactory');

describe('Store pairs', function () {
    it('should add key', function () {
        const command = CommandFactory.getCommand(COMMANDS.ADD);
        console.log(command.execute(['99', 'hazem']));
    });    

    it('should get key', function () {
        const command = CommandFactory.getCommand(COMMANDS.GET);
        console.log(command.execute(['99']));
    });

    it('should list key', function () {
        const command = CommandFactory.getCommand(COMMANDS.LIST_ALL);
        console.log(command.execute([]));
    });

    it('should remove key', function () {
        const command = CommandFactory.getCommand(COMMANDS.REMOVE);
        console.log(command.execute(['99']));
    });

    it('should clear key', function () {
        const command = CommandFactory.getCommand(COMMANDS.CLEAR_ALL);
        console.log(command.execute([]));
    });
});