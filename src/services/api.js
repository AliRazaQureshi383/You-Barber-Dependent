import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://you.stackup.solutions/api/',
  }),
  endpoints: builder => ({
    getAllPost: builder.query({
      query: token => {
        let value = token.data3;

        return {
          url: 'dependent/bookingList',
          method: 'GET',

          headers: {
            Authorization: `Bearer ${value}`,
          },
        };
      },
    }),
    bookingDetails: builder.query({
      query: recive => {
        let auth = recive.data.tokenValue;
        let id = recive.data.recivedUserId;

        console.log('auth', auth);

        return {
          url: 'dependent/booking_detail',
          method: 'POST',

          headers: {
            Authorization: `Bearer ${auth}`,
          },

          body: {
            booking_id: id,
          },
        };
      },
    }),
    createPost: builder.mutation({
      query: newPost => {
        return {
          url: 'sign_in',
          method: 'POST',
          body: newPost,
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useCreatePostMutation,
  useBookingDetailsQuery,
} = postApi;
