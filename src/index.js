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

const MORSE_TABLE2 = {
    '**********': ' ',
};

for (key in MORSE_TABLE) {
    MORSE_TABLE2[encode(key)] = MORSE_TABLE[key];
}

function encode(key) {
    return key
            .split('')
            .map(ch => {
                switch (ch) {
                    case '.': return '10';
                    case '-': return '11';
                    default: throw(new Error(`Bad data in MORSE_TABLE key ${key}`))
                }
            })
            .join('')
            .padStart(10, '0');
}

function decode(expr) {
    const result = [];
    for (i = 0; i < expr.length; i += 10) {
        result.push(MORSE_TABLE2[expr.slice(i, i + 10)]);
    }
    return result.join('');
    // write your solution here
}

module.exports = {
    decode
}