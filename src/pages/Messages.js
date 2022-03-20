import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THREADS, QUERY_ME,} from '../utils/query';
import AllMessages from '../components/Messages/AllMessages'
import Auth from '../utils/auth';


export default function Message(){
    // const { _id } =useParams();
    // const { loading , data } =useQuery(QUERY_ME);
    // console.log("user-data",data)
    // console.log("piling",loading)


    // const userData = data?.me || {}
    // console.log("user", userData)
    // console.log("user-data",user)


    Auth.loggedIn() && Auth.getUser().data.email  ? (console.log('logged in! yay')) : (console.log('please signup'))

    // console.log("user2",data)
    console.log("user3", Auth.getUser().data._id)
    // const person = Auth.getUser().data._id



    // console.log("user", user)
    // console.log("userID", user._id)

    const {loading, data} = useQuery(QUERY_THREADS, {
        variables:{ user: Auth.getUser().data._id}
    });
    // console.log('HELLO',datum)
    const threads = data?.threads || [];

    if (!threads.length) {
        return <h3>No Threads Yet</h3>;
      }
    
    return(
        <AllMessages />
    )
}
