import React, {useState} from 'react';
import OneProfile from './oneProfile'
import './dashboardProfile.css'

const DashboardProfiles = ({ profiles, title }) => {
  const [current, setCurrent] = useState(0)
  const length = profiles.length
//   need to make making the MatchLovers algorithm !! 

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

    </div>
  );
};

export default DashboardProfiles;
