// const mime = require('mime');
// console.log(mime.getType('./test.ts'));
// console.log(mime.getType('./file.png'));
// console.log(mime.getExtension('text/html'));
// console.log(mime.getExtension('image/jpeg'));
// console.log(mime.getExtension('application/x-www-form-urlencoded'));
// console.log(mime.getExtension('application/form-data'));

// console.log('----------------------------999388366201389579519848'.length);
// console.log('utf-8:',Buffer.from('----------------------------999388366201389579519848','utf8').length);
// console.log('utf16le:',Buffer.from('----------------------------999388366201389579519848','utf16le').length);

// console.log('base64:',Buffer.from('----------------------------999388366201389579519848', 'base64').length);
// console.log('hex:',Buffer.from('----------------------------999388366201389579519848','hex').length);

// console.log('ascii:',Buffer.from('----------------------------999388366201389579519848','ascii').length);
// console.log('binary:',Buffer.from('----------------------------999388366201389579519848','binary').length);

// const uuid = require('uuid');
// console.log(uuid.v1());
// console.log(uuid.v3());
// console.log(uuid.v4());
// console.log(uuid.v5());

const fs = require('fs');
const Path = require('path');
// 总行数
let line = 0;
// 文件数
let file = 0;
run();

async function run(){
    // await test('D:\\Work\\2noomi\\noomi-master\\core');
    await test('D:\\Work\\2noomi\\git本地\\relaents-master\\core');
    console.log(line);
    console.log(file);
};

async function test(path) {
    let state = fs.statSync(path);
    if (state.isDirectory()) {

        let dirs = fs.readdirSync(path);
        for (let d of dirs) {
            if (d === '.DS_Store') {
                continue;
            }
            d = Path.resolve(path,d);
            test(d);
        }
    }
    if (state.isFile()) {
        let fileBuf = fs.readFileSync(path);
        file++;
        for (let i = 0; i < fileBuf.length; i++){
            if (fileBuf[i] === 13 && fileBuf[i+1] === 10) {
                line++;
            } else if(fileBuf[i] === 13) {
                line++;
            } else if (fileBuf[i] === 10) {
                line++;
            }
        }
    }
}