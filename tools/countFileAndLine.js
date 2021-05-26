/**
 * 统计文件夹代码文件数和代码总行数
 */

const fs = require('fs');
const Path = require('path');

// 总行数
let line = 0;
// 文件数
let file = 0;
test('D:\\Work\\2noomi\\noomi-master\\core').then(() => {
    console.log(line);
    console.log(file);
});

async function countFileAndLine(path) {
    let state = fs.statSync(path);
    if (state.isDirectory()) {

        let dirs = fs.readdirSync(path);
        for (let d of dirs) {
            if (d === '.DS_Store') {
                continue;
            }
            d = Path.resolve(path, d);
            countFileAndLine(d);
        }
    }
    if (state.isFile()) {
        let fileBuf = fs.readFileSync(path);
        file++;
        for (let i = 0; i < fileBuf.length; i++) {
            if (fileBuf[i] === 13 && fileBuf[i + 1] === 10) {
                line++;
            } else if (fileBuf[i] === 13) {
                line++;
            } else if (fileBuf[i] === 10) {
                line++;
            }
        }
    }
}