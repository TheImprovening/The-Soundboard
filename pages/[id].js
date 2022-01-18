import React from 'react';

import { Grid } from '../components/Grid';
import data from '../public/sounds.json';

const Home = ({ id }) => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <h1 className="text-3xl font-bold my-10">
                    The soundboard you never knew you needed
                </h1>

                <Grid data={data} activeSound={id}>
                </Grid>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    return { props: { ...context.params } }
}

export default Home;