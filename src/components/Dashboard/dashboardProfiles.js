import React, { useState } from 'react';
import OneProfile from './oneProfile'


const DashboardProfiles = ({ profiles, title }) => {
  const [current, setCurrent] = useState(0)
  const length = profiles.length
  // Need to make making the MatchLovers algorithm !! 

  // New list of profiles / useState and spreader function 
  function Lovers() {
    console.log("profiles", profiles[0])
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
  const nextProfile = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
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
      <div className="text-center">
        <h2 className="mt-12 mb-16 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      </div>

      <div className='flex justify-center profile'>
        {profiles.map((profile, index) => {
          return (
            <div className={index === current ? 'activeProfile' : 'nonActive'} key={index}>
              {index === current && (< OneProfile profile={profile} />)}

            </div>
          )
        })}
      </div>

      <div className="flex justify-evenly">
        <button className='font-bold text-lg sm:text-xl text-red-600' onClick={nextProfile}>No</button>
        <button className='font-bold text-lg sm:text-xl text-emerald-600' onClick={goToMessage}>Yes</button>
      </div>

    </div>
  )
};

export default DashboardProfiles;
