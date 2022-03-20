import React, { useState } from 'react';
import OneProfile from './oneProfile'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'


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
    return <h3 className="mt-10 text-3xl font-extrabold text-center tracking-tight sm:text-4xl">No Profiles Yet</h3>;
  }
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className=" text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Dashboard</h2>
            <p className="text-xl text-gray-500 ">
              Send them a message to start a conversation. You can pass for now and find them again for another chance.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {profiles.map((profile, index) => {
                return (
                  <div className={index === current ? 'activeProfile' : 'hidden'} key={index}>
                    {index === current && (< OneProfile profile={profile} />)}
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="mx-5 inline-flex items-center px-4 py-2 border-red-600 border-2 rounded-md hover:bg-red-100 text-lg font-bold sm:text-xl text-red-600 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" onClick={nextProfile}
        >
          <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5 font-bold text-red-600" aria-hidden="true" />
          Pass
        </button>
        <button
          type="button"
          className="mx-5 inline-flex items-center px-4 py-2 border-emerald-600 border-2 rounded-md hover:bg-emerald-100 text-lg font-bold sm:text-xl text-emerald-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" onClick={goToMessage}
        >
          Message
          <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5 font-bold text-emerald-600" aria-hidden="true" />
        </button>
      </div>
    </div>
    // <div>
    //   <div className="text-center">
    //     <h2 className="mt-12 mb-16 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
    //   </div>

    //   <div className='flex justify-center profile'>
    //     {profiles.map((profile, index) => {
    //       return (
    //         <div className={index === current ? 'activeProfile' : 'nonActive'} key={index}>
    //           {index === current && (< OneProfile profile={profile} />)}

    //         </div>
    //       )
    //     })}
    //   </div>

    //   <div className="flex justify-evenly">
    //     <button className='font-bold text-lg sm:text-xl text-red-600' onClick={nextProfile}>No</button>
    //     <button className='font-bold text-lg sm:text-xl text-emerald-600' onClick={goToMessage}>Yes</button>
    //   </div>

    // </div>
  )
};

export default DashboardProfiles;
