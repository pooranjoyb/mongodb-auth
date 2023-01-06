import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})