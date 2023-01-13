import mongoose from "mongoose";
const { Schema } = mongoose;

const loginSchema = new Schema({
    username: String,
    password: String
});

const Login = mongoose.model('Login', loginSchema);

export default Login;