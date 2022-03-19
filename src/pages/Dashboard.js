import { useQuery } from '@apollo/client';
import { QUERY_PROFILES} from '../utils/query';
import DashboardProfiles from '../components/Dashboard/dashboardProfiles';

import Auth from '../utils/auth';

const Dashboard = () => {
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
            <DashboardProfiles
                profiles={profiles}
                title="HERE are some love matches"
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

export default Dashboard;