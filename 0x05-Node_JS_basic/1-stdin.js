/**
 * welcomeMessage - a welcome message
 *
 * Return: Null
 */
const welcomeMessage = () => {
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.on('data', (input) => {
    const name = input;
    console.log(`Your name is: ${name}`);

    console.log('This important software is now closing');

    process.exit();
  });

  process.on('SIGINT', () => {
    console.log('This important software is not closing');
    process.exit();
  });
};

welcomeMessage();
