const express = require('express');
const { auth } = require('express-openid-connect');
require('dotenv').config();
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(auth({
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET

}));

app.get('/', (req, res) => {
    console.log(req.oidc.isAuthenticated());
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});
app.listen(3000, () => { console.log("app is listening on port 3000") });