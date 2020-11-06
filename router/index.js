const testportal = require('./testPortalRoute');

require('dotenv').config();

const PREFIX = process.env.prefix;

const router = (message, client) => {
  const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'ping') {
    message.channel.send('You need help?');
  }

  if (command === 'testportal') {
    testportal(message, args);
  }
  if(command === 'logout'){
    client.destroy() 
    process.exit(0)
  }
};

//@desc constructor for router functions
//fun(message args)
module.exports = router;

//mdc-radio__background round answer
//mdc-checkbox__background multi answers
