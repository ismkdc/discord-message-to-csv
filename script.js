const messageDivs = document.querySelectorAll('.messageContent__21e69');
let text = '';
messageDivs.forEach(div => text += div.innerText + '\n');

const lines = text.split('\n');
const teams = {};

lines.forEach(line => {
    if (line.trim() === '' || line.includes('@everyone') || line === 'isim;nick;takım' || line === ';;') return;
    const items = line.split('-').map(item => item.trim());
    const name = items[0];
    const team = items[items.length - 1];
    let nick = items.slice(1, -1).join('-');
    teams.hasOwnProperty(team) ? teams[team].push({ name, nick }) : teams[team] = [{ name, nick }];
});

let csvOutput = '';
for (const team in teams) {
    if (teams.hasOwnProperty(team)) {
        const teamMembers = teams[team].map(member => `${member.name};${member.nick};${team}`).join('\n');
        csvOutput += `${teamMembers}\n`;
    }
}

console.log(csvOutput);
