import { useQuery } from '@apollo/client';
import { QUERY_PROFILES} from '../utils/query';
import DashboardProfiles from '../components/Dashboard/dashboardProfiles';

import Auth from '../utils/auth';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);

  const profiles = data?.profiles || [];

    // fisher-yates(aka Knuth) Shuffle
  function fisherYates(array){
    for(let i = array.length - 1; i>0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp 
    }
  }
  const randomarray = [... profiles]
  fisherYates(randomarray)

  return (
    <div>
      {Auth.loggedIn() ? (
      <>
        {loading ? (
        <div>Loading...</div>
        ) : (
            <DashboardProfiles
                profiles={randomarray}
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