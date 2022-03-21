import React, { useState } from 'react';
import OneProfile from './oneProfile'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import {QUERY_ONE_PROFILE_BY_USER} from '../../utils/query'
import {ADD_THREAD} from '../../utils/mutation'
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';

const DashboardProfiles = ({ profiles, title }) => {
  const [current, setCurrent] = useState(0)
  let navigate = useNavigate();

  Auth.loggedIn() && Auth.getUser().data.email  ? (console.log('logged in! yay')) :(console.log('please signup'))

  const {loading, data} = useQuery(QUERY_ONE_PROFILE_BY_USER, {variables:{user:Auth.getUser().data._id}});
  const [addThread, {error}] = useMutation(ADD_THREAD)

  const userData = data?.userprofile || {};
  // console.log("userData", userData)
  const userName = userData.firstName
  const userLocation = userData.currentCity
  // console.log(userLocation)
  const userProfileID = userData._id
  const userId =Auth.getUser().data._id
  let userInterest = userData.genderInterests
  // console.log("user interest", userInterest)
  let userSingularInterest
  
  function convertToSingular(){
    if(userInterest === 'women'){
      userSingularInterest = 'woman'
    }
    else if(userInterest === 'men'){
      userSingularInterest = 'man'
    }
    else if(userInterest === 'non-binany'){
      userSingularInterest = 'non-binary'
    }
  }
  convertToSingular()
  
  let userIdentity = userData.genderIdentity
  console.log("user identity", userIdentity)
  let userPluralIdentity
  function convertToPlural(){
    if(userIdentity === 'woman'){
      userPluralIdentity = 'women'
    }
    else if(userIdentity === 'man'){
      userPluralIdentity = 'men'
    }
    else if(userIdentity === 'non-binany'){
      userPluralIdentity = 'non-binary'
    }else(userPluralIdentity = 'non-binary')
  }
  convertToPlural()

  let userAttachmentStyle = userData.attachmentStyle
  let finalMatchArray
  function  Lovers(){
      // remove logged in user 
      const removeMes =  profiles.filter(profile => profile._id !== userProfileID )
      // filter for user's interests and compare with the profiles gender idenity 
      const interests = removeMes.filter(profile => profile.genderIdentity === userSingularInterest)
      // filter for user's genderIndentity to equal profile interest 
      const idenity = interests.filter(profile => profile.genderInterests === userPluralIdentity)  
      // filter for user's attachment Styles and compare with profiles attachment styles
      let attachmentStyleFilter 
      function attachmentStyle(){
        if( userAttachmentStyle === 'avoident'){
          attachmentStyleFilter = idenity.filter(profile => profile.attachmentStyle !== 'anxious')
        }else if( userAttachmentStyle === 'anxious'){
          attachmentStyleFilter = idenity.filter(profile => profile.attachmentStyle !== 'avoident')
        }else if(userAttachmentStyle === 'secure'){
          attachmentStyleFilter = idenity 
        }else( attachmentStyleFilter = idenity)
      }
      attachmentStyle();
      // filter for users location and profile's locations 
      const location = attachmentStyleFilter.filter(profile =>profile.currentCity === userLocation)
      // finalMatchArray = attachmentStyleFilter
      finalMatchArray =location
      // find out who the user seleted 
      // console.log( userProfileID, userSingularInterest,userPluralIdentity,userAttachmentStyle,userLocation)
  }
   Lovers();
  // console.log("current", current)
  let currentProfileName = profiles[current].firstName
  let currentProfileID = profiles[current].user
  let currentProfileUserID = currentProfileID._id
  // console.log("currentProfile", currentProfileID)
  // console.log("user ID", userId)
  const nextProfile = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  const goToMessage = async (event) => {
    // useMutations to addThread ! 
    event.preventDefault();

    try{
      const { data } = await addThread({
        variables:{
          text:`A Match Between ${userName} and ${currentProfileName}`,
          user: userId,
          match: currentProfileUserID
        }
        // Auth.login(token);

      })
      // console.log("Data",data)
      // Navigate to the next step after POST
      await navigate(`/messages`);
      // alert('make function to go the messages')
      }catch(error){
        console.error(error)
      }
  
  
    }
    console.log ("users matches ", finalMatchArray)
    let length = finalMatchArray.length
  

  // const nextProfile = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1)
  // }
  // //   console.log(current)
  // const goToMessage = () => {
  //   alert('make function to go the messages')

  // }

  if (!finalMatchArray.length) {
    return <h3 className="mt-10 text-3xl font-extrabold text-center tracking-tight sm:text-4xl">No Profiles Yet or No Matches </h3>;
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
          {loading ? (
      <div>Loading ... </div>
    ):(
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {finalMatchArray.map((profile, index) => {
                return (
                  <div className={index === current ? 'activeProfile' : 'hidden'} key={index}>
                    {index === current && (< OneProfile profile={profile} />)}
                  </div>
                )
              })}
            </ul>
          </div>       
    )}
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
