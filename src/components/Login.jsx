import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth';
import { Auth, Provider } from '../firebase-config';
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Alert, Button } from '@mui/material';
import validator from 'validator';
import { toast } from 'react-hot-toast'

const Login = () => {


    const navigator = useNavigate()
    const [user] = useAuthState(Auth)
    const [email, setEmail] = useState('')
    const [fname, setFname] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignInGoogle = (e) => {
        //    prompt("hello");
        e.preventDefault()

        signInWithPopup(Auth, Provider).then((res) => {
            console.log(res);
            navigator("/generate-image")
        }).catch((e)=>{
            if (e.code ==="auth/popup-closed-by-user")
            {
               toast.error("SignIn failed!")   
            }
        })
    }
    const handleRegsiter = (e) => {
        e.preventDefault()

        if (email != "" && password != "" && fname != "") {
            if (validator.isEmail(email)) {
                if (password.length >= 8) {
                    console.log("yes")
                    createUserWithEmailAndPassword(Auth, email, password).then((res) => {
                        console.log(res)
                        toast.success("Registration Successful!")
                        navigator("/generate-image")
                    })
                        .catch((e) => {
                            if (e.code === 'auth/email-already-in-use') {

                                toast.error("email-already-in-use")
                                // return null;
                            }
                            console.log(e.code)
                            console.log(e.message)
                            // setErrorMessage(e.message)
                        })
                }
                else
                    toast.error("Password must be min 8 character")
            }
            else
                toast.error("Invalid Email")
        }


    }

    const handleSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(Auth, email, password).then((res) => {
            toast.success('Login Successfully.', {
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                },
                iconTheme: {
                    primary: '#713200',
                    secondary: '#FFFAEE',
                },
            });
            navigator("/generate-image")

        }).catch((e) => {
            if (e.code === 'auth/user-not-found') {
                console.log(e.code)

                toast.error("User not found")
            }
            else if (e.code === 'auth/wrong-password') {
                console.log(e.code)
                toast.error("Invalid Details")
            }
            else if (e.code === 'auth/invalid-email') {
                toast.error("Invalid Details")
            }
            console.log(e.code)

        })
    }
    const handleSignInPhone = () => {
    }


    return (
        <>
            <div className="Auth">
                <div className="Auth_container">

                    <div className="login_icons">

                        <p onClick={handleSignInGoogle} > <GoogleIcon className='login_icon' /> <span>Continue With Google</span></p>

                    </div>
                    <div className='or'>
                        <p>Or</p>
                    </div>
                    {
                        register ?
                            (
                                <>
                                    <div className='form_login'>

                                        <input
                                            required
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            value={fname}
                                            onChange={(e) => setFname(e.target.value)}
                                        />
                                        <input
                                            required
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <Button variant="outlined" type="submit" onClick={handleRegsiter} >Register</Button>
                                    </div>
                                </>
                            ) :
                            <>
                                <div className='form_login'>

                                    <input
                                        required
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <input
                                        required
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <Button variant="outlined" type="submit" onClick={handleSignIn} >Login</Button>
                                </div>
                            </>
                    }
                    <div className='already'>
                        <p onClick={() => { setRegister(!register) }} href="">{register ? "Have an account?" : "Create an account"}</p>
                    </div>
                    <div>

                        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                    </div>
                </div>




            </div>
        </>
    )
}
export default Login;