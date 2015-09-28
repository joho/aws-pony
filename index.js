var osxWallpaper = require('osx-wallpaper');
var exec = require('child_process').exec;

var downloadCommand = 'curl http://uploads.alphacoders.com/index.php/wallpapers/download/198224/images4/jpg/36892/20690 > ~/Downloads/pony.jpg';

if (process.env.AWS_SECRET_ACCESS_KEY) {
  var child = exec(downloadCommand, function(err, stdout, stderr) {
    console.log(stdout);

    osxWallpaper.set(process.env.HOME + '/Downloads/pony.jpg', function (err) {
        console.log('done');
    });
  });
}
