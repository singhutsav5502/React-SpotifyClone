import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core7.p.rapidapi.com/',
            prepareHeaders:(headers)=>{
                headers.set('X-RapidApi-Key' , 'd3fdc625dfmsh2d4d523a962cdccp15bcc7jsne7c6ac2556f9');

                return headers;
            },
        }),
        endpoints: (builder)=>({
            getTopCharts: builder.query({query: '/charts/get-top-songs-in-world'}),
        }),
    });

    export const{
        useGetTopChartsQuery,
    }= shazamCoreApi;