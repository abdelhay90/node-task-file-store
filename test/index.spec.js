const assert = require('chai').assert;
const expect = require('chai').expect;
const {COMMANDS, MESSAGES} = require('../lib/constants');
const CommandFactory = require('../lib/Commands/CommandFactory');
const Store = require('../lib/store');

describe('Store pairs', function () {
    it('should be store singleton class', function () {
        expect(() => {
            let t = new Store();
        }).to.throw();
    });

    it('should add key', function () {
        const command = CommandFactory.getCommand(COMMANDS.ADD);
        command.execute(['99', 'ahmed']);
        command.execute(['200', 'ahmed']);
        command.execute(['201', 'ahmed']);
        command.execute(['202', 'ahmed']);
    });

    it('should not add without key or value', function () {
        const command = CommandFactory.getCommand(COMMANDS.ADD);
        expect(() => {
            command.execute(['99']);
        }).to.throw();
    });

    it('should get key', function () {
        const command = CommandFactory.getCommand(COMMANDS.GET);
        console.log(command.execute(['99']));
    });

    it('should give not existing key', function () {
        const command = CommandFactory.getCommand(COMMANDS.GET);
        expect(command.execute(['100'])).to.equal(MESSAGES.NOT_EXISTING_KEY);
    });

    it('should not get without key', function () {
        const command = CommandFactory.getCommand(COMMANDS.GET);
        expect(() => {
            command.execute([]);
        }).to.throw();
    });

    it('should list key', function () {
        const command = CommandFactory.getCommand(COMMANDS.LIST_ALL);
        console.log(command.execute([]));
    });

    it('should remove key', function () {
        const command = CommandFactory.getCommand(COMMANDS.REMOVE);
        console.log(command.execute(['99']));
    });

    it('should not remove key without key', function () {
        const command = CommandFactory.getCommand(COMMANDS.REMOVE);
        expect(() => {
            command.execute([]);
        }).to.throw();
    });

    it('should clear key', function () {
        const command = CommandFactory.getCommand(COMMANDS.CLEAR_ALL);
        console.log(command.execute([]));
    });

    it('should throw error on wrong command key', function () {
        expect(() => {
            CommandFactory.getCommand('WRONG_COMMAND')
        }).to.throw();
    });

    it('should give empty store while listing the store', function () {
        const command = CommandFactory.getCommand(COMMANDS.LIST_ALL);
        expect(command.execute([])).to.equal(MESSAGES.EMPTY_STORE);
    });

    it('should give empty store while remove from the store', function () {
        const command = CommandFactory.getCommand(COMMANDS.REMOVE);
        expect(command.execute(['99'])).to.equal(MESSAGES.EMPTY_STORE);
    });

    it('should give empty store while get from the store', function () {
        const command = CommandFactory.getCommand(COMMANDS.GET);
        expect(command.execute(['99'])).to.equal(MESSAGES.EMPTY_STORE);
    });
});