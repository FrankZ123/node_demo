/**
 * 删除指定后缀文件
 */
const fs = require('fs');
const Path = require('path');

let postfix = [".js", ".map"];
let dir = "C:\\Users\\Frank\\Desktop\\ORM\\relaenNew\\core";
deleteFiles(dir);
console.log("Ok");

function deleteFiles(path) {
    let state = fs.statSync(path);
    if (state.isDirectory()) {
        let dirs = fs.readdirSync(path);
        for (const d of dirs) {
            deleteFiles(Path.resolve(path, d));
        }
    } console.log(Path.extname(path));
    if (state.isFile() && postfix.includes(Path.extname(path))) {
        fs.rmSync(path);
    }
}
