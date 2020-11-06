class Quest {
  constructor(quest, answers, multi = '', open = '') {
    this.quest = quest; // Single string
    this.answers = answers; // Array fo answers
    if (multi) {
      this.multi = multi;
    }
    if (open) {
      this.open;
    }
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

class QuestOpen {
  constructor(quest) {
    this.quest;
  }
}

module.exports = Quest;
