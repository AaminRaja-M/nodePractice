// ^ global object

// console.log(global);
// globalThis.setTimeout(() => {
//     console.log('This is a setTimeout');
// }, 2000)
// globalThis.setInterval(() => {
//     console.log('This is setInterval');
// }, 2000)

// console.log(module);

// ! Modules

// ^ local modules

// ?
// let math = require('./math')
// console.log(math);
// math.addition(1, 2);

// ?
// let math = require('./math')
// math.addition(1, 2)

// ?
// let math = require('./math')
// math.subtraction(20, 1)

// ?
// let {mathOperations} = require('./math')
// mathOperations.subtraction(3, 20)
// mathOperations.addition(1, 2, 3)
// mathOperations.multiplication(2, 3)

// ^ core modules

// & os module

// let os = require('os')
// console.log(os);

// console.log(os.arch()); //returns the cpu architecture of oprating system
// console.log(os.freemem()); //returns the free memory space system
// console.log(os.totalmem()); //returns totak mem
// console.log(os.networkInterfaces()); //returns the list of network iinterfaces
// console.log(os.platform()); //returns the platform of os
// console.log(os.hostname()); //returns the hostname of system
// console.log(os.tmpdir()); //returns the default directory for temp files
// console.log(os.type()); //Windows_NT
// console.log(os.cpus());
// console.log(os.userInfo()); //returns information about user
// console.log(os.release()); //10.0.22631

// & path

// let path = require('path')
// console.log(path);

// console.log(path.basename('/home/user/Documents/Apple.js')); //Apple.js
// console.log(path.basename('/home/user/Documents/Apple.js', '.js')); //Apple
// console.log(path.basename('/home/user/Documents/Apple.js', '.html')); //Apple.js
// console.log(path.dirname('/home/user/Documents/Apple.js')); ///home/user/Documents
// console.log(path.extname('/home/user/Documents/Apple.js')); //.js
// console.log(path.extname('/home/user/Documents/Apple.html')); //html
// console.log(path.extname('/home/user/Documents/Apple'));

// * path.format()

// let res1 = path.format({
//     dir:'/C',
//     root:'/user/windows',
//     base:'/admin',
//     name:'index',
//     ext:'.html'
// })
// console.log(res1); ///C\/admin

// let res2 = path.format({
//     root:'/c/users/window',
//     base:'/admin',
//     ext:'html'
// })
// console.log(res2); ///c/users/window/admin

// let res3 = path.format({
//     root:'/users/window',
//     base:'/admin/index',
//     ext:'html'
// })
// console.log(res3); // /users/window/admin/index

// * join

// console.log(path.join('/c/users/window', '/admin', '.html')); //\c\users\window\admin\html
// console.log(path.join('/c/users/window', '/admin', '.html')); //\c\users\window\admin\.html
// console.log(path.join('c/home/user', '/admin/index', '.js')); //c\home\user\admin\index\.js
// console.log(path.join('c/home/user', '', '', 'index.html')); //c\home\user\index.html

// & queryString

// let queryString = require('querystring')
// let url = require('url')

// console.log(queryString);
// console.log(url);

// let parseUrl = url.parse('https://in.linkedin.com/company/credapp')
// console.log(parseUrl);
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'in.linkedin.com',
//     port: null,
//     hostname: 'in.linkedin.com',
//     hash: null,
//     search: null,
//     query: null,
//     pathname: '/company/credapp',
//     path: '/company/credapp',
//     href: 'https://in.linkedin.com/company/credapp'
// }

// let parseString = queryString.parse(parseUrl.queryString)
// console.log(parseString);

// console.log(parseUrl.href); //https://in.linkedin.com/company/credapp
// console.log(parseUrl.hostname); //in.linkedin.com

// let exampleUrl2 = new URL('https://api.github.com/users', 'http://api.github.com/users')
// console.log(exampleUrl2);

// & Assert module

// let assert = require('assert')
// console.log(assert);

// let a = 10, b = 20;
// assert(a<b) //nothing, beacause of no error
// assert(a>b) //The expression evaluated to a falsy value

// try{
//     assert(a>b)
// }catch(error){
//     console.log('there is a error in your condition');
// } //there is a error in your condition

// function add(x, y){
//     return x+y
// }
// let expValue = add(a, b)
// console.log(expValue);
// assert(expValue == 40, 'expected value is not equal to actual value') //expected value is not equal to actual valueexpected value is not equal to actual value
// assert(expValue == 30, 'expected value is not equal to actual value') //nothing is returning

