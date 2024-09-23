import { getObjType } from '../object';

/**
 *
 * @param date
 * @param tz
 * @returns
 */
export const formatTimeZone = (date: string | Date, tz: string): string =>
  new Date(date || Date.now()).toLocaleString('en-US', { timeZone: tz || 'Asia/Shanghai' });

interface Options {
  'm+': number;
  'd+': number;
  'h+': number;
  'M+': number;
  's+': number;
  'q+': number;
  S: number;
}

/**
 *
 * @param format yyyy.mm.dd hh:MM:ss
 * @param date
 * @param tz
 * @returns
 */
export const formatDate = (format?: string, date?: string | number | Date, tz?: string): string => {
  let fmt = format || 'yyyy.mm.dd hh:MM:ss';
  let de = date ? (getObjType(date, 'Date') ? (date as Date) : new Date(date)) : new Date();
  if (tz) de = new Date(de.toLocaleString('en-US', { timeZone: tz }));
  // let fmt = str;
  const options: Options = {
    'm+': de.getMonth() + 1,
    'd+': de.getDate(),
    'h+': de.getHours(),
    'M+': de.getMinutes(),
    's+': de.getSeconds(),
    'q+': Math.floor((de.getMonth() + 3) / 3),
    S: de.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, `${de.getFullYear()}`.substring(4 - RegExp.$1.length));
  for (const k in options) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const $1 = RegExp.$1;
      fmt = fmt.replace(
        $1,
        $1.length === 1
          ? `${options[k as keyof Options]}`
          : `00${options[k as keyof Options]}`.substring(`${options[k as keyof Options]}`.length),
      );
    }
  }

  return fmt;
};
