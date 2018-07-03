/**
 * 读取实例模板，生成组件包
 */
import replaceContent from './replace';
import componentNames from './name_handle';

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
 * 生成组件包 - **需要重构**
 * 
 * @param {string} examplePath 实例文件夹的路径
 * @param {string} path 生成目录文件夹的路径
 */
function createFiles(examplePath, path, name) {
    let filealias = componentNames.componentFolderName(componentNames.getNameArr(name));
    // 读取实例文件夹文件
    fs.readdir(examplePath, (err, files) => {
        if (err) throw err;
        // 创建组件文件夹
        fs.mkdir(path, (err) => {
            if (err) throw err;
            fs.mkdir(path + '/' + filealias, (err) => {
                if (err) throw err;
                files.forEach((filename) => {
                    let filetype = filename.replace(/^[^.]*/, '');
                    // 读取文件内容
                    fs.readFile(examplePath + '/' + filename, (err, data) => {
                        if (err) throw err;
                        data = replaceContent(data.toString(), name);
                        // 写入文件
                        fs.writeFile(path + '/' + filealias + '/' + filealias + filetype, data, () => {
                            console.log(filealias + filetype + ' 写入成功');
                        });
                    });
                });
            });
        });
    });
}