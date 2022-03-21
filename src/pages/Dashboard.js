import { useQuery } from '@apollo/client';
import { QUERY_PROFILES} from '../utils/query';
import DashboardProfiles from '../components/Dashboard/dashboardProfiles';

import Auth from '../utils/auth';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);

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
                title="Matches"
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