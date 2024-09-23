/**
 * 判断对象是否为空（已判空）
 * @param obj
 */
export const objIsNull = (obj: object): boolean => {
  let result: boolean;
  if (obj && Object.keys(obj).length > 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};


/**
 * 获取一个对象的类型
 * @param obj
 * @param type
 */
type Fn = (obj: any, type?: string) => string | boolean
export const getObjType: Fn = (obj, type = '') => {
    const result = Object.prototype.toString.call(obj).slice(8, -1);
    return type ? result === type : result;
};
