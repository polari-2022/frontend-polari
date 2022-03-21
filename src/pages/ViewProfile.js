import { useQuery } from '@apollo/client';
import { QUERY_PROFILES} from '../utils/query';
import Profile from '../components/Profile/Profile';

import Auth from '../utils/auth';

const ViewProfile = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
//   console.log('data', data)
  const profiles = data?.profiles || [];

  return (
    <div>
      {Auth.loggedIn() ? (
      <>
        {loading ? (
        <div>Loading...</div>
        ) : (
            <Profile
                profiles={profiles}
                title="Profile"
            />
        )}
        </>
      ) : (
        <>
          {window.location.replace('/login')}
        </>
      )
      }

    </div>
  );

};

export default ViewProfile;