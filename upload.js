var express = require('express'),
    app = express(),
    fs = require('fs'),    
    format = require('util').format;
    
app.configure(function() {
  app.use(express.favicon(__dirname + '/public/favicon.ico'))
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger('dev'));
});

app.get('/', function(req, res, next) {
  res.send('<meta http-equiv="refresh" content="0; url=/upload">');
});


/* ************ */
//   UPLOADER   //
/* ************ */

app.get('/upload', function(req, res, next) {
  serve_html(res, '/public/upload.html');
});

app.post('/upload', function(req, res, next) {
  res.send('');
  console.log(format('Received upload %s (%d Kb) to %s'
    , req.files.file.name
    , req.files.file.size / 1024 | 0
    , req.files.file.path));
  var ix = req.files.file.path.lastIndexOf('/');
  var newPath = '/data/uploads/' + req.files.file.path.substr(ix+1);
  fs.rename(req.files.file.path, newPath);
  console.log('Renamed to: ' + newPath);
});

function serve_html(res, file_path) {
  serve_file(res, 'text/html', __dirname + file_path);
}

function serve_file(res, content_type, file_path) {
  res.header ('Content-Type', content_type);
  var content = fs.readFileSync (file_path, 'utf8');
  res.send(content);
}

app.listen(3000);

process.on ('SIGINT', clean_up);
process.on ('SIGTERM', clean_up);

function clean_up() {  
  process.exit();
}
