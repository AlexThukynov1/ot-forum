import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../../core/axios-base-query";
import { GlobalFeedIn } from "./dto/global-feed.in";
import { PAGE_SIZE } from "../consts";

interface GlobalFeedPArams {
  page: number;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedPArams>({
      query: ({page}) => ({
        url: "/articles",
        method: "get",
        params: {
          limit: PAGE_SIZE,
          offset: page * PAGE_SIZE
        }
      }),
    }),
  }),
});

export const {useGetGlobalFeedQuery} = feedApi
