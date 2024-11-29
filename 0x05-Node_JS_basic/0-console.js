/**
 *
 *  displayMessage - displays a message to stdout
 * @str: string parameter of what to print
 *
 * Return: None
 */

const displayMessage = (str) => {
    process.stdout.write(str + '\n');
};

module.exports = displayMessage;
