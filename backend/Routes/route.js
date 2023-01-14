import express from 'express'
import Login from '../database/model/schema.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

const router = express.Router();

//admin route
router.post('/login', (req, res) => {
    const usnInput = req.body.email;
    const passInput = req.body.password;

    //fetching data from Local Database
    Login.find({}, (err, users) => {
        if (err) console.log(err, "Database isn't Connected")
        else {
            const credentials = {
                email: users[0].username,
                password: users[0].password
            }
            if (usnInput == credentials.email && passInput == credentials.password) {
                res.render('../public/views/portal')
            }
            else {
                res.end("Invalid Username")
            }
        }
    })


})

//logout route
router.post('/logout', (req, res) => {
    res.redirect('/');
})

export default router;
