import fs from 'fs';


const content = 'I am learning node js.';

fs.writeFileSync('my_note.txt', content);