// assert.ok(expValue == 20, 'expected value is not equal to actual value') // expected value is not equal to actual value
// assert.equal(expValue == 20, 'expected value is not equal to actual value') //false == 'expected value is not equal to actual value'
// assert.equal(expValue, 20, 'expected value is not equal to actual value') //expected value is not equal to actual value
// assert.notEqual(expValue == 20, 'expected value is not equal to actual value') //nothing
// assert.notEqual(expValue, 30, 'expected value is not equal to actual value') //expected value is not equal to actual value

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [1, 2, 3, 4, '5']

// assert.deepEqual(arr1, arr2, 'Actual value is not equal to expected value') //nothing
// assert.deepStrictEqual(arr1, arr2, 'Actual value is not equal to expected value') //Actual value is not equal to expected value
// assert.notDeepEqual(arr1, arr2, 'Actual value is not equal to expected value') // Actual value is not equal to expected value
// assert.notDeepStrictEqual(arr1, arr2, 'Actual value is not equal to expected value') //nothing

// & file system

// const { error, log } = require('console')
// let fs = require('fs')
// console.log(fs);

// ~ Writing
// let res = fs.writeFileSync('write.txt', 'this is a new file for writing , created by synchronous file writing approach of fs module')
// console.log(res); //undefiined

// fs.writeFile('asyncWrite.txt', 'this is new file by asynchronous write', (err, res) => {
//     if (err) throw error
//     console.log('Hi I am non blocking code');
// })

// fs.writeFileSync('dummy.html', 'dummy file for delete in the end')
// fs.writeFile('dummy2.html', 'dummy2 file for delete in the end', (err, res) => {
//     if(err) throw error
//     console.log('file created');
// })

// ~ Reading

// let res = fs.readFileSync('write.txt', 'utf-8')
// console.log(res); //this is a new file for writing , created by synchronous file writing approach of fs module

// fs.readFile('asyncWrite.txt', 'utf-8', (err, res) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(`result is ${res}`);
//     }
// }) //result is this is new file by asynchronous write

// ~ append

// fs.appendFileSync('write.txt', '\nLayla is beautiful')
// fs.appendFile('asyncWrite.txt', '\nIndia will win the ICC world cup', (err, res) => {
//     if (err) throw error
// })

// ~ delete

// fs.unlinkSync('dummy.html')
// fs.unlink('dummy2.html' , ((err, res) => {
//     if(err) throw error
//     console.log('delete successfully');
// }))

// fs.unlink('dummy2.html', (err, re) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('deleted');
//     }
// })

// ~ copying

// fs.cpSync('write.txt', 'asyncWrite.txt')
// fs.copyFileSync('write.txt', 'asyncWrite.txt')\

// fs.cp('write.txt', 'asyncWrite.txt', (err, res) => {
//     if (err) throw error
//     console.log('copied');
// })
// fs.copyFile('write.txt', 'asyncWrite.txt', (err, res) => {
//     if(err) throw error;
//     console.log('copied');
// })

// ~ mkdir

// fs.mkdir('doc', (err, res) => {
//     if(err) throw error
//     console.log('created');
// })

// fs.mkdirSync('docs')

// & Events module

// const EventEmitter = require('events')

// const Math = require('./math')
// let math = new Math()

// // Register a listener
// math.on('makeAnEvent', (e) => {
//     console.log('Listener-1 called', e);
// })

// // emitter.addListener('makeAnEvent', (arg) => {
// //     console.log('Listener-2 called', arg);
// // })

// // ? both emitter.on and emitter.addListener doing same job

// math.log('message')



// & http

// let http = require('http')
// // console.log(http);

// let server = http.createServer((request, respond) => {
//     respond.write("hiii I am Server")
//     respond.end("\nI am end")
// })

// server.listen(5000, (err, res) => {
//     if (err) throw new error
//     console.log('server is running at port : http://localhost:5000');
// })

// ?

// let http = require('http')
// let data = require('./MOCK_DATA.json')
// // console.log(data);
// let server = http.createServer((req, res) => {
//     res.write('<html><body><h1>Hi I am h1 tag</h1></body></html>')
//     res.write(JSON.stringify(data))
//     res.write('<html><body><h2>Hi I am h1 tag</h2></body></html>')
//     res.end()
// })
// server.listen(5000, (error, res) => {
//     if (error) throw new error
//     console.log('Server is at port:http://localhost:5000');
// })

// ?

// let http = require('http')
// let server = http.createServer((req, res) => {

// })

// const { error } = require('console');
// let http = require('http');
// let server = http.createServer((req, res) => {
//     if(req.url = '/'){
//         res.write('Hello World')
//         res.end()
//     }else if(req.url = '/numbers'){
//         res.write(JSON.stringify([1, 2, 3]))
//         res.end()
//     }
// });

// server.listen(3000, (err, res) => {
//     if(err) throw new error
//     console.log('server is running at port : http://localhost:3000');
// })

// ?

