import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, ChatAltIcon } from '@heroicons/react/outline'
import { NavLink, Link } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/query';

import Auth from '../../utils/auth';

const user = {
    imageUrl:
        'https://images.unsplash.com/photo-1540304801084-0944beb20de7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
}
const navigation = [
    { name: 'Attachment Styles', to: '/attachment-styles' },
    { name: 'Contact Us', to: '/contact-us' },
    { name: 'Our Team', to: '/our-team' },
]
const userNavigation = [
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'View My Profile', to: '/my-profile' },
    { name: 'Edit Profile', to: '/edit-profile' },
]

export default function Navbar() {
    const { loading, data } = useQuery(QUERY_ME);

    const userData = data?.me || {};

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <Disclosure as="nav" className="bg-teal-900">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to='/'>
                                        <img
                                            className="h-20 w-auto"
                                            src="https://user-images.githubusercontent.com/87889660/158719963-e835f37c-ef8f-4c1c-8c8b-e731aa073929.svg"
                                            alt="Workflow"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.to}
                                            className="px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-teal-700 hover:text-white focus:bg-gray-800 focus:text-white"
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>

                            {Auth.loggedIn() ? (
                                <>
                                    <div className="flex items-center">
                                        <div className="hidden mx-1 md:flex md:items-center md:space-x-2">
                                            <button
                                                key="logout"
                                                onClick={logout}
                                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-teal-700 hover:text-white focus:bg-gray-800 focus:text-white"
                                            >
                                                Logout
                                            </button>
                                            <NavLink
                                                to="/dashboard"
                                                className="px-3 py-1 rounded-md text-base font-medium text-gray-300 border-2 border-teal-700 hover:bg-teal-700 hover:text-white bg-teal-800 focus:bg-gray-800 focus:text-white">
                                                Dashboard
                                            </NavLink>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <NavLink to='/messages' >
                                                <button
                                                    type="button"
                                                    className="relative ml-3 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:bg-teal-500 active:outline-none active:ring-2 active:ring-offset-2 active:ring-offset-gray-800 active:ring-teal-500"
                                                >
                                                    <ChatAltIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                                    <span>Messages</span>
                                                </button>
                                            </NavLink>
                                        </div>
                                        <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                                            {/* Profile */}
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800 hover:ring-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-600">
                                                        <span className="sr-only">Open user menu</span>
                                                        <NavLink
                                                            key="my-profile"
                                                            to="/my-profile"
                                                        >
                                                            <img className="h-8 w-8 object-cover rounded-full" src={user.imageUrl} alt="" />
                                                        </NavLink>
                                                    </Menu.Button>
                                                </div>
                                            </Menu>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="relative md:flex items-center justify-end md:flex-1 lg:w-0">
                                            <NavLink
                                                to="/login"
                                                className="whitespace-nowrap px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-teal-700 hover:text-white">
                                                Log in
                                            </NavLink>
                                            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                                                <NavLink
                                                    to="/signup"
                                                    className="ml-6 whitespace-nowrap items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500"
                                                >
                                                    Sign up
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </div>

                        {/* Menu panel for small screens */}
                        {Auth.loggedIn() ? (
                            <Disclosure.Panel className="md:hidden text-center">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.to}
                                            className="bg--900 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-teal-700 hover:text-white focus:bg-gray-800 focus:text-white"
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                    <a
                                        key="logout"
                                        onClick={logout}
                                        className="bg--900 block px-3 py-2 rounded-md text-base font-medium border border-transparent shadow-sm text-white bg-emerald-600 hover:bg-emerald-500"
                                    >
                                        Logout
                                    </a>
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-700">
                                    <div className="flex items-center px-5 sm:px-6">
                                        <div className="flex-shrink-0">
                                            <NavLink
                                                key="my-profile"
                                                to="/my-profile"
                                                className="bg-gray-800 flex text-sm rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800 hover:ring-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-600"
                                            >
                                                <img className="h-10 w-10 object-cover rounded-full" src={user.imageUrl} alt="" />
                                            </NavLink>
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-sm font-medium text-gray-300">{userData.email}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 px-2 space-y-1 sm:px-3">
                                        {userNavigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                as="a"
                                                to={item.to}
                                                className="bg--900 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-teal-700 hover:text-white focus:bg-gray-800 focus:text-white"
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        ) : (
                            <Disclosure.Panel className="md:hidden text-center">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.to}
                                            className="bg--900 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-teal-700 hover:text-white focus:bg-gray-800 focus:text-white"
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                    <NavLink
                                        to="/signup"
                                        className="bg--900 block px-3 py-2 rounded-md text-base font-medium border border-transparent shadow-sm text-white bg-emerald-600 hover:bg-emerald-500"
                                    >
                                        Sign up
                                    </NavLink>
                                </div>
                            </Disclosure.Panel>
                        )
                        }
                    </div>
                </>
            )}
        </Disclosure>
    )
}
