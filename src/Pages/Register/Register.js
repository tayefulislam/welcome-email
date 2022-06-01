import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


    return (
        <div className='flex justify-center items-center mt-12'>
            <div className="card w-96 bg-gray-200 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


                    <form >

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>

                            <input type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"


                            />



                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>

                            <input type="text"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"



                            />



                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>

                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"


                            />
                        </div>








                        <input className='btn  w-full max-w-xs' type="submit" value="Signup" />
                    </form>



                </div>
            </div>
        </div>
    );
};

export default Register;