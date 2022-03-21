import React, { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/solid'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THREADS, QUERY_ME, } from '../../utils/query';

import Auth from '../../utils/auth';


const AllMessages = () => {

  Auth.loggedIn() && Auth.getUser().data.email ? (console.log('logged in! yay')) : (console.log('please signup'))

  console.log("user3", Auth.getUser().data._id)

  const { loading, data } = useQuery(QUERY_THREADS, {
    variables: { user: Auth.getUser().data._id }
  });


  const threads = data?.threads || [];


  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* Information banner */}
          <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-blue-700">Thank you for being a beta user of Polari. You can not currently message matches.</p>
                <p className="mt-3 text-sm md:mt-0 md:ml-6">
                  <a href="/dashboard" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                    Back to Dashboard <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Messages header */}
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Messages</h2>
          </div>

          {/* Gear icon */}
          <div className="flex justify-center my-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 drop-shadow-md text-emerald-800 hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
        </>

      )}
    </div>
  )
};

export default AllMessages;
