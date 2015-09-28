var exec = require('child_process').exec;
var path = require('path');


if (process.env.AWS_SECRET_ACCESS_KEY) {
  var pathToWallpaper = path.resolve(__dirname + '/my_little_pony_wallpaper_by_theshadowstone-d7iyp7s.png');
  var desktopCommand = 'osascript -e \'tell application "Finder" to set desktop picture to "' + pathToWallpaper + '" as POSIX file\'';
  var child = exec(desktopCommand, function(err, stdout, stderr) {
    console.log("You could have just leaked your AWS creds");
  });
}
