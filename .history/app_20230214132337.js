const express = require('express');
const { auth } = require('express-openid-connect');
require('dotenv').config();
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(auth({
    issuerBaseURL: 'https://dev-egatfd26fyd3laxi.us.auth0.com',
    baseURL: 'http://localhost:3000',
    clientID: 'kvKalUHgaF8csojN237sDfMtWBEQExNr',
    secret: '147896325'

}));
app.post('/login', (res, req) => {
    res.send("logged in");
});
app.post('logout', () => {
    res.send("logout");
})
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});
app.listen(3000, () => { console.log("app is listening on port 3000") });