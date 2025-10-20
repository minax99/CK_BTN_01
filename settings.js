const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'CHAMA-MD=qVc1hLJA#T9G62mxrV2-H80Qaj4QwkJ_KLgPBayzdHpiHipCy8GA',
OWNER_NUMBER: process.env.OWNER_NUMBER || "94779510013",
ALIVE: process.env.ALIVE || `default`,
OWNER_NAME: process.env.OWNER_NAME || 'Chethmina' ,     
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
PREFIX:  process.env.PREFIX || ['.'] ,
FOOTER: process.env.FOOTER || '> 👨🏻‍💻 *ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ*',
DIRECTION: true,
IMAGE: process.env.IMAGE || `https://files.catbox.moe/h6t2am.jpg`,
LOGO: process.env.LOGO || `https://files.catbox.moe/h6t2am.jpg`     
};
