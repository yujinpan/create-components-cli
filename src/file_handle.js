/**
 * 读取实例模板，生成组件包
 */
import replaceContent from './replace';
import componentNames from './name_handle';

const exec = require('child_process').exec;
const fs = require('fs');

/**
 * 入口方法
 * 
 * @param {string} type 组件类型
 * @param {string} name 组件名称
 */
export default (type, name) => {
    let path = __dirname + '/../dist/' + type;
    let examplePath = __dirname + '/../examples/' + type;
    createFiles(examplePath, path, name);
};

/**
 * 生成组件包
 * 
 * @param {string} examplePath 实例文件夹的路径
 * @param {string} path 生成目录文件夹的路径
 */
function createFiles(examplePath, path, name) {

    // 获取文件路径的名称 (projectA => project_a)
    let filealias = componentNames.componentFolderName(componentNames.getNameArr(name));

    // 读取实例文件夹文件
    let files = fs.readdirSync(examplePath);

    // 创建组件文件夹
    fs.mkdirSync(path);
    fs.mkdirSync(path + '/' + filealias);

    // 读写文件
    files.forEach((filename) => {
        let filetype = filename.replace(/^[^.]*/, '');
        fs.readFile(examplePath + '/' + filename, (err, data) => {
            if (err) throw err;
            data = replaceContent(data.toString(), name);

            // 写入文件
            fs.writeFile(path + '/' + filealias + '/' + filealias + filetype, data, () => {
                console.log(filealias + filetype + ' 写入成功');
            });
        });
    });

    // 打开资源文件夹
    exec('start ' + path);
}