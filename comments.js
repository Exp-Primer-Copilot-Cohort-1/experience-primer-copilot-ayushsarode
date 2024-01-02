// Create web server 
// 1. Create express object
// 2. Create server object
// 3. Create port number
// 4. Create web server
// 5. Create router object
// 6. Create middleware
// 7. Create request handler
// 8. Start server

// 1. Create express object
const express = require('express');
const app = express();

// 2. Create server object
const http = require('http').Server(app);

// 3. Create port number
const port = 3000;

// 4. Create web server
http.listen(port, function() {
    console.log('Listening on port ' + port);
});

// 5. Create router object
const router = express.Router();

// 6. Create middleware
app.use(express.static(__dirname + '/public'));

// 7. Create request handler
router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// 8. Start server
app.use('/', router);
