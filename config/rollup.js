var pkg = require('../package.json');

// 兼容 ajax 和 @jsmini/ajax，@jsmini/ajax 替换为 jsmini_ajax
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * ajax ${version} (https://github.com/jsmini/ajax)
 * API https://github.com/jsmini/ajax/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/ajax/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
