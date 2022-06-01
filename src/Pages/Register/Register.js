import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init'
import { async } from '@firebase/util';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handeRegister = async (event) => {

        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        console.log({ name, email, password })
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });



        const newUser = { name, email }
        console.log(newUser)
        const url = `https://welcomeapi.priyopathshala.com/adduser`

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })






    }


    console.log(error)


    return (
        <div className='flex justify-center items-center mt-12'>
            <div className="card w-96 bg-gray-200 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


                    <form onSubmit={handeRegister} >

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>

                            <input type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                name="name"
                                required


                            />



                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>

                            <input type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                name='email'
                                required

                            />



                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>

                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                name="password"
                                required


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