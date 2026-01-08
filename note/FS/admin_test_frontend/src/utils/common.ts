/**
 * 
 * @param obj 需要深拷贝对象
 * @param exclues 需要排除的字段
 * @returns 
 */


export function deepClone(obj: any, exclues?: string[]): any {
  //检查 obj 是否为 null 或者不是对象类型
  if (obj === null || typeof obj !== 'object') {
      return obj;
  }

  //初始化一个空对象或空数组，用于存储拷贝后的数据。
  const clone: any = Array.isArray(obj) ? [] : {};

  //遍历 obj 的所有属性。
  for (let key in obj) {
    //：检查当前属性是否在 exclues 数组中。
      if (exclues?.includes(key)) 
        continue
      //：如果当前属性是对象或者数组，则递归调用 deepClone 函数，拷贝其内部属性。
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          clone[key] = deepClone(obj[key]);
      }
  }

  return clone;
}

/**
* 处理时间范围查询
* @param dateRange 选择的时间范围 
* @param params 查询参数 
* @returns 
*/

// 对日期数据进行验证是否存在开始和结束得日期数据，如果有则进行处理，查询参数得开始时间和结束时间两个属性被赋值
//否则清空查询条件
export function handleDateRangeChange(dateRange: any, params: any) {
  if (typeof params !== 'object' || params === null || Array.isArray(params)) {
      params = {};
  }
  if (Array.isArray(dateRange) && dateRange.length === 2) {
      params.begin_time = dateRange[0];
      params.end_time = dateRange[1];
      return
  }

  params.begin_time = '';
  params.end_time = '';
}