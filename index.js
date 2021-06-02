let os = require('os');
const fs = require("fs")


// console.log("Platform: " + os.platform());
// console.log("Home Dir: " + os.homedir());

// fs.unlinkSync('test.txt')




const docs=['pdf','doc' ,'docx','xls','xlsx','csv']
  const images=['png','jpg','jpeg','ico','gif','svg']
  const media=['mp3','mp4','mov','mkv'];

 let movePath='C:/Users/Reena mehta/Downloads/cleaned/';


const searchPath = 'C:/Users/Reena mehta/Downloads/';

fs.readdirSync(searchPath).forEach(file => {
  let ext=getFileExtension(file)
  console.log( ext);
  if(docs.includes(ext)){
    // !fs.existsSync('docs') && fs.mkdirSync('docs');
    fs.copyFileSync(searchPath+ file, movePath+'docs/' +file);

  }
  else if(images.includes(ext)){
    // !fs.existsSync('images') && fs.mkdirSync('images');
    fs.copyFileSync(searchPath+ file, movePath+'images/' +file);

  }
  else if(media.includes(ext)){
    // !fs.existsSync('media') && fs.mkdirSync('media');
    fs.copyFileSync(searchPath+ file, movePath+'media/' +file);

  }
  else{


  }

});


function getFileExtension(file){
    return file.split('.').pop();

}





function getFileExtension(file){
    return file.split('.').pop();

}
