import { Grid, Typography, Stack, Container} from "@mui/material"
import { useEffect, useState } from "react"

type ListerProps<T> = {
    title: string
    fetch: () => Promise<[T]>
    render: (data: [T]) => Promise<any>
}


const Lister = <T, >(props: ListerProps<T>) => {
    const [list, setList] = useState<any|null>(null)
    

    useEffect(() => {

        (async () => {
            try {
                const data = await props.fetch()
                const uiData = await props.render(data)
                setList(uiData)
            }
            catch (ex) {
                console.error(ex)
                alert('Error loading data')
            }
        })()

    }, [props])

    if (!list) {
        return (
            <p>Fetching Data...</p>
        )
    }

    return (
        <Grid container alignItems="center" spacing={1}>
            <Typography variant="h4">{props.title}</Typography>
            <Container>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0}
                >
                    {list}
                </Stack>
            </Container>
        </Grid>
        // <h1>{props.title}</h1>
        // <div className='list'>
        //     {list}
        // </div>
        // </>
    )
}


export const CrudList = Lister