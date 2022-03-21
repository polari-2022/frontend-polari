import { NavLink } from 'react-router-dom'

import Auth from '../../utils/auth';

const Profile = ({ profiles }) => {
    const userProfileID = Auth.getUser().data._id
  

    const myProfile = profiles.filter(profile => profile.user._id === userProfileID)

    return (
        <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                    <div className="text-center space-y-5 sm:space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">My Profile</h2>
                        <p className="text-xl text-gray-500 ">
                            This is how other people see your profile.
                        </p>
                        <NavLink
                            key="edit-profile"
                            to="/edit-profile">
                            <button
                                type="button"
                                className="mt-5 mx-5 inline-flex items-center px-4 py-2 border-emerald-600 border-2 rounded-md hover:bg-emerald-100 text-medium font-bold sm:text-xl text-emerald-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                            >
                                Edit Profile
                            </button>
                        </NavLink>
                    </div>
                    <div className="lg:col-span-2">
                        <ul
                            role="list"
                            className="space-y-12 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
                        >
                            <div>
                                <li key={myProfile[0].firstName} className="text-xl sm:py-8">
                                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0 divide-y-4 divide-emerald-500">
                                        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 ">
                                            <img className="object-cover shadow-lg rounded-lg" src={myProfile[0].photo} alt="" />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="space-y-4">
                                                <div className="text-lg leading-6 font-medium space-y-1">
                                                    <h3 className="text-3xl font-bold my-3">{myProfile[0].firstName}</h3>
                                                    <div className="flex flex-row">
                                                        <span className="inline-flex items-center mr-2 px-2.5 py-0.5 rounded-md text-base font-medium bg-green-100 text-green-800">
                                                            {myProfile[0].currentCity.charAt(0).toUpperCase() + myProfile[0].currentCity.slice(1)}
                                                        </span>
                                                        <span className="inline-flex items-center mx-2 px-2.5 py-0.5 rounded-md text-base font-medium bg-blue-100 text-blue-800">
                                                            {myProfile[0].pronouns}
                                                        </span>
                                                        <span className="inline-flex items-center mx-2 px-2.5 py-0.5 rounded-md text-base font-medium bg-purple-100 text-purple-800">
                                                            {myProfile[0].attachmentStyle.charAt(0).toUpperCase() + myProfile[0].attachmentStyle.slice(1)}
                                                        </span>
                                                        {
                                                            (!myProfile[0].sexualOrientation ? null : <span className="inline-flex items-center mx-2 px-2.5 py-0.5 rounded-md text-base font-medium bg-pink-100 text-pink-800">
                                                                {myProfile[0].sexualOrientation.charAt(0).toUpperCase() + myProfile[0].sexualOrientation.slice(1)}
                                                            </span>)
                                                        }
                                                    </div>
                                                </div>
                                                <div className="text-lg">
                                                    <p className="text-gray-500">{myProfile[0].bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;