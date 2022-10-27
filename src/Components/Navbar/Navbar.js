import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const { user, logout, theme, SetTheme } = useContext(authContext);
    // const [theme, SetTheme] = useState(true);
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
    // console.log(user)

    return (
        <div className=" grid gap-3  xl:flex xl:justify-between font-mono py-10 mb-10  relative">
            {/* title area  start*/}
            <div className="flex-wrap md:flex md:flex-nowrap md:w-full ">
                <img className=' w-10 rounded-full ml-2' src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                <button className=" m-0 font-bold text-3xl">Language Learning <span className='text-5xl font-extrabold text-purple-600'>Zone</span></button>
            </div>
            {/* title area end */}


            {/* link area start  */}

            <div className=" grid  md:flex md:flex-row-reverse text-blue-900 p-0 md:w-full md:justify-between  ">


                {/* profile +signout */}

                <div className=' flex  justify-end  w-screen sm:w-auto md:w-auto '>
                    <div className='mx-5 w-32 absolute top-0 right-0'>
                        <button onClick={handletheme}> {theme ? ' Theme : Dark' : 'Theme : Light'}  </button>
                    </div>
                    <div className='mx-6 '>
                        {
                            user ? <div className='tooltip' data-tip={user?.displayName} >

                                <div className=' flex flex-col  items-center'>
                                    <Link to={'/profile'}>  <img className='w-10 rounded-3xl '
                                        src={user ? user?.photoURL
                                            : 'https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png'} alt="" /> </Link>
                                    <button onClick={handleLogOut} className='font-extrabold mt-5 '> sign out</button>
                                </div>
                            </div>
                                :
                                <div className='text-xl mx-8'> <FaUser></FaUser>  </div>
                        }
                    </div>

                </div>


                {/* linkers are here */}

                <div className=' flex flex-wrap grow justify-between '>
                    <p className='m-1 hover:text-red-600'><Link to={'/'}>Home</Link></p>
                    <p className='m-1 hover:text-red-600'><Link to={'/courses'}> Course</Link></p>
                    <p className='m-1 hover:text-red-600'><Link to={'/faq'}> FAQ</Link></p>
                    <p className='m-1 hover:text-red-600'><Link to={'/blog'}> Blog</Link></p>
                    <p className='m-1 hover:text-red-600'><Link to={'/login'}>Login</Link></p>
                    <p className='m-1 hover:text-red-600'><Link to={'/signup'}>Sign Up</Link></p>


                </div>


            </div>


        </div>
    );
};

export default Navbar;