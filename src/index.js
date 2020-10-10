const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function getMorseCodeStr(codeStr, digitCode) {
    let result = '';

    switch (digitCode) {
        case '10':
            result = '.';
            break;
        case '11':
            result = '-';
            break;
    }

    return codeStr + result;
}

function addSymbol(str, symbolCode) {
    let result = ' ';

    if (symbolCode !== '**********') {
        const morseCode = [];
        for (let i = 0; i < 5; i++) {
            morseCode[i] = symbolCode.slice(i * 2, (i + 1) * 2);
        }
        const morseCodeStr = morseCode.reduce(getMorseCodeStr, '');
        result = MORSE_TABLE[morseCodeStr];
    }

    return str + result;
}

function decode(expr) {
    const symbolsAmount = expr.length / 10;
    const symbols = [];
    for (let i = 0; i < symbolsAmount; i++) {
        symbols[i] = expr.slice(i * 10, (i + 1) * 10);
    }
    return symbols.reduce(addSymbol, '');
}

module.exports = {
    decode
}