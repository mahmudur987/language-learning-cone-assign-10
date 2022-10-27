import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { authContext } from '../../UserContext/UserContext';


const Profile = () => {

    const { user } = useContext(authContext);
    const [name, Setname] = useState(user.displayName);
    const [URL, SetUrl] = useState(user.photoURL);
    const photURLRef = useRef(user.photoURL);
    const nameRef = useRef(user.displayName)
    // console.log(photURLRef.current.value);

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = photURLRef.current.value;
        Setname(name);
        SetUrl(URL);
        console.log(name, email)
    }

    return (
        <div className="hero  bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Update Profile</h1>

                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input readOnly defaultValue={user.email} type="text" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input ref={nameRef} defaultValue={name} type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL </span>
                            </label>
                            <input ref={photURLRef} defaultValue={URL} type="text" placeholder="photo URL" className="input input-bordered" />
                        </div>



                        <div className="form-control mt-6">
                            {/* The button to open modal */}
                            <button>
                                <label htmlFor="my-modal" className="btn btn-info">Update profile</label>

                            </button>
                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box border border-blue-900 p-4 ">
                                    <h3 className="font-bold text-lg m-2 text-green-700">Congratulations </h3>
                                    <h3 className="font-bold m-2 "> your Email : {user.email}</h3>
                                    <h3 className="font-bold  m-2 text-green-700"> Your Name : {name} </h3>
                                    <h3 className="font-bold m-2 text-green-700"> Your PhotoUrl : {URL} </h3>

                                    <div className="modal-action">
                                        <label htmlFor="my-modal" className="btn">Okey!</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Profile;