// const { write } = require('fs')
// let http = require('http')
// let server = http.createServer((req, res) => {
//     res.writeHead(200, {"content-type":"text/html"})
//     res.write('Hi I am server')
//     res.write('<h1>Hiiiii</h1>')
//     res.end()
// })

// server.listen(5000, (err, res) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('server is running at port : http://localhost:5000');
//     }
// })

// ? 

// const { error } = require('console')
// let http = require('http')
// let server = http.createServer((req, res) => {
//     res.writeHead(200, {"content-type":"text/html"})
//     res.write('Hi I am server')
//     res.write('<h1>Hiiiii</h1>')
//     res.write('<img src="https://icdn.benchwarmers.ie/wp-content/uploads/2023/11/al-nassr-v-al-khaleej-saudi-pro-league-1-900x600.jpg"/>')
//     res.end()
// })

// server.listen(5000, (err, res) => {
//     if(err) throw error
//     console.log('server is running at port : http://localhost:5000');
// })

// ? 

// const { error } = require('console')
// let http = require('http')
// server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type':'application'})
//     let obj = {
//         name:'Shunakan'
//     }
//     res.write(JSON.stringify(obj))
//     res.end()
// })

// server.listen(5000, (err, res) => {
//     if(err) throw error
//     console.log('server is running at port : http://localhost:5000');
// })

// ? Routing without using any external files

// const { error } = require('console')
// let http = require('http')
// let server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         res.writeHead(200, {'content-type':'text/html'})
//         res.write('<h1>This is home page</h1>')
//         res.end()
//     }else if(req.url == '/contact'){
//         res.writeHead(200, {'content-type':'text/html'})
//         res.write('<h1>This is contact page</h1>')
//         res.end()
//     }
//     else if(req.url == '/about'){
//         res.writeHead(200, {'content-type':'text/html'})
//         res.write('<h1>This is about page</h1>')
//         res.end()
//     }else if(req.url == '/login'){
//         res.writeHead(200, {'content-type':'text/html'})
//         res.write('<h1>This is login page</h1>')
//         res.end()
//     }else if(req.url == '/signin'){
//         res.writeHead(200, {'content-type':'text/html'})
//         res.write('<h1>This is signin page</h1>')
//         res.end()
//     }else if(req.url == '/checking'){
//         res.writeHead(200, {'content-type':'text/html'})
//         res.write('<h1>This is checking page</h1>')
//         res.end()
//     }
// })

// server.listen(5000, (err, res) => {
//     if(err) throw error
//     console.log('server is running at port : http://localhost:5000');
// })

// ? Routing reading file

// const { error } = require('console')
// const { readFileSync } = require('fs')
// let http = require('http')
// let server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         res.setHeader('content-type', 'text/html')
//         res.statusCode = 200
//         let readFileData = readFileSync('./htmlFiles/home.html', 'utf-8')
//         res.write(readFileData)
//         res.end()
//     }else if(req.url == '/about'){
//         res.setHeader('content-type', 'text/html')
//         res.statusCode = 200;
//         let readFileData = readFileSync('./htmlFiles/about.html', 'utf-8')
//         res.write(readFileData);
//         res.end()
//     }else if(req.url == '/contact'){
//         res.setHeader('content-type', 'text/html')
//         res.statusCode = 200;
//         let readFileData = readFileSync('./htmlFiles/contact.html', 'utf-8')
//         res.write(readFileData);
//         res.end()
//     }else if(req.url == '/login'){
//         res.setHeader('content-type', 'text/html')
//         res.statusCode = 200;
//         let readFileData = readFileSync('./htmlFiles/login.html', 'utf-8')
//         res.write(readFileData);
//         res.end()
//     }else if(req.url == '/signin'){
//         res.setHeader('content-type', 'text/html')
//         res.statusCode = 200;
//         let readFileData = readFileSync('./htmlFiles/signin.html', 'utf-8')
//         res.write(readFileData);
//         res.end()
//     }else if(req.url == '/checking'){
//         res.setHeader('content-type', 'text/html')
//         res.statusCode = 200;
//         let readFileData = readFileSync('./htmlFiles/checking.html', 'utf-8')
//         res.write(readFileData);
//         res.end()
//     }
// })

// server.listen(5000, (err, res) => {
//     if(err) throw error
//     console.log('server is running at port : http://localhost:5000');
// })

// & api

// const { error } = require('console')
// let http = require('http')
// let server = http.createServer((req, res) => {
//     res.setHeader('content-type', 'application/json')
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.statusCode = 200

//     let Employee = [
//         {
//             emp_name : 'Irfan',
//             emp_id : 101,
//             emp_location : 'Banglore'
//         },
//         {
//             emp_name : 'Sahana',
//             emp_id : 102,
//             emp_location : 'Mumbai'
//         },
//         {
//             emp_name : 'Sneha',
//             emp_id : 103,
//             emp_location : 'Mysuru'
//         },
//         {
//             emp_name : 'Prathap',
//             emp_id : 104,
//             emp_location : 'Kolkata'
//         }
//     ]

