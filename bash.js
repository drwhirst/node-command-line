const commands = require("./command");

process.stdout.write('prompt >');

process.stdin.on('data', (userInput) => {
    userInput = userInput.toString().trim();
    commands.evaluateCmd(userInput);
});