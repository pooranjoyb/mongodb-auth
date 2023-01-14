import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bp from'body-parser'
import router from './Routes/route.js'
import Connection from './database/db.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT;

//setting up viewport
app.set('view engine', 'ejs');

app.use(cors());

app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

//loading static assets
app.use(express.static('./public'));

//login-logout routes
app.use('/route', router)

//home-route
app.get('/', (req, res) => {
    res.render('../public/views/base', {title: "Netflix"})
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    Connection();
})
