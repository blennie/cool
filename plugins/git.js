const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/wvTMw09.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*๐๐๐ ๐๐๐๐:QUEEN ANGELLA*
 
โผโผโโยฉdrips ยฎzimbots

*๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐ : wa.me/27634090203?text=Hii%20DripsMemes%20Sir.%20*

 *๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐ .update   To update Bot .update now*

 *๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐ : https://www.youtube.com/channel/UC2hESq6BCRMCU-LKpl7Oq8g*
     
 *Instagram id: https://www.instagram.com/zim_hot_chicks_official?utm_medium=copy_link*

 *๐๐๐๐๐ ๐๐๐  ๐๐๐-๐๐๐๐๐ : website coming soon*

 *๐๐๐๐๐๐ ๐๐๐๐ : https://github.com/zim-bot/queen-angella*

 *QUEEN ANGELLA ๐๐๐๐๐๐๐ ๐๐  ๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐*

 โผโผโโยฉdrips ยฎzimbots
`}) 

}));
