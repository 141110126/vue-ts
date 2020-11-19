// 封装 在localStorage中存取数据
class DataHelper {
    dataKey: string; // localStorage的键
    primaryKey: string; // 每个数据中的id

    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }

    // readData(): 读取本地数据，返回数组
    readData(): any {
        // 读取本地数据
        let strData: string | null = localStorage.getItem(this.dataKey);
        // 将json数据转为数组对象
        let arrData: any = [];
        if (strData != null) {
            arrData = JSON.parse(strData);
        }
        // 返回数组对象
        return arrData;
    }

    // addData(): 新增数据对象，返回自动生成的id
    addData(conStr: string): number {
        // 读取本地数据
        let arr: any = localStorage.getItem(this.dataKey);
        // 创建评论数据对象
        let obj: any = {
            content: conStr
        };
        // 自动生成评论数据对象id
        let newId: number = arr.length > 0? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        // 将id存入对象中
        obj[this.primaryKey] = newId;
        // 添加对象到数组中
        arr.push(obj);
        // 将数组保存到localStorage中
        this.saveData(arr);
        // 返回id
        return newId;
    }

    // saveData()： 存入本地数据
    saveData(arrData: Array<object>): void {
        // 将数组转成json字符串
        let strData: string = JSON.stringify(arrData);
        // 将字符串保存到本地localStorage
        localStorage.setItem(this.dataKey, strData);
    }

    // removeDataById(): 根据id删除数据对象，返回布尔值
    removeDataById(id: string | number): boolean {
        // 获取本地数据
        let arr = this.readData();
        // 查找要删除的对象的id，保存到本地 
        let index = arr.findIndex((ele:any) => {
            return ele[this.primaryKey] == id;
        })
        // 如果id大于-1，则删除数组中对应id的元素，并返回true，否则返回false
        if(index > -1) {
            arr.splice(index, 1);
            this.saveData(arr);
            return true;
        }
        return false;
    }
}