/**
 * 对应模板上的待替换名称
 * 对应的方法来获取别名
 */
export default {
    data: ['componentName', 'componentFolderName', 'componentClassName'],
    getNameArr: getNameArr,
    componentName(nameArr) {
        return nameArr.join('');
    },
    componentFolderName(nameArr) {
        return nameArr.join('_').toLowerCase();
    },
    componentClassName(nameArr) {
        return nameArr.join('-').toLowerCase();
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
        let text = nameArr.slice(0, 1);
        nameArr = text.toLowerCase() + nameArr.slice(1);
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