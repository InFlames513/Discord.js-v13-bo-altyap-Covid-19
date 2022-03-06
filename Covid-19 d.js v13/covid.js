//modüller baş
const fs = require("fs");
const { Client, Intents, Collection } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("./util/eventLoader.js")(client);
const { token } = require("./ayarlar.json");
//modüller son https://discord.gg/HFhyNaKUB6

//log baş https://discord.gg/HFhyNaKUB6
const log = message => console.log(`${message}`);
//log son

//command handler baş

client.commands = new Collection();
client.aliases = new Collection();

fs.readdir("./komutlar/", (err, files) => {
	if (err) console.error(err); //https://discord.gg/HFhyNaKUB6

	log(files.length, "komut yüklenecek.");

	files.forEach(f => {
		let props = require(`./komutlar/${f}`);
		log(`Yüklenen komut: ${props.help.name}.`);
		client.commands.set(props.help.name, props);
		props.conf.aliases.forEach(alias =>
			client.aliases.set(alias, props.help.name)
		);
	});
});

//https://discord.gg/HFhyNaKUB6                              
client.reload = command => {  //https://discord.gg/HFhyNaKUB6
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(`./komutlar/${command}`)];
			let inflames = require(`./komutlar/${command}`);
			client.commands.delete(command);
			client.aliases.forEach((inflames, alias) => {
				if (inflames === command) client.aliases.delete(alias);
			});
			client.commands.set(command, inflames);
			inflames.conf.aliases.forEach(alias => {
				client.aliases.set(alias, inflames.help.name);
			});
			resolve();
		} catch (e) {
			reject(e);
		}
	});
};

client.load = command => {
	return new Promise((resolve, reject) => {
		try { //https://discord.gg/HFhyNaKUB6
			let inflames = require(`./komutlar/${command}`);
			client.commands.set(command, inflames);
			inflames.conf.aliases.forEach(alias => {
				client.aliases.set(alias, inflames.help.name);
			});
			resolve();
		} catch (e) {
			reject(e);
		}
	});
};

client.unload = command => {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(`./komutlar/${command}`)];
			let inflames = require(`./komutlar/${command}`);
			client.commands.delete(command);
			client.aliases.forEach((inflames, alias) => {
				if (inflames === command) client.aliases.delete(alias);
			});
			resolve(); //https://discord.gg/HFhyNaKUB6
		} catch (e) {
			reject(e);
		}
	});
};
//command handler son

//token baş
client.login(token);
//token son

//ayrıntılı hata baş
process.on('warning', e => console.warn(e.stack));
//ayrıntılı hata son