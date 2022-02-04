import isNumber from 'is-number';

export function parse(input){
    var numbs = [];
    for (const i in input){
        var numb = input[i][0];
        const boo = isNumber(numb);
        if(boo){
            numbs.push(parseFloat(numb));
        }
    }
    return numbs;
}