/**
 * 对应模板上的待替换名称
 * 对应的方法来获取别名
 */
export default {
    data: ['CloudModule', 'componentName', 'componentFolderName', 'componentClassName', 'componentNameService'],
    getNameArr: getNameArr,
    'CloudModule' (nameArr) {
        return nameArr[0];
    },
    'componentName' (nameArr) {
        return nameArr.join('');
    },
    'componentFolderName' (nameArr) {
        return nameArr.join('_').toLowerCase();
    },
    'componentClassName' (nameArr) {
        return nameArr.join('-').toLowerCase();
    },
    'componentNameService' (nameArr) {
        return nameArr.join('') + 'Service';
    }
};

/**
 * 将驼峰形式名称分割为数据
 * nameArr = ('projectA') => ['project', 'A', '']
 * 
 * @param {string} name 
 */
function getNameArr(name) {
    var text = '';
    var index = 0;
    var nameArrIndex = 0;
    var nameArr = [];
    var item = '';

    // 去掉首字母大写
    if (testUpperCase(name.charAt(0))) {
        let text = name.charAt(0);
        name = text.toLowerCase() + name.slice(1);
    }

    while (index < name.length) {
        text = name.charAt(index);
        if (testUpperCase(text)) {
            nameArrIndex++;
        }
        item = nameArr[nameArrIndex];
        nameArr[nameArrIndex] = (item || '') + text;
        index++;
    }

    return nameArr;
}

/**
 * 校验是否大写
 * 
 * @param {string} text 
 */
function testUpperCase(text) {
    return /[A-Z]/.test(text);
}