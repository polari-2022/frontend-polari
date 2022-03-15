import { useState } from "react";
import { green } from "tailwindcss/colors";
import { usePasswordValidation } from "../hooks/usePasswordValidation";

export default function Signup() {

    const [password, setPassword] = useState({
        firstPassword: "",
        confirmPassword: "",
    });

    const [
        validLength,
        hasNumber,
        upperCase,
        match,
        specialChar,
    ] = usePasswordValidation({
        firstPassword: password.firstPassword,
        confirmPassword: password.confirmPassword,
    });

    const setFirst = (event) => {
        setPassword({ ...password, firstPassword: event.target.value });
    };
    const setConfirm = (event) => {
        setPassword({ ...password, confirmPassword: event.target.value });
    };


    return (
        <>
            {/* Signup Section */}
            <div className="min-h-full flex flex-col justify-center py-12 mt-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    {/* Logo */}
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
                            log in
                        </a>
                        {' '}here
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        {/* Form */}
                        <form className="space-y-6" action="#" method="POST">
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
                                        autoComplete="email"
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
                                        onChange={setFirst}
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            {/* Confim password */}
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="confirm-password"
                                        name="confirm-password"
                                        type="password"
                                        onChange={setConfirm}
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex justify-evenly mb-4">
                                    <span className={validLength ? "text-emerald-500" : "text-red-500"}>Valid Length</span>
                                    <span className={hasNumber ? "text-emerald-500" : "text-red-500"}>Has a Number</span>
                                    <span className={upperCase ? "text-emerald-500" : "text-red-500"}>Upper Case</span>
                                </div>
                                <div className="flex justify-evenly mb-4">
                                    <span className={specialChar ? "text-emerald-500" : "text-red-500"}>Special Character</span>
                                    <span className={match ? "text-emerald-500" : "text-red-500"}>Passwords Match</span>
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
