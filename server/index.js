const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const app = express();
require('./models/User');
require('./services/passport');



mongoose.connect(keys.MongoURL);

app.use(
    cookieSession({
        // 30 days in milliseconds
        maxAge:30 * 24 * 60 * 60 * 1000,
        // takes an array of keys and picks one at random for additional security
        keys: keys.cookieKeys
    })
);

// tells passport to use cookies and initialize session :)
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);









