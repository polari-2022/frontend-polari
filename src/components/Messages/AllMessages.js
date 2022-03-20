import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THREADS, QUERY_ME,} from '../../utils/query';

import Auth from '../../utils/auth';


const AllMessages = () => {

  Auth.loggedIn() && Auth.getUser().data.email  ? (console.log('logged in! yay')) : (console.log('please signup'))

  console.log("user3", Auth.getUser().data._id)

  const {loading, data} = useQuery(QUERY_THREADS, {
    variables:{ user: Auth.getUser().data._id}
  });
  

  const threads = data?.threads || [];

  
  return(
    <div>
        {loading ? (
            <div>Loading...</div>
        ):(
            <div>
                {threads.map((thread, index)=>{
                return(
                <div key={index}>
                    {thread.text}                    
                </div>
                )
                })}
            </div>
        )}
    </div>
  )
};

export default AllMessages;
