

// To include the File System module, use the " require('fs') " method:




// To read File -> fs.readFile()
// To read the local HTML file "02_Demo.html"

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('02_Demo.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);




// To Append File -> fs.appendFile()
// Code to append a specified content to a local file "mynewfile1.txt",
//if file not available, then will be created

fs.appendFile('mynewFile1.txt', 'Hello Guys!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// Second Code syntax to append the text "This is my text." to the file
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});




// To Open File -> fs.open()
// Code to open a local file "mynewfile2.txt",
//if file not available, then will be created

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});




// To write File -> fs.writeFile()
// Code to Replace the same named local file including CONTENT "mynewfile3.txt",
//if file not available, then will be created

fs.writeFile('mynewfile3.txt', 'Hello Guys!', function (err) {
    if (err) throw err;
    console.log('Saved');
});




// To delete a File -> fs.unlink()
// It deletes the file that is created just now, i.e mynewfile4.txt

fs.writeFile('mynewfile4.txt', 'Hello Frnds!', function (err) {
    if (err) throw err;
    console.log('Saved');
});

fs.unlink('mynewfile4.txt', function (err) {
    if (err) throw err;
    console.log('File Deleted!');
});




// To Rename a file -> fs.rename()
// It renames the file

fs.rename('mynewfile1.txt', 'myrenamedfile1.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});