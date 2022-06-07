#!/user/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description("Password Generator! Generate secure passwords for websites!")

program
    .option('-l, --length <num>', 'length of pass', '8')
    .option('-s, --save', 'save password to local text file')
    .option('-nn, --no-numbers', 'removes numbers from generated password')
    .option('-ns, --no-symbols', 'removes symbols from the generated password')
    .parse()

const { length, save, numbers, symbols } = program.opts()

const genPassword = createPassword(length, numbers, symbols)

//Save to local text file
if(save) {
    savePassword(genPassword)
}

//Clipboard

clipboardy.writeSync(genPassword)

log(chalk.blue('Random Password: ') + chalk.bold(genPassword))
log(chalk.magenta('Password copied to clipboard, use CTRL + V to paste!'))