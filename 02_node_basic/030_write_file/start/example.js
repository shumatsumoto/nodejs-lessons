const fs = require('fs')
console.log(__dirname)

fs.writeFileSync(__dirname + '/test.txt', 'hello, shu!!')
