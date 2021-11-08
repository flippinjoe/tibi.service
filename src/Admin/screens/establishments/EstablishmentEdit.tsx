import { useReducer, useState } from 'react';
import CrudEdit from '../../components/CrudEdit';
import { graphqlOperation } from 'aws-amplify';
import API from '@aws-amplify/api';
import { Establishment, GetEstablishmentQuery } from '../../../API';
import { getEstablishment } from '../../../graphql/queries';
import { updateEstablishment } from '../../../graphql/mutations';

const reducer = (state: Partial<Establishment>, action: Partial<Establishment>) => {
  return {
    ...state,
    ...action
  };
};

const EstablishmentEdit = () => {
  const [state, dispatch] = useReducer(reducer, {} as Partial<Establishment>);

  return (
    <CrudEdit
      title="Establishment Edit"
      record={state}
      fetch={async (id) => {
        return (
          API.graphql(graphqlOperation(getEstablishment, { id })) as Promise<{
            data: GetEstablishmentQuery;
          }>
        ).then((result) => {
          return result.data.getEstablishment || {};
        });
      }}
      fields={[{ id: 'name', name: 'Name' }]}
      onUpdate={async (updates) => {
        dispatch(updates);
      }}
      onSubmit={async () => {
        return API.graphql(
          graphqlOperation(updateEstablishment, {
            input: {
              id: state.id,
              name: state.name,
              type: state.type
            }
          })
        );
      }}
    />
  );
};

export default EstablishmentEdit;
