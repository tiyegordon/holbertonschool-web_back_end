const fs = require('fs');

const appState = {
  isInteractive: process.stdin.isTTY,
  isClosed: false,
};

const printClosingMessage = () => {
  if (!appState.isClosed) {
    appState.isClosed = true;
    fs.writeSync(1, 'This important software is now closing\n');
  }
};

async function run() {
  fs.writeSync(1, 'Welcome to Holberton School, what is your name?\n');
  process.on('exit', printClosingMessage);
  process.on('SIGINT', () => {
    process.exit(0);
  });

  try {
    for await (const chunk of process.stdin) {
      const name = chunk.toString().trim();
      fs.writeSync(1, `Your name is: ${name}\r`);
      if (appState.isInteractive) {
        process.exit(0);
      }
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    process.exit(1);
  }
}

run();
