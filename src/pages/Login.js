import React, { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/solid'
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutation';

import Auth from '../utils/auth';

export default function Login() {
    const [formState, setFormState] = useState({ 
        email: '', 
        password: '' 
    });
    const [login, { error, data }] = useMutation(LOGIN_USER);
    // let navigate = useNavigate();

    const [alert, setAlert] = useState(false);
    
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
        // console.log("formState", formState)

        setAlert(false)
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);

            // Navigate to the next step after POST
            // navigate(`/dashboard`);
            // navigate(`/profile`);
        } catch (e) {
            console.error(e);
            setAlert(true)
        }
    };

    return (
        <>
            {/* Login Section */}
            <div className="min-h-full flex flex-col justify-center py-12 mt-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="/signup" className="font-medium text-emerald-600 hover:text-emerald-500">
                            signup
                        </a>
                        {' '}here
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        {/* Form */}
                        <form className="space-y-6" action="#" method="POST" onSubmit={handleFormSubmit}>
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        // autoComplete="email"
                                        onChange={handleChange}
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formState.password}
                                        // autoComplete="current-password"
                                        onChange={handleChange}
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            {/* Remember me */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            {/* Error message */}
                            {alert && <div className="rounded-md bg-red-50 p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-red-800">Oh no! We can't find that user. Try again!</h3>
                                        </div>
                                    </div>
                                </div>
                            }

                            {/* Sign in button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
