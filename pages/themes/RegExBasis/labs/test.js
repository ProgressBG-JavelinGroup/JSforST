var url = 'https://domain:11111.com/index.html';
var re = /^https?:\/\/\w+:(\d+)\.(?\w{3})/;
var res = url.match(re);
console.dir(res);

console.log(res[1]);