const portal = require('../controllers/testPortal');

const testportal = (msg, args) => {
  (async () => {
    const { results, error } = await portal(args[0]);
    for (const result of results) {
      const ME = result.createME();
      await msg.channel.send(ME);
    }
  })();
};

module.exports = testportal;
