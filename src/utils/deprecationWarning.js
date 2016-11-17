import warning from 'warning';

const warned = {};

export default function deprecationWarning(oldname, newname, link) {
  //avoid test warnings
  if(typeof global.it === 'function') return;

  const warnKey = `${oldname}\n${newname}`;
  if (warned[warnKey]) {
    return;
  }

  let message = `[React-WeUI] ${oldname} is deprecated. Use ${newname} instead. ${oldname} will be remove in the next major version.`;

  if (link) {
    message += `\nYou can read more about it at \n${link}`;
  }

  warning(false, message);
  warned[warnKey] = true;
}