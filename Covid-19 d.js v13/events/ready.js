const moment = require('moment');
const { prefix } = require("../ayarlar.json");

module.exports = client => {
  client.user.setActivity(`Yakında Yok Olacağım :D`);
  console.log('_________________________________________');
  console.log(`Kullanıcı İsmi     : ${client.user.username}`);
  console.log(`Sunucular          : ${client.guilds.cache.size} Sunucu`);
  console.log(`Kullanıcılar       : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Kullanıcı`);
  console.log(`Komut Sayısı       : ${client.commands.size} Komut Var`);
  console.log(`Prefix             : ${prefix}`);
  console.log(`Durum              : ${client.user.presence.status}!`);
  console.log(`Kuruluş Tarihi     : ${moment(client.user.createdAt).format("DD MMMM YYYY dddd (hh:mm:ss)")}`);
  console.log(`Ram Kullanımı      : ${(process.memoryUsage().rss / Math.pow(2,20)).toFixed(2)} MB`);
  console.log(`Aktiflik Durumu    : Aktif!`);
  console.log('_________________________________________');
};
