const { cmd } = require('../command');

cmd({
    pattern: "owner",
    react: "👤",
    alias: ["owner", "botinfo", "creator"],
    desc: "Get bot owner's contact information",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        // Your contact details
        const ownerNumber = '+94772194789';
        const ownerName = 'Dilshan Ashinsa';
        const organization = 'Sri Lanka';
        const gender = 'Male';

        // Create a vCard (WhatsApp contact card)
        const vcard = 
        'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        `FN:${ownerName}\n` +
        `ORG:${organization};\n` +
        `GENDER:${gender};\n` +
        `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +
        'END:VCARD';

        // Send the vCard to the chat
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Reply confirming the contact card was sent
        await conn.sendMessage(from, {
            text: `👤 *This is the contact for the bot owner: ${ownerName}*\n📍 *Location*: ${organization}\n🚹 *Gender*: ${gender}`,
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`],
                quotedMessageId: sentVCard.key.id
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: '❌ Sorry, failed to send owner contact info.' }, { quoted: mek });
    }
});
