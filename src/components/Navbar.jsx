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
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

defineElement(lottie.loadAnimation);
const Navbar = () => {
    const [user] = useAuthState(Auth)
    const navigator = useNavigate()

    const logoutEvent = () => {

        swal({
            title: "Are you sure?",
            text: "You can Login anytime with your username or password",
            icon: "warning",
            buttons: ["NO", "Yes, Logout it!"],
            dangerMode: true,


        })
            .then(result => {
                if (result) {
                    // history.push('auth')
                    Auth.signOut()
                    navigator("/")
                    swal({
                        title: "Logged Out!",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                }
            });
    }

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));



    return (
        <>


            <div className='navbar'>


                <div className='left'>
                    <Link className='logo' to="/"> <img src="./Images/logo.png" alt="logo" /> <h1>Generative AI</h1></Link>
                </div>


                <div className='mid'>
                    <Link className='navLinks' to="/tools">
                        {/* <FontAwesomeIcon className='mobile_v' icon={faMicrochip} /> */}
                        <span>Tools</span> </Link>
                    <Link className='navLinks desktop_view' to="/about">

                        {/* <FontAwesomeIcon className='mobile_v' icon={faHome} /> */}
                        <span>About</span></Link>
                    <Link className='navLinks desktop_view' to="/plans">
                        {/* <FontAwesomeIcon className='mobile_v' icon={faHome} /> */}
                        <span>Pricing</span></Link>
                </div>
                <div className='right'>

                    {
                        user ? <span onClick={logoutEvent}>
                            <Tooltip title="Logout">
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar className='avatar_user' src={user?.photoURL ? user?.photoURL : user?.displayName} />
                                </StyledBadge>
                            </Tooltip>
                        </span> :
                            <Link className='navLinks' to="/login">Login</Link>
                    }
                </div>

            </div>
            <div className='mid_mobile_view'>
                <Link className='mobile_view' to="/">
                    <FontAwesomeIcon icon={faMicrochip} />
                    {/* <span>AI Generator</span>  */}
                </Link>

                <Link className='mobile_view' to="/about">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    {/* <span>HOME</span> */}
                </Link>
                <Link className='mobile_view' to="/about">
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                    {/* <span>HOME</span> */}
                </Link>
                {
                    !user && <Link className='mobile_view' to="/login">
                        <FontAwesomeIcon icon={faArrowRightToBracket} />

                    </Link>
                }
            </div>
        </>
    )
}

export default Navbar
