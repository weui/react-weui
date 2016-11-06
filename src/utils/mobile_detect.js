import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);

module.exports = {
  iOSVer: md.version('iOS') ? md.version('iOS') : null,
  androidVer : md.version('Android') ? md.version('Android') : null,
  isIOS : md.os() === 'iOS',
  isIOS8 : md.os() === 'iOS' && parseFloat(md.version('iOS')) >= 8 && parseFloat(md.version('iOS')) < 9,
  isIOS9 : md.os() === 'iOS' && parseFloat(md.version('iOS')) >= 9 && parseFloat(md.version('iOS')) < 10,
  isIOS10 : md.os() === 'iOS' && parseFloat(md.version('iOS')) >= 10 && parseFloat(md.version('iOS')) < 11,
  isAndroid : md.os() === 'AndroidOS',
  isWindow: md.os() === 'WindowsMobileOS' || md.os() === 'WindowsPhoneOS',
  isMobile: md.mobile() !== null ? true : false,
  isWechat: md.match('MicroMessenger') ? true : false,
  wechatVer: md.version('MicroMessenger') ? md.version('MicroMessenger') : null,
};