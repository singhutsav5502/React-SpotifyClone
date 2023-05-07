import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'd3fdc625dfmsh2d4d523a962cdccp15bcc7jsne7c6ac2556f9');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/shazam-songs/get-details?id=${songid}` }),
        getSongImage: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongImageQuery,
} = shazamCoreApi;