#!/usr/bin/env node
const CommandFactory = require('./lib/Commands/CommandFactory');
const args = [...process.argv];

try {
    const [,,commandName, ...rest] = args;
    const command = CommandFactory.getCommand(commandName);
    console.log(command.execute(rest));
}
catch (e) {
    console.log(e.message)
}
