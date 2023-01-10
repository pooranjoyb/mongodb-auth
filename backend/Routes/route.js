import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const router = express.Router();

const credentials = {
    email: process.env.email,
    password: process.env.password
}

router.post('/login', (req, res) => {

    if(req.body.email == credentials.email && req.body.password == credentials.password){
        req.session.user = req.body.email;
        res.end("Login Success")
    }else{
        res.end("Invalid Username")
    }
})

export default router;