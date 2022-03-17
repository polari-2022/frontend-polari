import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, ChatAltIcon } from '@heroicons/react/outline'
// import { PlusSmIcon } from '@heroicons/react/solid'
// routing
import { NavLink, Link } from 'react-router-dom'

const loggedIn = false

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Attachment Styles', to: '/attachment-styles' },
    { name: 'Contact Us', to: '/contact-us' },
    { name: 'Our Team', to: '/our-team' },
]
const userNavigation = [
    { name: 'Your Profile', to: '#' },
    { name: 'Settings', to: '#' },
    { name: 'Sign out', to: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    if (loggedIn) {
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
                                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-teal-700 hover:text-white focus:bg-gray-800 focus:text-white"
                                            // aria-current={isActive ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <NavLink to='/messages' >
                                            <button
                                                type="button"
                                                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:bg-teal-500 active:outline-none active:ring-2 active:ring-offset-2 active:ring-offset-gray-800 active:ring-teal-500"
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
                                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                </Menu.Button>
                                            </div>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </div>

    
                        <Disclosure.Panel className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        to={item.to}
                                        className={classNames(
                                            item.current ? 'bg--900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="pt-4 pb-3 border-t border-gray-700">
                                <div className="flex items-center px-5 sm:px-6">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-white">{user.name}</div>
                                        <div className="text-sm font-medium text-gray-400">{user.email}</div>
                                    </div>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        )
    } else {
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
                                    {/* Logo */}
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
                                                // key={item.name}
                                                to={item.to}
                                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-teal-700 hover:text-white focus:bg-gray-800 focus:text-white"
                                            // aria-current={isActive ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="relative md:flex items-center justify-end md:flex-1 lg:w-0">
                                            <NavLink
                                                to="/login"
                                                className="ml-8 whitespace-nowrap px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-teal-700 hover:text-white">
                                                Log in
                                            </NavLink>
                                            <NavLink
                                                to="/signup"
                                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500"
                                            >
                                                Sign up
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-teal-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        )
    }
}
