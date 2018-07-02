/**
 * 文件内容替换
 */
export default (content, target, replace) => {
    return content.replace(new RegExp(target, 'g'), replace);
};