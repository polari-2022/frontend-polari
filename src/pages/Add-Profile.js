import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon, XCircleIcon } from '@heroicons/react/solid'
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutation';
import moment from 'moment';

import Auth from '../utils/auth';

const peopleInterestedIn = [
    { id: 'women', title: 'Women' },
    { id: 'men', title: 'Men' },
    { id: 'non-binary', title: 'Nonbinary people' },
]

const attachmentStyles = [
    { id: 'avoidant', name: 'Avoidant' },
    { id: 'secure', name: 'Secure' },
    { id: 'anxious', name: 'Anxious' },
]

const identities = [
    { id: 'woman', name: 'Woman' },
    { id: 'man', name: 'Man' },
    { id: 'non-binary', name: 'Nonbinary person' },
]

const pronouns = [
    { id: 'she-her', name: 'She/Her' },
    { id: 'she-they', name: 'She/They' },
    { id: 'he-him', name: 'He/Him' },
    { id: 'he-they', name: 'He/They' },
    { id: 'they-them', name: 'They/Them' },
    { id: 'all', name: 'All Pronouns' },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Profile({ attachment }) {
    if (!Auth.loggedIn()) {
        window.location.replace('/login')
    }

    const [formState, setFormState] = useState({
        firstName: '',
        photo: '',
        genderInterests: '',
        bio: '',
        sexualOrientation: '',
        currentCity: '',
    });

    const [alert, setAlert] = useState(false);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    const [addProfile, { error }] = useMutation(ADD_PROFILE);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "currentCity") {
            const newVal = value.toLowerCase();

            setFormState({
                ...formState,
                [name]: newVal,
            });
        } else if (name === "birthdate") {
            setBirthdate(value)

            var eighteenYearsAgo = moment().subtract(18, "years");
            var birthday = moment(selectedBirthdate).format("MM/DD/YYYY")

            if (eighteenYearsAgo.isAfter(birthday)) {
                setAlert(false);
            } else {
                setAlert(true);
            }
        } else {
            setFormState({
                ...formState,
                [name]: value,
            });
        }
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addProfile({
                variables: {
                    ...formState,
                    pronouns: selectedPronouns.name,
                    birthdate: selectedBirthdate,
                    genderIdentity: selectedIdentity.id,
                    attachmentStyle: selectedAttachmentStyle.id,
                    user: Auth.getUser().data._id,
                },
            });
            console.log("Data", data)
            Auth.login(token);
        } catch (e) {
            console.error(e);
            setAlert(true)
        }
    };

    const match = () => {
        if (attachment === "avoidant") {
            return attachmentStyles[0]
        } else if (attachment === "secure") {
            return attachmentStyles[1]
        } else {
            return attachmentStyles[2]
        }
    }

    const [selectedIdentity, setIdentity] = useState(identities[2])
    const [selectedAttachmentStyle, setAttachmentStyle] = useState(match)
    const [selectedPronouns, setPronouns] = useState(pronouns[4])
    const [selectedBirthdate, setBirthdate] = useState("")

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
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Create Your Profile</h2>
                </div>
                <div className="mt-12">

                    {/* Form */}
                    <form onSubmit={handleFormSubmit} action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        {/* First name */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First name<span className='text-red-600 text-xl'> *</span>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formState.firstName}
                                    onChange={handleChange}
                                    id="firstName"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Birthdate */}
                        <div>
                            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                                Date of birth<span className='text-red-600 text-xl'> *</span>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="birthdate"
                                    // value={formState.birthdate}
                                    onChange={handleChange}
                                    id="birthdate"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                            {/* Error message */}
                            {alert && <div className="rounded-md bg-red-50 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-red-800">You must be 18 or older!</h3>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>

                        {/* Who are you interested in */}
                        <div className="sm:col-span-2">
                            <label htmlFor="genderInterests" className="block text-sm font-medium text-gray-700">
                                Who are you interested in?<span className='text-red-600 text-xl'> *</span>
                            </label>
                            <div className="mt-1">
                                <fieldset className="mt-4">
                                    <legend className="sr-only">Interests</legend>
                                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                        {peopleInterestedIn.map((interest) => (
                                            <div key={interest.id} className="flex items-center">
                                                <input
                                                    id={interest.id}
                                                    name="genderInterests"
                                                    value={interest.id}
                                                    onClick={handleChange}
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
                                            <Listbox.Label className="block text-sm font-medium text-gray-700">How do you identify?<span className='text-red-600 text-xl'> *</span></Listbox.Label>
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
                                        <Listbox.Label className="block text-sm font-medium text-gray-700">What is your attachment style?<span className='text-red-600 text-xl'> *</span></Listbox.Label>
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
                                                            id="attachemntStyle"
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

                        {/* Pronouns */}
                        <div>
                            <Listbox value={selectedPronouns} onChange={setPronouns}>
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="block text-sm font-medium text-gray-700">What are your pronouns?</Listbox.Label>
                                        <div className="mt-1 relative">
                                            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm">
                                                <span className="block truncate">{selectedPronouns.name}</span>
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
                                                    {pronouns.map((type) => (
                                                        <Listbox.Option
                                                            key={type.id}
                                                            id="attachemntStyle"
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-emerald-600' : 'text-gray-900',
                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={type}
                                                        >
                                                            {({ selectedPronouns, active }) => (
                                                                <>
                                                                    <span className={classNames(selectedPronouns ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                        {type.name}
                                                                    </span>

                                                                    {selectedPronouns ? (
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
                                    value={formState.sexualOrientation}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Current City */}
                        <div className="sm:col-span-2">
                            <label htmlFor="currentCity" className="block text-sm font-medium text-gray-700">
                                What city are you located in?<span className='text-red-600 text-xl'> *</span>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="currentCity"
                                    id="currentCity"
                                    // value={formState.currentCity}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>


                        {/* Upload photo */}
                        <div className="sm:col-span-2">
                            <label htmlFor="currentCity" className="block text-sm font-medium text-gray-700">
                                Link to a photo<span className='text-red-600 text-xl'> *</span>
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                    Link:
                                </span>
                                <input
                                    type="text"
                                    name="photo"
                                    id="photo"
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>


                        {/* Bio */}
                        <div className="sm:col-span-2">
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                                Bio<span className='text-red-600 text-xl'> *</span>
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={formState.bio}
                                    onChange={handleChange}
                                    rows={4}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </div >
    )
}
