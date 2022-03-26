const discord = require("discord.js");

exports.run = async (client, msg, args) => {
    let covid = new discord.MessageEmbed()
        .setTitle("D.js v13 deneme")
        .setDescription(`Merhaba arkadaşım v13 mü deniyon?`)
        .setFooter({ text: `Covid-19 discord.js v13` })
    msg.channel.send({ embeds: [covid] })
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
}
exports.help = {
    name: "v13"
}