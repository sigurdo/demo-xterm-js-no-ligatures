import { Terminal } from 'xterm';

// let resolution = [30000, 15000];
let font_size = 20;
let columns = 140;
let rows = 70;

// let font_size = Math.floor(resolution[1] / rows);
let resolution = [font_size / 2 * columns, font_size * rows];

let terminal_element = document.querySelector('#terminal');
terminal_element.style.width = resolution[0] + 'px';
terminal_element.style.height = resolution[1] + 'px';
let terminal = new Terminal({
    fontSize: font_size,
    fontFamily: "Fira Code",
    theme: {
        background: '#272822'
    },
    cols: columns,
    rows: rows,
    convertEol: true,
    disableStdin: true,
});
console.log(terminal.cols);
terminal.open(terminal_element);
// Hide terminal cursor
terminal.write('\x1b[?25l');
terminal.write('===');
