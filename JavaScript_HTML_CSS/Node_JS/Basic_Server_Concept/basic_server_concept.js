const http = require('http')
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

//Server
const server = http.createServer((req, res) => {

    const url = req.url

    /*REQUEST-----------------------------------------------------------*/

    console.log(`Method: ${req.method}\t URL: ${req.url}`)


    /*RESPONSE----------------------------------------------------------*/

    switch (url){

        //Home Page
        case ('/' || '/index.html'):
            res.writeHead(200,{'content-type':'text/html'}) //response header
            res.write(homePage)                             //response body
            res.end()                                       //response end
            break
        case ('/styles.css'):
            res.writeHead(200,{'content-type':'text/css'}) 
            res.write(homeStyles)                             
            res.end()
            break
        case ('/logo.svg'):
            res.writeHead(200,{'content-type':'image/svg+xml'}) 
            res.write(homeImage)                             
            res.end()
            break
        case ('/browser-app.js'):
            res.writeHead(200,{'content-type':'text/javascript'}) 
            res.write(homeLogic)                             
            res.end()
            break
        
        //About Page
        case ('/about.html'):
            res.writeHead(200,{'content-type':'text/html'})
            res.write(`<h1>About Page</h1>`)
            res.end()
            break
        
        //Projects Page
        case ('/projects.html'):
            res.writeHead(200,{'content-type':'text/html'})
            res.write(`<h1>Project Page</h1>`)
            res.end()
            break
        
        //Contact Page
        case ('/contact.html'):
            res.writeHead(200,{'content-type':'text/html'})
            res.write(`<h1>Contact Page</h1>`)
            res.end()
            break
        
        //404
        default:
            res.writeHead(404,{'content-type':'text/html'})
            res.write(`<h1>Page Not Found</h1>`)
            res.end()
            break
    }
})

server.listen(5000)