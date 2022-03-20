export default function OneProfile({ profile }) {

    return (
        <div>
            <li key={profile.firstName} className="text-xl sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0 divide-y-4 divide-emerald-500">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 ">
                        <img className="object-cover shadow-lg rounded-lg" src={profile.photo} alt="" />
                    </div>
                    <div className="sm:col-span-2">
                        <div className="space-y-4">
                            <div className="text-lg leading-6 font-medium space-y-1">
                                <h3 className="text-3xl font-bold my-3">{profile.firstName}</h3>
                                <div className="flex flex-row">
                                    <span className="inline-flex items-center mr-2 px-2.5 py-0.5 rounded-md text-base font-medium bg-green-100 text-green-800">
                                        {profile.currentCity.charAt(0).toUpperCase() + profile.currentCity.slice(1)}
                                    </span>
                                    <span className="inline-flex items-center mx-2 px-2.5 py-0.5 rounded-md text-base font-medium bg-blue-100 text-blue-800">
                                        {profile.pronouns}
                                    </span>
                                    <span className="inline-flex items-center mx-2 px-2.5 py-0.5 rounded-md text-base font-medium bg-purple-100 text-purple-800">
                                        {profile.attachmentStyle.charAt(0).toUpperCase() + profile.attachmentStyle.slice(1)}
                                    </span>
                                    {
                                        (!profile.sexualOrientation ? null : <span className="inline-flex items-center mx-2 px-2.5 py-0.5 rounded-md text-base font-medium bg-pink-100 text-pink-800">
                                        {profile.sexualOrientation.charAt(0).toUpperCase() + profile.sexualOrientation.slice(1)}
                                    </span>)
                                    }
                                </div>
                            </div>
                            <div className="text-lg">
                                <p className="text-gray-500">{profile.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            {/* <ul role="list" className="mb-10 space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                <li key={profile.firstName}>
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                        <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                            <img className="object-cover shadow-lg rounded-lg" src={profile.photo} alt="" />
                        </div>
                        <div className="sm:col-span-2">
                            <div className="space-y-4">
                                <div className="leading-6 font-medium space-y-3">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl">{profile.firstName}</h3>
                                    <button className="text-m sm:text-lg p-1 mr-1 drop-shadow-sm rounded-full border-solid border-2 border-emerald-700 text-emerald-600">{profile.attachmentStyle}</button>
                                    <button className="text-m sm:text-lg p-1 m-1 drop-shadow-sm rounded-full border-solid border-2 border-emerald-700 text-emerald-600">{profile.currentCity}</button>
                                    {
                                        (!profile.pronouns.length ? '' : <button className="text-m sm:text-lg p-1 m-1 drop-shadow-sm rounded-full border-solid border-2 border-emerald-700 text-emerald-600">{profile.pronouns}</button>)
                                    }
                                </div>
                                <div className="text-lg">
                                    <p className="text-lg sm:text-xl text-gray-500">{profile.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul > */}
        </div>
    )
}
