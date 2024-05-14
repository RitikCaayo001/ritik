// path module
const path = require('path')


// to access the folder path which you want 
const filePath = path.join('content','subfolder','text.txt')
console.log(filePath);
// output : content\subfolder\text.txt


// and accessing the content of the above folder by this method
const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute);