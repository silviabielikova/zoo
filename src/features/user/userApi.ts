import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from '../../types'
import {BASE_API_URL} from "../../constants.ts";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL + '/users' }),
    endpoints: (builder) => ({
        // fetch all users
        getUsers: builder.query<User[], void>({
            query: () => ``,
        }),
        // fetch a single user by ID
        getUserById: builder.query<User, string>({
            query: (id) => `${id}`,
        }),
        // add a new user
        addUser: builder.mutation<User, Partial<User>>({
            query: (newUser) => ({
                url: ``,
                method: 'POST',
                body: newUser,
            }),
        }),
        // edit an existing user by id
        editUserById: builder.mutation<User, { id: string; updates: Partial<User> }>({
            query: ({ id, updates }) => ({
                url: `${id}`,
                method: 'PATCH',
                body: updates,
            }),
        }),
    }),
})

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useAddUserMutation,
    useEditUserByIdMutation} = userApi