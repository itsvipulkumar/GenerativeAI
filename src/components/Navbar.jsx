import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Auth } from '../firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth'
import swal from 'sweetalert';
import { signOut } from 'firebase/auth'
import GenerateImage from './Generator';
const Navbar = () => {
    const [user] = useAuthState(Auth)
    const navigator =useNavigate() 
    
    const logoutEvent = () => {
        Auth.signOut()
        navigator("/")
        // swal({
        //     title: "Are you sure?",
        //     text: "You can Login anytime with your username or password",
        //     icon: "warning",
        //     buttons: ["NO", "Yes, Logout it!"],
        //     dangerMode: true,


        // })
        //     .then(result => {
        //         if (result) {
        //             // history.push('auth')
        //             Auth.signOut()
        //             navigator("/")
        //             swal({
        //                 title: "Logged Out!",
        //                 icon: "success",
        //                 button: "Aww yiss!",
        //             });
        //         }
        //     });
    }
    return (
        <div className='navbar'>
            <div className='left'>
                <Link className='logo' to="/"> <h1>Generative AI</h1></Link>
            </div>

            <div className='right'>
                <Link className='navLinks' to="/">Home</Link>
                <Link className='navLinks' to="/about">About</Link>
                <Link className='navLinks' to="/about">Pricing</Link>

                {/* {user? <Link to="generate-image">GenerateImage</Link >
                : <div></div>
                } */}
                {
                    user ? <span onClick={logoutEvent}>
                        <Tooltip title="Logout">
                            <Avatar
                                className='avatar_user'
                            src={user?.photoURL ? user?.photoURL : user?.displayName} />
                        </Tooltip>

                    </span> :
                        <Link className='navLinks' to="/login">Login</Link>
                }

                {/* <Link className='navLinks' to="/">Other</Link> */}
            </div>
        </div>
    )
}

export default Navbar
