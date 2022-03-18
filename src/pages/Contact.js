import React, { useState } from 'react';
import { send } from 'emailjs-com';

export default function Contact() {
    const [toSend, setToSend] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        message: '',
    });

    const handleInput = (name, value) => {
        setToSend({ ...toSend, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        send(
            'gmail',
            'template_pln7dph',
            toSend,
            'ULmNPDASEGoMkIGPu'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                window.location.reload(false);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <svg
                    className="absolute left-full transform translate-x-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-emerald-100" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg
                    className="absolute right-full bottom-0 transform -translate-x-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                </div>
                <div className="mt-12">
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                        {/* First name */}
                        <div>
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="firstname"
                                    id="first-name"
                                    value={toSend.firstname}
                                    onChange={(event) => handleInput("firstname", event.target.value)}
                                    // autoComplete="given-name"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Last name */}
                        <div>
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="lastname"
                                    id="last-name"
                                    value={toSend.lastname}
                                    onChange={(event) => handleInput("lastname", event.target.value)}
                                    // autoComplete="family-name"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={toSend.email}
                                    onChange={(event) => handleInput("email", event.target.value)}
                                    // autoComplete="email"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Phone number */}
                        <div className="sm:col-span-2">
                            <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="country" className="sr-only">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
                                    >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                </div>
                                <input
                                    type="text"
                                    name="phonenumber"
                                    id="phone-number"
                                    value={toSend.phonenumber}
                                    onChange={(event) => handleInput("phonenumber", event.target.value)}
                                    // autoComplete="tel"
                                    className="py-3 px-4 block w-full pl-20 focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                    placeholder="+1 (555) 987-6543"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={toSend.message}
                                    onChange={(event) => handleInput("message", event.target.value)}
                                    rows={4}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                onClick={sendEmail}
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}