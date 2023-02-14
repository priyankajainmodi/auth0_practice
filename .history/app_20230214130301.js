const express = require('express');
const { auth } = require('express-openid-connect');
require('dotenv').config();
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: 'kvKalUHgaF8csojN237sDfMtWBEQExNr',
    issuerBaseURL: 'https://dev-egatfd26fyd3laxi.us.auth0.com',
    secret: '14789325'
};
app.use(auth(config));
app.post('/login', (res, req) => {

});
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});
app.listen(3000, () => { console.log("app is listening on port 3000") });