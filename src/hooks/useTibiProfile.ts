import API, { GraphQLResult } from '@aws-amplify/api';
import { graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { useAuth } from '../Admin/contexts/AuthContext';
import { User } from '../API';
import { getUser } from '../graphql/queries';

const useTibiProfile = (profileId?: string) => {
  const [profile, setProfile] = useState<User | null | undefined>(null);
  const { user } = useAuth();
  const realProfileId = profileId || user.id;
  useEffect(() => {
    (async () => {
      try {
        const result = (await API.graphql(
          graphqlOperation(getUser, {
            id: realProfileId
          })
        )) as GraphQLResult<User>;

        setProfile(result.data);
      } catch (ex) {
        console.error(ex);
      }
    })();
  }, [realProfileId]);

  return profile;
};

export default useTibiProfile;
