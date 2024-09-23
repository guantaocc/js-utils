/**
 * 两个字的名字中间加空格
 * @param name 姓名
 */
export function strTransformName(name: string) {
  const length = name.length;
  let cname;
  if (length === 2) {
    const splitData = name.split('');
    splitData.splice(1, 0, '　');
    cname = splitData.join('');
  } else {
    cname = name;
  }
  return cname;
}
