const fs = require('fs');
const mainPid = process.pid;

const logMessage = `Server started with PID: ${mainPid}\n`;

fs.appendFileSync('server.log', logMessage);

console.log(`Server is running. See server.log for more details.`);
