const { MessageEmbed } = require('discord.js');
const portal = require('../controllers/testPortal');

const createME = (quest, answer = [], type) => {
  const questEm = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Test Portal')
    .setDescription(`Quest Type: ${type}`)
    .attachFiles(['./Logo.png'])
    .setAuthor('JarvisSystems', 'attachment://Logo.png')
    .setTimestamp()
    .setFooter('JarvisSystems', 'attachment://Logo.png');
  if (answer === []) {
    questEm.addField(quest);
  } else {
    let out = '***';
    let i = 0;
    for (const anws of answer) {
      out += `\`\`\` ${i + 1}) ${anws}\`\`\` `;
      i += 1;
    }
    out += '*** \n';
    questEm.addField(quest, out);
  }
  return questEm;
};

const testportal = (msg, args) => {
  (async () => {
    const { results, error } = await portal(args[0]);
    for (const result of results) {
      const ME = createME(result.quest, result?.answers, result.selector);
      msg.channel.send(ME);
    }
    // const maxi = (table) => {
    //   const questEm = new MessageEmbed()
    //     .setColor('#0099ff')
    //     .setTitle('Test Portal')
    //     .attachFiles(['./Logo.png'])
    //     .setAuthor('JarvisSystems', 'attachment://Logo.png')
    //     .setTimestamp()
    //     .setFooter('JarvisSystems', 'attachment://Logo.png');

    //   if (table.length <= 25 && table.length > 0) {
    //     let i = 1;
    //     for (const quest of table) {
    //       questEm.addField(
    //         `${quest.quest}:  ${quest.multi ? 'multi' : 'single'}`,
    //         quest.outAnsw(),
    //         true
    //       );
    //     }
    //     msg.channel.send(questEm);
    //   } else {
    //     const first = table.slice(0, 25);
    //     const second = table.slice(26);
    //     let i = 1;
    //     for (const quest of first) {
    //       questEm.addField(
    //         `${quest.quest}:  ${quest?.multi ? 'multi' : 'single'}`,
    //         quest.outAnsw(),
    //         true
    //       );
    //     }
    //     msg.channel.send(questEm);
    //     maxi(second);
    //   }
    // };

    // if (error) {
    //   msg.channel.send('Something wrong with your URL (PROBABLY)');
    // } else if (results.length) {
    //   maxi(results);
    // }
  })();
};

module.exports = testportal;
