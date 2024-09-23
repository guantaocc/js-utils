/**
 * console.log 自动显示类型、名字、值
 * @param value 值
 * @param name 名字
 */
export const ulg = (value: any, name?: any): any => {
  // tslint:disable-next-line:no-console
  return console.log(`type：${typeof value},`, `name：${name || value},`, 'value:', value);
};


/**
 * 根据URL地址下载
 * @param url 
 * @param name 文件名
 * @returns 
 */
export const utilDownloadByUrl = (url: string | Blob, name?: string): boolean => {
  const isChrome = navigator.userAgent.toLowerCase().includes('chrome');
  const isSafari = navigator.userAgent.toLowerCase().includes('safari');
  let fileUrl = url instanceof Blob ? window.URL.createObjectURL(url) : url;
  if (isChrome || isSafari) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = name ?? '';
      if (document.createEvent) {
          const e = document.createEvent('MouseEvents');
          e.initEvent('click', true, true);
          link.dispatchEvent(e);
          return true;
      }
  }
  if (fileUrl.indexOf('?') === -1) fileUrl += '?download';
  window.open(fileUrl, '_self');
  return true;
};


/**
 * 判断是否滚动到底部
 * @returns {boolean}
 */
export const utilBottomVisible = (ele?: HTMLElement): boolean => {
  if (ele && ele.nodeType === 1) {
      return ele.scrollTop + document.body.clientHeight >= ele.scrollHeight;
  }
  return document.documentElement.clientHeight + window.screenY >= document.documentElement.scrollHeight;
};
