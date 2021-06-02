const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader("Content-Type", "Text/html");
    res.statusCode = 201;
    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += 'errorPage.html';
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log("Error :", err);
            res.write('Server Error')
            res.end();
        }
        res.write(data)
        res.end();
    })




})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening on 5000')
})