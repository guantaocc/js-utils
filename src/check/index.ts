import {getObjType} from '../object';


/**
 * 验证url
 * @param url
 * @returns {boolean}
 */
const checkUrl = (url: string): boolean=> {
  // const urlReg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  const urlReg = /^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  return urlReg.test(url);
};

/**
 * 验证车牌
 * @param plateNumber
 * @returns {boolean}
 */
const checkPlateNumber = (plateNumber: string): boolean => {
  const plateNumberReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
  return plateNumberReg.test(plateNumber);
};


/**
 * 验证手机号
 * @param phone
 * @returns {boolean}
 */
const checkPhoneNumber = (phone: string): boolean => {
  const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  return phoneReg.test(phone);
};



// 验证密码
// good // 弱：纯数字，纯字母
const checkPassword = (str: string): boolean => (/^(?:\d+|[a-zA-Z]+|[!@#$%^&*`()\-+=_?.,~]+)$/).test(str);
// better // 中：字母+数字，字母+特殊字符，数字+特殊字符
const checkPasswordBetter = (str: string): boolean => (/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*`()\-+=_?.,~]+$)[a-zA-Z\d!@#$%^&*`()\-+=_?.,~]+$/).test(str);
// best // 强：字母+数字+特殊字符
const checkPasswordBest = (str: string): boolean => (/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*`()\-+=_?.,~]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*`()\-+=_?.,~]+$)(?![\d!@#$%^&*`()\-+=_?.,~]+$)[a-zA-Z\d!@#$%^&*`()\-+=_?.,~]+$/).test(str);


/**
 * 强密码最少八位、要包含大小写、特殊字符、数字
 * @param str 密码
 * @returns 
 */
const checkPasswordStonger = (str: string) : boolean => /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,}$/.test(str)

/**
 * 检查数据类型
 * @param obj
 * @param type
 */
type Fn = (obj: any, type: string) => boolean
const checkObjType: Fn = (obj, type) => (getObjType(obj) as string).toLowerCase() === type.toLowerCase();


/**
 * 验证身份证
 * @param IDCard
 * @returns {boolean}
 */
const checkIDCard = (IDCard: string): boolean => {
  const IDCardReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return IDCardReg.test(IDCard);
};


/**
 * 验证邮箱
 * @param email
 * @returns {boolean}
 */
const checkEmail = (email: string): boolean => {
  // const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const emailReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return emailReg.test(email);
};

// 验证统一社会信用代码
const checkCreditCode: (value: string) => boolean = value => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);


/**
 * 验证16进制颜色
 * @param color
 * @returns {boolean}
 */
const checkColor16 = (color: string): boolean => {
  const color16Reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return color16Reg.test(color);
};

export {
  checkColor16,
  checkCreditCode,
  checkEmail,
  checkPhoneNumber,
  checkIDCard,
  checkUrl,
  checkPlateNumber,
  checkObjType,
  checkPasswordStonger
};
