/**
 * 文件内容替换
 */
import componentNames from './name_handle';

export default (content, name) => {
    let nameArr = componentNames.getNameArr(name);
    componentNames.data.forEach((item) => {
        content = content.replace(new RegExp(item, 'g'), componentNames[item](nameArr));
    });
    return content;
};