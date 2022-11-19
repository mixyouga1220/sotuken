const express = require('express');
const crypto = require('crypto');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const http = require('http');
const { render } = require('ejs');
const path = require('path');
const fs = require('fs');
const { rootCertificates } = require('tls');
const MySQLStore = require('express-mysql-session')(session);
const app = express();
const page = require('./controller/session_log');
const auth = require('./controller/auth');
const session_log = require('./controller/session_log');
const pass_log = require('./controller/pass_log');
const log_after = require('./controller/log_after');
app.use(express.static('./public'));
app.set('view engine' , 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: false
}));

app.get('/', auth, session_log, log_after)

app.post('/top', pass_log, log_after)

app.listen(8080);