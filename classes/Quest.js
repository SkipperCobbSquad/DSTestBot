const { MessageEmbed } = require('discord.js');
class Quest {
  constructor(quest, answers = [], type) {
    this.quest = quest; // Single string
    this.answers = answers; // Array of answers
    this.type = type; //Type of question
  }

  //Create MessageEmbed for each questions
  createME() {
    const questEm = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Test Portal')
      .setDescription(`Quest Type: ${this.type}`)
      .attachFiles(['./Logo.png'])
      .setAuthor('JarvisSystems', 'attachment://Logo.png')
      .setTimestamp()
      .setFooter('JarvisSystems', 'attachment://Logo.png');
    if (this.answer === []) {
      questEm.addField(this.quest);
    } else {
      let out = '***';
      let i = 0;
      for (const anws of this.answers) {
        out += `\`\`\` ${i + 1}) ${anws}\`\`\` `;
        i += 1;
      }
      out += '*** \n';
      questEm.addField(this.quest, out);
    }
    return questEm;
  }
}

module.exports = Quest;
