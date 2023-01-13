import express from 'express'
import Login from '../database/model/schema.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

const router = express.Router();

const credentials = {
    email: process.env.email,
    password: process.env.password
}

//admin route
router.post('/login', (req, res) => {
    const usnInput = req.body.email;
    const passInput = req.body.password;

    var new_user = new Login({
        username: usnInput,
        password: passInput
    })
    
    if (usnInput == credentials.email && passInput == credentials.password) {
        new_user.save().catch((err) => {
            console.log(err);
        })
        req.session.user = req.body.email;
        res.render('../public/views/portal')
    } else {
        res.end("Invalid Username")
    }
})

//logout route
router.post('/logout', (req, res) => {
    res.redirect('/');
})

export default router;
