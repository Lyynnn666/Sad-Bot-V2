var handler = async m => m.reply(`
╭─「 Donasi 」
│ • AXIS [083830815715]
│ • AXIS² [083890585717]
│ • DANA [083830815715]
| • SAWERIA https://saweria.co/LynnZakky
│ • UNTUK ALL QRISS BISA CHAT OWNER 🗿👍🏻
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/15312212027
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
