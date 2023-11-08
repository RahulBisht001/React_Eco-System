import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const globalAPI = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000/",
	}),
	tagTypes: ["NEW_POSTS"],
	endpoints: (builder) => ({
		getPosts: builder.query<PostType[], string>({
			query: () => "posts",
			providesTags: ["NEW_POSTS"],
		}),

		newPost: builder.mutation<PostType, PostType>({
			query: (post) => ({
				url: "posts",
				method: "POST",
				body: post,
			}),
			invalidatesTags: ["NEW_POSTS"],
		}),
	}),
});

export const { useGetPostsQuery, useNewPostMutation } = globalAPI;
