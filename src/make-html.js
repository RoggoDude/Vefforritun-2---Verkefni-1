import { variance, stdev } from 'stats-lite';

export function makeDataPage(numbs) {
    const varia = variance(numbs);
    const max = Math.max(...numbs);
    const mean = numbs[Math.floor(numbs.length/2)];
    const min = Math.min(...numbs);
    const dev = stdev(numbs);
    const sum = numbs.reduce((partialSum, a) => partialSum + a, 0);;
    const median = sum/numbs.length;
    const range = min.toString()+' to '+ max.toString();

    return `
    <a href="index.html">Aftur á forsíðu</a>
    <div class="calcs">
        <p>Variance: ${varia}</p>
        <p>Max: ${max}</p>
        <p>Mean: ${mean}</p>
        <p>Median: ${median}</p>
        <p>Min: ${min}</p>
        <p>Stdev: ${dev}</p>
        <p>Sum: ${sum}</p>
        <p>Range: ${range}</p>
    </div>
    <div class="numbs">
    <p>Data<p>
    <p>${numbs}</p>
    </div>
    `;
}

export function baseHtml(title, content){
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <title>${title}</title>
    </head>
    <body>
        ${content}
    </body>

    </html>`
}

export function generateBox(title){
    return `<a class="databutton" href="${title}.html">${title}</a>
    `
}