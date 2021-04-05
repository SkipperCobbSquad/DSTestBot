# Discord Test Bot by JarvisSystems
## New engine is available [here](https://github.com/SkipperCobbSquad/Test-Getter-v2)
![Alt Text](assets/jarvis_systems.png)

---
- [Discord Test Bot by JarvisSystems](#discord-test-bot-by-jarvissystems)
    - [About](#about)
    - [Installation](#installation)
      - [1. First install Node JS](#1-first-install-node-js)
      - [2. Generate token for your Discord Bot](#2-generate-token-for-your-discord-bot)
      - [3. Install the Bot](#3-install-the-bot)
  - [Update](#update)
  - [Usage](#usage)
  - [TODO](#todo)

---

### About
!!! For people that copy or get inspiration from this code, please reference to this repo in your projects and leave star <3

DSTestBOT is for everyone that want know about questions and possible answers before enter to test. At now our solution support **TestPortal** but in the future we want to add new test solutions. Pleas read [TODO](#todo) to see what we want to add :)

---

### Installation

---

#### 1. First install Node JS

1. On **Windows** just go to https://nodejs.org/ and download **Current** version.
2. On **Linux & MacOS X** we prefer NVM (Node Version Manager) just type into yout terminal:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```

- After the installation on **Linux OR MacOS X** type command below to install node:

```sh
nvm install node
```

#### 2. Generate token for your Discord Bot
To generate token for bot please follow this instruction provided by: [Discord.js](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

> **! REMEMBER TO SET BOT PERMISONS WHEN YOU GENERATE LINK TO**:
>
> - All Text Permission
> - All General Premissions **beside**:
>   - **Administrator**
>   - **View Audit Log**
>   - **View Server Insights**

#### 3. Install the Bot

1. Create folder `mkdir yourfoldername` and go to this directory:

- Clone this repo to folder by typing:
  ```sh
  git clone https://github.com/SzymonFaligowski/DSTestBot.git
  ```
  or
- Download .zip file and extract to your folder

2. Creat file follow by name **.env** and pass this code below to file

```
TOKEN = yourtoken
prefix = "!"
```

> **In line TOKEN paste your bot token from Discord**

3. To run BOT just type into your terminal `npm install` and after its finish type `npm start`
>Rememeber you must be in path where files bot is.

---
## Update
Just repat [step 3](#3-install-the-bot) from installation ;)

---
## Usage
| Command | Input | Description |
|:-------:|:-----:|------|
|!help    |null   |Return list of available commands|
|!testportal|url  |Use that if you want know about your test|
|!logout|null     |Gently stop bot|

---
## TODO
- [ ] Work on test that have password to enter
- [ ] Set up user permission
- [ ] Add quizizz recognition
- [ ] Add kahoot recognition
- [ ] Proper error handling
