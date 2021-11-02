import { CrudList } from "../../components/CrudList"
import { graphqlOperation } from "aws-amplify"
import API from "@aws-amplify/api"
import { Establishment, ListEstablishmentsQuery } from '../../../API'
import { listEstablishments } from '../../../graphql/queries'

const EstablishmentsList = () => {


    
    return (
        <CrudList
            title="Supp"
            fetch={async () => {
                return (API.graphql(graphqlOperation(listEstablishments)) as Promise<ListEstablishmentsQuery>)
                .then(data => (data.listEstablishments?.items ?? []) as [Establishment])
            }}
            render={async (establishments) => {
                return establishments.map(e => {
                    return <p>{e.type}</p>
                })
            }}
        />
    )
}

export default EstablishmentsList