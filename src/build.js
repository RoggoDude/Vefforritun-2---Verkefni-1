import {join} from 'path';
import { writeFile, readFile, readdir} from 'fs/promises';
import { parse } from '../src/parser.js';

import {baseHtml, generateBox, makeDataPage} from './make-html.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

var filenames = [];

async function main() {
    const files = await readdir(DATA_DIR)
    for (const file of files) {
        const path = join(DATA_DIR, file);
        const data = await readFile(path);
        const str = data.toString('utf-8');
        var array = str.trim().split("\n").map(str => str.trim().split(" "));
        const numbs = parse(array);
        const numbfrag = makeDataPage(numbs);
        const html = baseHtml(file, numbfrag)
        const filename = join(OUTPUT_DIR, `${file}.html`)
        filenames.push(file)
        await writeFile(filename, html);
    }
    var content = ``
    for (const name in filenames){
        const filename = filenames[name];
        content = content + generateBox(filename);
    }
    const indx = baseHtml('Gagnavinnsla', content);
    const filename = join(OUTPUT_DIR, 'index.html')
    await writeFile(filename, indx);
}

main().catch((err) => console.error(err));