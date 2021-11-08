import { CrudList } from '../../components/CrudList';
import { graphqlOperation } from 'aws-amplify';
import API from '@aws-amplify/api';
import { Establishment, ListEstablishmentsQuery } from '../../../API';
import { listEstablishments } from '../../../graphql/queries';
import { Link } from 'react-router-dom';

const EstablishmentsList = () => {
  return (
    <CrudList
      title="Supp"
      fetch={async () => {
        return (
          API.graphql(graphqlOperation(listEstablishments)) as Promise<{
            data: ListEstablishmentsQuery;
          }>
        ).then((data) => (data.data.listEstablishments?.items ?? []) as [Establishment]);
      }}
      render={async (establishments) => {
        return establishments.map((e) => {
          return (
            <Link to={`/admin/establishments/${e.id}`} key={e.id}>
              <p>Name: {e.name}</p>
              <p id={e.id}>Type: {e.type}</p>
            </Link>
          );
        });
      }}
    />
  );
};

export default EstablishmentsList;
