// 封装 在localStorage中存取数据
class DataHelper {
    dataKey: string; // localStorage的键
    primaryKey: string; // 每个数据中的id

    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }

    // readData(): 读取本地数据，返回数组

    // addData(): 新增数据对象，返回自动生成的id

    // saveData()： 存入本地数据

    // removeDataById(): 根据id删除数据对象，返回布尔值
    
}