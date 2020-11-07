# Discord Test Bot by JarvisSystems

![Alt Text](assets/jarvis_systems.png)

---

What test we have?

- testportal

###Installation

---

####1. First install **Node JS**

1) On **Windows** just go to https://nodejs.org/ and download **Current** version.
2) On **Linux & MacOS X** we prefer NVM (Node Version Manager) just type into yout terminal:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```
- After the installation on **Linux OR MacOS X** type command below to install node:
```sh
nvm install node
```
####2. Generate token for your Discord Bot
To generate token for bot please follow this instruction provided by: [Discord.js](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
>**! REMEMBER TO SET BOT PERMISONS WHEN YOU GENERATE LINK TO**:
> - All Text Permission
> - All General Premissions **beside**: 
>   - **Administrator**
>   - **View Adit Log**
>   - **View Server Insights**
####3. Install the Bot
1) Create folder `mkdir yourfoldername` and go to this directory:
- Clone this repo to folder by typing:
  ```sh
  git clone https://github.com/SzymonFaligowski/DSTestBot.git
  ```
 or
- Download .zip file and extract to your folder
2) Creat file follow by name **.env** and pass this code below to file
```
TOKEN = yourtoken
prefix = "!"
```
>**In line TOKEN paste your bot token from Discord**

3) To run BOT just type into your terminal `npm start`

>Rememeber you must be in path where files bot is.