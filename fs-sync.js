// fs (file system module)
const {readFileSync,writeFileSync} = require('fs') 


// 'utf-16le' == 敨汬⁯桴獩椠⁳楦獲⁴整瑸映汩   lang change
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log( first,second);
 
// writefilesync se file mein write kr skte kuch bhi
writeFileSync('./content/result-sync.txt',`here comes the ${first} & ${second}`
    ,{flag:'a'}
)


// ye sync function hai to agr cnsole log krenge to line wise aaega jo jaha console hai but async function mein 
// aisa nhi hoga