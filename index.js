var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');

var credentialsFileExists = function() {
  var pathToCredentials = process.env.HOME + '/.aws/credentials';
  console.log(pathToCredentials);
  try{
    fs.statSync(path.resolve(pathToCredentials));
  }catch(err){
    if(err.code == 'ENOENT') return false;
  }
  return true;
};

if (process.env.AWS_SECRET_ACCESS_KEY || credentialsFileExists()) {
  var pathToWallpaper = path.resolve(__dirname + '/my_little_pony_wallpaper_by_theshadowstone-d7iyp7s.png');
  var desktopCommand = 'osascript -e \'tell application "Finder" to set desktop picture to "' + pathToWallpaper + '" as POSIX file\'';
  var child = exec(desktopCommand, function(err, stdout, stderr) {
    console.log("You could have just leaked your AWS creds");
  });
}
