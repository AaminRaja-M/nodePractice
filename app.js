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
// let server = http.createServer((req, res) => {
//     res.write('<html><body><h1>Hi I am h1 tag</h1></body></html>')
//     res.write('<html><body><h2>Hi I am h1 tag</h2></body></html>')
//     res.end('\nI am end')
// })
// server.listen(5000, (error, res) => {
//     if (error) throw new error
//     console.log('Server is at port:http://localhost:5000');
// })