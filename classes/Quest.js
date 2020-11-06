class Quest {
  constructor(quest, answers, type) {
    this.quest = quest; // Single string
    this.answers = answers; // Array fo answers
    this.type = type;
  }

  outAnsw() {
    let out = '***';
    let i = 0;
    for (const anws of this.answers) {
      out += `\`\`\` ${i + 1}) ${anws}\`\`\` `;
      i += 1;
    }
    out += '*** \n';
    return out;
  }
}

module.exports = Quest;
