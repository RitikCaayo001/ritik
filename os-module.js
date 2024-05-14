const os = require('os');

// Info about current user 
const user = os.userInfo();
console.log(user);

// method return the system uptime in seconds 
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentid = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMen : os.freemem(),
}

console.log(currentid);