const http = require('http');
const fs = require('fs')
let id = 7;

let users = [
  {
    "id": "1",
    "createdAt": "2021-05-31T10:59:02.663Z",
    "name": "Don Hessel",
    "avatar": "https://cdn.fakercloud.com/avatars/id835559_128.jpg"
  },
  {
    "id": "2",
    "createdAt": "2021-06-01T02:09:32.743Z",
    "name": "Rudy McLaughlin",
    "avatar": "https://cdn.fakercloud.com/avatars/naitanamoreno_128.jpg"
  },
  {
    "id": "3",
    "createdAt": "2021-05-31T07:10:14.018Z",
    "name": "Dianne Beier",
    "avatar": "https://cdn.fakercloud.com/avatars/theonlyzeke_128.jpg"
  },
  {
    "id": "4",
    "createdAt": "2021-05-31T23:52:35.521Z",
    "name": "Natasha Schaden",
    "avatar": "https://cdn.fakercloud.com/avatars/uxward_128.jpg"
  },
  {
    "id": "5",
    "createdAt": "2021-05-31T11:55:49.052Z",
    "name": "Debbie Russel MD",
    "avatar": "https://cdn.fakercloud.com/avatars/malgordon_128.jpg"
  },
  {
    "id": "6",
    "createdAt": "2021-05-31T16:23:08.597Z",
    "name": "Gloria Douglas",
    "avatar": "https://cdn.fakercloud.com/avatars/marcobarbosa_128.jpg"
  }
]



const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/getUser') {
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(users))
    res.end();
  }




  if (req.method == 'DELETE') {
    let index = Number(req.url.substring(req.url.lastIndexOf('/')+1))
    let match= req.url.match(/\d+/);

    if (index){
      console.log(index)
      let userLength=users.length;
      users =users.filter(user=>Number(user.id)!==index)
      console.log(userLength  , users.length )
      if(users.length===userLength-1){
        res.writeHead(204, 'Deleted user')
        res.end();
      }
      else{
        res.writeHead(401 , 'Bad Request')
        res.end();
      }
    }
    else{

    }

  }








  if (req.url === '/addUser') {
    if (req.method == 'POST') {
      var body = '';

      req.on('data', function (data) {
        body += data;
      });

      req.on('end', function () {
        var data = JSON.parse(body);
        console.log(data)
        if (data.name && data.avatar) {
          id++;
          let postObj = {  ...data ,id: id, date: new Date() }
          users.push(postObj)
          console.log(users)
          res.write(JSON.stringify(postObj))
          res.end()
        }
        else {
          res.statusCode = 400;
          res.end();
        }
      });
    }

  }
})


server.listen(5000, 'localhost', () => {
  console.log('Server is listening on 5000')
})