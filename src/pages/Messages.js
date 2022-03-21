// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THREADS } from '../utils/query';
import AllMessages from '../components/Messages/AllMessages'
import Auth from '../utils/auth';



export default function Message() {

    Auth.loggedIn() && Auth.getUser().data.email ? (console.log('logged in! yay')) : (window.location.replace('/login'))

    console.log("user3", Auth.getUser().data._id)

    const { loading, data } = useQuery(QUERY_THREADS, {
        variables: { user: Auth.getUser().data._id }
    });

    const threads = data?.threads || [];


    if (!threads.length) {
        return (
            <div className="mt-8 mb-20 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">No Threads Yet</h2>
            </div>
        );
    }

    return (
        <AllMessages />
    )
}
