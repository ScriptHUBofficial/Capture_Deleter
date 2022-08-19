const fs = require('fs');
const prompt = require('prompt-sync')();

console.clear()
    console.log(`

    ▄██   ▄   ███    █▄  ███▄▄▄▄      ▄████████    ▄█   ▄█▄ 
    ███   ██▄ ███    ███ ███▀▀▀██▄   ███    ███   ███ ▄███▀ 
    ███▄▄▄███ ███    ███ ███   ███   ███    ███   ███▐██▀   
    ▀▀▀▀▀▀███ ███    ███ ███   ███   ███    ███  ▄█████▀    
    ▄██   ███ ███    ███ ███   ███ ▀███████████ ▀▀█████▄    
    ███   ███ ███    ███ ███   ███   ███    ███   ███▐██▄   
    ███   ███ ███    ███ ███   ███   ███    ███   ███ ▀███▄ 
     ▀█████▀  ████████▀   ▀█   █▀    ███    █▀    ███   ▀█▀ 
                                                  ▀             
                                        CrackTurkey.com
`);

const combosec = prompt('Select a combolist to use: ');
let combolist2;
combolist2 = combosec.replace('"', '').replace('"', '');
let combolist = fs.readFileSync(combolist2, 'utf8').split('\n').map(x => x);

for (let i = 0; i < combolist.length; i++) {
    setTimeout(() => {
    let combo = combolist[i].split(':')

    let email = combo[0]
    let password = combo[1].split(' ')[0];

    let delcapture = `${email}:${password}`;
     fs.appendFileSync(`output.txt`, `${delcapture}` + '\n')
     
     console.clear()
     console.log(`
 
     ▄██   ▄   ███    █▄  ███▄▄▄▄      ▄████████    ▄█   ▄█▄ 
     ███   ██▄ ███    ███ ███▀▀▀██▄   ███    ███   ███ ▄███▀ 
     ███▄▄▄███ ███    ███ ███   ███   ███    ███   ███▐██▀   
     ▀▀▀▀▀▀███ ███    ███ ███   ███   ███    ███  ▄█████▀    
     ▄██   ███ ███    ███ ███   ███ ▀███████████ ▀▀█████▄    
     ███   ███ ███    ███ ███   ███   ███    ███   ███▐██▄   
     ███   ███ ███    ███ ███   ███   ███    ███   ███ ▀███▄ 
      ▀█████▀  ████████▀   ▀█   █▀    ███    █▀    ███   ▀█▀ 
                                                   ▀             
                                         CrackTurkey.com
 `);
console.log(`[${i + 1}/${combolist.length}] ${delcapture}`);
    }, 100 * i);
}
