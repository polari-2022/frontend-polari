import './dashboardProfile.css'

export default function OneProfile({profile}){
    return(
        <div>
            <h1>Hello my name is {profile.firstName}</h1>
            {/* <img src={profile.photo} */}
            <h1>How to display photo? {profile.photo}</h1>
            <h2>My attachment style is  {profile.attachmentStyle}</h2>
            <h3>I identify as {profile.genderIdentity}</h3>
            <h3>{profile.genderInterests}</h3>
            <h3>{profile.bio}</h3>
            <h3>{profile.pronouns}</h3>
            <h3>need to fix this with a ternary {profile.sexualOrientation}</h3>
            <h3>{profile.currentLocation}</h3>
        </div>
    )
}