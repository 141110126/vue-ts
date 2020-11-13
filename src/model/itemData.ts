// 一篇笔记的数据
import Category from './CateEnum'
class ItemData {
    id!: number;
    categoryId!: Category;
    title!: string;
    content!: string;
    createTime!: string;

    constructor(id: number = -1, categoryId: Category = -1, title: string = '', content: string = '', createTime: string = '') {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.createTime = this.toSelfDataStr(Date.now());
    }

    // 将时间戳转成日期时间字符串
    toSelfDataStr (timeSpan: number): string {
        let date = new Date(timeSpan);
        let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
        return str;
    }
}
export default Category;