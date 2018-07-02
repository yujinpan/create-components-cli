import replaceContent from './replace';

const fs = require('fs');

const scriptsArgs = process.env.npm_package_scripts_ng.split(' ').slice(2);

// 空的命令
if (scriptsArgs.length < 2) {
    throw '空的命令!';
}

// 格式化
scriptsArgs.map(function(item, index) {
    scriptsArgs[index] = JSON.parse(item);
});

// 仅支持cloud
if (scriptsArgs[0] !== 'cloud') {
    throw '仅支持cloud命令!';
}

// 获得第二个参数 - 类型 directive/service/factory/provider/controller/app
const projectTypes = ['directive', 'service', 'factory', 'provider', 'controller', 'app'];
const projectType = scriptsArgs[1];
if (projectTypes.indexOf(projectType) === -1) {
    throw '仅支持' + projectTypes.join(',') + '类型';
}

// 获取第三个参数 - 名称 project_name
const projectName = scriptsArgs[2] || 'project_name';

// 读取文件
fs.readFile(__dirname + '/index.js', function(err, data) {
    if (err) {
        throw err;
    }
    console.log(replaceContent(data.toString(), 'const', 'let'));
});