import './dashboardProfile.css'



export default function OneProfile({ profile }) {

    return (
        <div>
            <ul role="list" className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                <li key={profile.firstName}>
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                        <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                            <img className="object-cover shadow-lg rounded-lg" src={profile.photo} alt="" />
                        </div>
                        <div className="sm:col-span-2">
                            <div className="space-y-4">
                                <div className="leading-6 font-medium space-y-3">
                                    <h3 className="text-xl sm:text-2xl md:text-4xl">{profile.firstName}</h3>
                                    <button className="text-m sm:text-lg p-1 mr-1 rounded-full border-solid border-2 border-emerald-700 text-emerald-600">{profile.attachmentStyle}</button>
                                    <button className="text-m sm:text-lg p-1 m-1 rounded-full border-solid border-2 border-emerald-700 text-emerald-600">{profile.currentLocation}</button>
                                    {
                                        (!profile.pronouns.length ? '' : <button className="text-m sm:text-lg p-1 m-1 rounded-full border-solid border-2 border-emerald-700 text-emerald-600">{profile.pronouns}</button>)
                                    }
                                </div>
                                <div className="text-lg">
                                    <p className="text-lg sm:text-xl text-gray-500">{profile.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul >
        </div>
    )
}
