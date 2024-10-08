import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Animal } from '../../types'
import {BASE_API_URL} from "../../constants.ts";

export const animalApi = createApi({
    reducerPath: 'AnimalApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL + '/animals' }),
    endpoints: (builder) => ({
        // fetch all animals
        getAnimals: builder.query<Animal[], void>({
            query: () => ``,
        }),
        // fetch a single animal by ID
        getAnimalById: builder.query<Animal, string>({
            query: (id) => `${id}`,
        }),
        // add a new animal
        addAnimal: builder.mutation<Animal, Partial<Animal>>({
            query: (newAnimal) => ({
                url: ``,
                method: 'POST',
                body: newAnimal,
            }),
        }),
        // edit an existing animal by id
        editAnimalById: builder.mutation<Animal, { id: string; updates: Partial<Animal> }>({
            query: ({ id, updates }) => ({
                url: `${id}`,
                method: 'PATCH',
                body: updates,
            }),
        }),
    }),
})

export const {
    useGetAnimalsQuery,
    useGetAnimalByIdQuery,
    useAddAnimalMutation,
    useEditAnimalByIdMutation} = animalApi