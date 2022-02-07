const logger = (req, res, next)=> {
    const ip = req.ip
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(`IP Adress: ${ip}\tMethod: ${method}\tURL: ${url}\ttime: ${time}`)
    next()
}

module.exports = logger