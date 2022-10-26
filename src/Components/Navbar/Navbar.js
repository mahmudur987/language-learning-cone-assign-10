import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const { user, logout } = useContext(authContext);
    const [theme, SetTheme] = useState(true);
    const handletheme = () => {
        SetTheme(!theme)
    }
    const handleLogOut = () => {
        logout().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    console.log(user)

    return (
        <div className="navbar font-mono py-10 mb-10">
            <div className="flex-1">
                <img className=' w-10 rounded-full ml-4' src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                <button className="btn btn-ghost normal-case font-bold text-3xl">Language Learning <span className='text-5xl font-extrabold text-purple-600'>Zone</span></button>
            </div>
            <div className="flex-none">
                <div className="flex text-blue-900 p-0">
                    <div className='flex justify-around '>
                        <p className='m-1 hover:text-red-600'><Link to={'/'}>Home</Link></p>
                        <p className='m-1 hover:text-red-600'><Link to={'/courses'}> Course</Link></p>
                        <p className='m-1 hover:text-red-600'><Link to={'/faq'}> FAQ</Link></p>
                        <p className='m-1 hover:text-red-600'><Link to={'/blog'}> Blog</Link></p>
                        <p className='m-1 hover:text-red-600'><Link to={'/login'}>Login</Link></p>
                        <p className='m-1 hover:text-red-600'><Link to={'/signup'}>Sign Up</Link></p>
                    </div>

                    <div className='mx-3 grid grid-cols-1 gap-3 '>
                        {
                            user ? <div className='tooltip' data-tip={user?.displayName} >

                                <div className='flex'>
                                    <img className='w-7' src={user?.photoURL} alt="" />
                                    <button onClick={handleLogOut} className='text-blue-800 font-extrabold '> sign out</button>
                                </div>
                            </div>
                                :
                                <div className='text-xl my-2'> <FaUser></FaUser>  </div>

                        }
                        <div className='mx-5 w-32'>
                            <button onClick={handletheme}> {theme ? ' Theme : Dark' : 'Theme : Light'}  </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;