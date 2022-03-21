// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THREADS } from '../utils/query';
import AllMessages from '../components/Messages/AllMessages'
import Auth from '../utils/auth';



export default function Message(){

    Auth.loggedIn() && Auth.getUser().data.email  ? (console.log('logged in! yay')) : (window.location.replace('/login'))

    // console.log("user3", Auth.getUser().data._id)
    
    const {loading, data} = useQuery(QUERY_THREADS, {
        variables:{ user: Auth.getUser().data._id}
    });

    const threads = data?.threads || [];


    if (!threads.length) {
        return <h3>No Threads Yet</h3>;
    }
    
    return(
        
        <div>
        {loading ? (
            <div>Loading...</div>
        ):(
            <AllMessages threads={threads} />
        )}
    </div>
    )
}
