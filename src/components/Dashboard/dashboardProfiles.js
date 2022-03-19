import React, {useState} from 'react';
import OneProfile from './oneProfile'
import './dashboardProfile.css'

import Auth from '../../utils/auth';




const DashboardProfiles = ({ profiles, title }) => {
  const [current, setCurrent] = useState(0)
  const length = profiles.length
//   need to make making the MatchLovers algorithm !! 
//   new list of profiles / useState and spreader function 
function Lovers(){
  console.log("profiles",profiles[0])
  // remove logged in user 
  // const removeMes = profiles.filter(profile => !profile._id === me._id )
  // console.log("removeMes",removeMes)
  // filter for the genderInterest
  // const nonbinary = profiles[0].genderInterests[0]
  // const nonbinaries = profiles.filter(profiles => profiles === nonbinary)
  // console.log("nonbinay", nonbinary)
  // console.log("nonbinaries", nonbinary)

  // use spread function to add all the genderInterest arrays to combine
  let interest 
}
Lovers();
  const nextProfile =() => {
      setCurrent(current === length - 1 ?  0:current + 1 )
  }
//   console.log(current)
  const goToMessage = () => {
      alert('make function to go the messages')
      
  }

  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }
  return (
    <div>
      {Auth.loggedIn() ? (
      <>
        <h3 className="text-primary">{title}</h3>

        
        <button className='nobutton' onClick={nextProfile}>Nah</button>
        <div className='profile'>
          {profiles.map((profile, index)=>{
              return(
                  <div className={ index === current ? 'activeProfile' : 'nonActive'} key={index}>
                      {index === current && (< OneProfile  profile={profile} />) }
                      
                  </div>
              )
          })}
        </div>

        <button className='yesbutton' onClick={goToMessage}>YASSSS</button>

        </>
      ) : (
        <>
          {window.location.replace('/login')}
        </>
      )
      }
      </div>
  )
};

export default DashboardProfiles;