//     res.write(JSON.stringify(Employee))
//     res.end()
// })

// server.listen(5000, (err, res) => {
//     if(err) throw error
//     console.log('server is running at port : http://localhost:5000');
// })

// ? checking

// const { error } = require('console');
// const http = require('http');

// const employees = [
//     { emp_name: 'Irfan', emp_id: 101, emp_location: 'Bangalore' },
//     { emp_name: 'Sahana', emp_id: 102, emp_location: 'Mumbai' },
//     { emp_name: 'Sneha', emp_id: 103, emp_location: 'Mysuru' },
//     { emp_name: 'Prathap', emp_id: 104, emp_location: 'Kolkata' }
// ];

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.statusCode = 200;
//     res.end(JSON.stringify(employees));
// });

// server.listen(5000, (err) => {
//     if(err) throw error;
//     console.log('server is running at port : http://localhost:5000');
// });

// & super hero

// const superHero = require('./superHero')
// console.log(superHero.getName());
// console.log(superHero.getName());

// ? with express

// const express = require('express');
// const app = express();

// app.get('/data', (req, res) => {
//   res.json({ message: 'Hello, world!' });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// & json data
// let data = require('./sample-data.json')
// console.log(data);
// let http = require('http')
// let server = http.createServer((req, res) => {
//   res.setHeader('content-type', 'json/application')
//   res.setHea
// })

// & Reading frolm form

// let http = require('http')
// let fs = require('fs');
// const { error } = require('console');

// let server = http.createServer((req, res) => {
//     if(req.method === 'POST'){
//         collectReqData(req, (result) => {
//             console.log('Received POST data:', result);
//             res.end('Data received')
//         })
//     }else{
//         res.writeHead(200, {'content-type': 'text:html'})
//         fs.createReadStream('./loginForm.html', 'utf-8').pipe(res)
//     }
// })

// let collectReqData = (request, callback) => {
//     let form_URLENCODED = 'application/x-www-form-urlencoded'
//     if(request.headers['content-type'] === form_URLENCODED){
//         let body = '';
//         request.on('data', chunk => {
//             body += chunk.toString()
//         })
//         request.on('end', error => {
//             callback(body)
//         })
//     }else{
//         callback(null)
//     }
// }

// server.listen(5100, (err) => {
//     if(err) throw error;
//     console.log('sever is running at port : http://localhost:5100');
// })

// & Third party module
// ? node mailer

// let nodemailer = require('nodemailer')
// let transporter = nodemailer.createTransport({
//   service:'gmail',
//   auth : {
//     user:"aaminrajam@gmail.com",
//     pass:"trhu valc gege hewz"
//   }
// })

// async function main(){
//   const info = await transporter.sendMail({
//     from:'aaminrajam@gmail.com',
//     to:'aaminraja21@gmail.com',
//     subject:'Mail Sending',
//     text:'Hello how are you',
//     html:'<h1>Date is 4-6-2024</h1>'
//   })

//   console.log("Message sent : %s", info.messageId);
// }

// main().catch(console.error)


// & events module

// let EventEmitter = require('events') //* events module returns a class EventEmitter, which encapsulates functionality to emit events and respond to event
// // console.log(EventEmitter);
// let emitter = new EventEmitter() //* using this emitter object, we can emit events
// // * to emit an event we use emit method

// // * for respond to the order pizza evnet, we need to register a listener, for that using on method
// emitter.on("order-pizza", (size, topping) => {
//   if(size!== 'medium'){
//     console.log(`Order recieved, baking a ${size} pizza with ${topping} topping`);
//   }
// })

// emitter.on("order-pizza", (size) => {
//   if(size === 'large'){
//     console.log(`serving complimentary drink`);
//   }else if(size === 'medium'){
//     console.log('Medium size pizza is not available');
//   }
// })

// console.log('Do work before event occurs in the system');

// emitter.emit("order-pizza", 'large', 'chicken') //*method accepts event name as argument

// emitter.emit("order-pizza", 'medium', 'chicken')

// ? 
let PizzaShop = require('./pizza-shop')
let DrinkMachine = require('./drinking-machine')
// console.log(PizzaShop);

let pizzaShop = new PizzaShop()
let drinkMachine = new DrinkMachine()
// console.log(pizzaShop);

pizzaShop.on('order', (size, topping) => {
  console.log(`Order recieved, baking a ${size} pizza with ${topping} topping`);
  drinkMachine.serveDrink(size)
})

pizzaShop.order('large', 'mushroom')
// console.log(pizzaShop);
pizzaShop.dsiplayOrderNumber()