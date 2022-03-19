import { useQuery } from '@apollo/client';
import { QUERY_PROFILES} from '../utils/query';
import DashboardProfiles from '../components/DashboardProfiles/dashboardProfiles';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
//   console.log('data', data)
  const profiles = data?.profiles || [];

  return (
    <div>
        {loading ? (
        <div>Loading...</div>
        ) : (
            <DashboardProfiles
                profiles={profiles}
                title="HERE are some love matches"
            />
        )}
    </div>
  );

};

export default Dashboard;