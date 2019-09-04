var fs = require('fs');
var http = require('http');

fs.writeFile(__dirname + "/index.html", "<h>HTML is  great</h>", function(error){
if (error) {
    return console.log(error);
} else {
    return console.log("Congrats")
}

});

var myPhotoLocation = 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'

http.get(myPhotoLocation, function(response){
    response.pipe(fs.creatWriteStream(__dirname + dog_white.jpg));
});