// fs (file system module)
const {readFile,writeFile} = require('fs') 


// readFile('./content/first.txt','utf8', (err,result) => {
//   if (err) {
//     console.log("this is error");
//   }
//   console.log(result);
// //   if utf-8 provide nhi kiya to result mein  aisa buffer aaiega 
// // <Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
// // readFile('./content/first.txt', 'utf8')  tb jaake proper print hoga 
// })

readFile('./content/first.txt','utf8', (err,result) => {
    if (err) {
      console.log(err);
      return
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err,result) => {
        if (err) {
            console.log(err);
            return
          }
          const second = result;
          writeFile('./content/result-sync.txt',`here comes the ${first} & ${second}`
            ,(err,result) => {
                if (err) {
                    console.log(err);
                    return
                  }
                console.log(result);
            }
          )
    })
  })

  // ye async function hai to agr cnsole log krenge to line wise  nhi aaega phle bahar k execute hogya jisme bina
//   function wale hai log jo phle log honge baaki baaf mein 