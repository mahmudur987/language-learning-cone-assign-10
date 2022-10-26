import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { authContext } from '../../UserContext/UserContext';


const Profile = () => {

    const { user } = useContext(authContext);

    const photURLRef = useRef(user.photoURL)
    console.log(photURLRef.current.value)

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photURLRef.current.value)
    }

    return (
        <div className="hero  bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                            <input defaultValue={user.displayName} type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL </span>
                            </label>
                            <input ref={photURLRef} defaultValue={user.photoURL} type="text" placeholder="photo URL" className="input input-bordered" />
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Profile;