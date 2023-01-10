import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyparser from'body-parser'
import session from 'express-session'
import { uuid } from 'uuidv4'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//setting up viewport
app.set('view engine', 'ejs');

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))


//loading static assets
app.use(express.static('./public'));

app.use(session({
    secret: uuid(),
    resave: false,
    saveUninitialized: true
}));

//home-route
app.get('/', (req, res) => {
    res.render('../public/views/base', {title: "Netflix"})
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})