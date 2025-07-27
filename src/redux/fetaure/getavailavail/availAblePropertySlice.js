"use client";

import { apiSlice } from "@/redux/apiSlice/apiSlice";

export const AvailAbleProperty = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({


    getAvailability: builder.query({
      query: () => "/api/ical",
    }),
  }),
});

export const { useGetAvailabilityQuery} = AvailAbleProperty;
