import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const peopleInterestedIn = [
    { id: 'women', title: 'Women' },
    { id: 'men', title: 'Men' },
    { id: 'non-binary', title: 'Nonbinary people' },
]

const attachmentStyles = [
    { id: 'avoidant', name: 'Avoidant' },
    { id: 'secure', name: 'Secure' },
    { id: 'Anxious', name: 'Anxious' },
]

const identities = [
    { id: 'woman', name: 'Woman' },
    { id: 'man', name: 'Man' },
    { id: 'non-binary', name: 'Nonbinary person' },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Profile() {
    const [selectedIdentity, setIdentity] = useState(identities[2])
    const [selectedAttachmentStyle, setAttachmentStyle] = useState(attachmentStyles[2])


    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            {/* Dot pattern */}
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
                            <rect x={0} y={0} width={4} height={4} className="text-green-100" fill="currentColor" />
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

                {/* Profile header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Profile</h2>
                </div>
                <div className="mt-12">

                    {/* Form */}
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        {/* First name */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                                Date of birth
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="birthdate"
                                    id="birthdate"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Who are you interested in */}
                        <div className="sm:col-span-2">
                            <label htmlFor="genderInterests" className="block text-sm font-medium text-gray-700">
                                Who are you interested in?
                            </label>
                            <div className="mt-1">
                                <fieldset className="mt-4">
                                    <legend className="sr-only">Intersts</legend>
                                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                        {peopleInterestedIn.map((interest) => (
                                            <div key={interest.id} className="flex items-center">
                                                <input
                                                    id={interest.id}
                                                    name="genderInterests"
                                                    type="radio"
                                                    className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                                                />
                                                <label htmlFor={interest.id} className="ml-3 block text-sm font-medium text-gray-700">
                                                    {interest.title}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        {/* How do you identify */}
                        <div>
                            <div>
                                <Listbox value={selectedIdentity} onChange={setIdentity}>
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700">How do you identify?</Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm">
                                                    <span className="block truncate">{selectedIdentity.name}</span>
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {identities.map((identity) => (
                                                            <Listbox.Option
                                                                key={identity.id}
                                                                id="genderIdentity"
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? 'text-white bg-emerald-600' : 'text-gray-900',
                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={identity}
                                                            >
                                                                {({ selectedIdentity, active }) => (
                                                                    <>
                                                                        <span className={classNames(selectedIdentity ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                            {identity.name}
                                                                        </span>

                                                                        {selectedIdentity ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-emerald-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                )}
                                                                            >
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>
                        </div>

                        {/* Attachment style */}
                        <div>
                            <Listbox value={selectedAttachmentStyle} onChange={setAttachmentStyle}>
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="block text-sm font-medium text-gray-700">What is your attachment style?</Listbox.Label>
                                        <div className="mt-1 relative">
                                            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm">
                                                <span className="block truncate">{selectedAttachmentStyle.name}</span>
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {attachmentStyles.map((type) => (
                                                        <Listbox.Option
                                                            key={type.id}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-emerald-600' : 'text-gray-900',
                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={type}
                                                        >
                                                            {({ selectedAttachmentStyle, active }) => (
                                                                <>
                                                                    <span className={classNames(selectedAttachmentStyle ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                        {type.name}
                                                                    </span>

                                                                    {selectedAttachmentStyle ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-emerald-600',
                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                            )}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </div>


                        <div>
                            <label htmlFor="pronouns" className="block text-sm font-medium text-gray-700">
                                What are your pronouns?
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="pronouns"
                                    id="pronouns"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Sexual orientation */}
                        <div>
                            <label htmlFor="sexualOrientation" className="block text-sm font-medium text-gray-700">
                                What is your sexual orientation?
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="sexualOrientation"
                                    id="sexualOrientation"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Upload photo */}
                        <div className="sm:col-span-2">
                            <label htmlFor="photo" className="block mb-1 text-sm font-medium text-gray-700">
                                Upload a photo
                            </label>
                            <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
           



            {/* Bio */}
            <div className="sm:col-span-2">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                </label>
                <div className="mt-1">
                    <textarea
                        id="bio"
                        name="bio"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border border-gray-300 rounded-md"
                        defaultValue={''}
                    />
                </div>
            </div>

            {/* Button */}
            <div className="sm:col-span-2">
                <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                    Save
                </button>
            </div>
        </form>
                </div >
            </div >
        </div >
    )
}
