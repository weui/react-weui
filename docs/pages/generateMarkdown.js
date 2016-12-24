/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function stringOfLength(string, length) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    newString += string;
  }
  return newString;
}

function generateTitle(name, version) {
  var title = '`' + name + '` !['+name+'](https://img.shields.io/badge/react--weui-'+version+'-brightgreen.svg)';
  return title + '\n' + stringOfLength('=', title.length) + '\n';
}

function generateDesciption(description) {
  return description + '';
}

function generatePropType(type) {
  var values;
  if (Array.isArray(type.value)) {
    values = '(' +
      type.value.map(function(typeValue) {
        return typeValue.name || typeValue.value;
      }).join(',') +
      ')';
  } else {
    values = type.value;
  }

  return ' `' + type.name + (values ? values: '') + '`';
}

function generatePropDefaultValue(value) {
  return value.value.length < 10 ? '`' + value.value + '`' : '';
}

function generateProp(propName, prop, langs) {
  return (
    '| `' + propName + '`' + (prop.required ? ` (${langs.required})` : '') + '|' +
    (prop.type ? generatePropType(prop.type) : '') + '|' +
    (prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : '') + '|' +
    (prop.description ? prop.description : '') +  '|'
  );
}

function generateProps(props, langs) {
  if(!props || Object.keys(props).length == 0) return (`### ${langs.noprop}`);
  var title = langs.props;

  return (
    '\n## ' + title + '\n\n' +
    `| ${langs.name} | ${langs.type} | ${langs.default} | ${langs.details} |` + '\n' + '|-----|-----|--------|--------|' +
    '\n' +
    Object.keys(props).sort().map(function(propName) {
      return generateProp(propName, props[propName], langs);
    }).join('\n')
  );
}

function generateMarkdown(name, version, reactAPI, langs) {
  var markdownString =
    generateTitle(name, version) + '\n' +
    generateDesciption(reactAPI.description) + '\n' +
    generateProps(reactAPI.props, langs);

  return markdownString;
}

module.exports = generateMarkdown;