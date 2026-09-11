import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,

  prepareHeaders: (headers) => {
    // const token = localStorage.getItem("token");

    // if (token) {
    //   headers.set("Authorization", `Bearer ${token}`);
    // }

    // headers.set("Content-Type", "application/json");

    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  // Interceptor
  if (result.error) {
    console.log("API Error:", result.error);
  }

  if (result.error?.status === 401) {
    console.log("Unauthorized");

    // هنا ممكن تعمل logout
    // أو refresh token
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});