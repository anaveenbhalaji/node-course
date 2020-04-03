const fs = require('fs')
fs.writeFileSync('textFile.txt','This is my first line. ')
fs.appendFileSync('textFile.txt','This is the continuation......')